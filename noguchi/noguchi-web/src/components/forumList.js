import React,{useState,useEffect} from 'react';
import ForumCard from './forumCard';
import {MyCard, MyReplies} from './card';
import { Button, Empty } from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';
import axios from 'axios';
import firebase from '../api';

const ForumList =(props)=>{
    const [forums,setForums]=useState([])
    const [firebaseForums,setFirebaseForums]=useState([])

    useEffect(() => {
      async function getForums(){
      if(props.filter){

       await axios.get('http://localhost:1337/forums',
       {
         params:{
           disease:props.filter
         }
       }
      
       )
        .then(
          res =>{
            if(res.data){
              setForums(res.data)
          }} )
        .catch((error) => {
          console.log(error);
        })
      }else if(props.location){

        await axios.get('http://localhost:1337/forums',
       {
         params:{
           community:props.location
         }
       }
      
       )
        .then(
          res =>{
            if(res.data){
              setForums(res.data)
          }} )
        .catch((error) => {
          console.log(error);
        })
      }else if(props.user){
        console.log(props.user)
        await axios.get('http://localhost:1337/forums',
        {
          params:{
            author:props.user
          }
        }
       
        )
         .then(
           res =>{
             if(res.data){
               setForums(res.data)
           }} )
         .catch((error) => {
           console.log(error);
         })
      }
      
      else{
        await axios.get('http://localhost:1337/forums')
         .then(
           res =>{
             if(res.data){
               setForums(res.data)
           }} )
         .catch((error) => {
           console.log(error);
         })
      }
      }
      getForums()
          
      },[]);
    
      useEffect(()=>{
       async function filterData(filter){
          
        await setForums(forums.filter(forum=>forum.disease.name===filter))  
       
      }
        
        filterData(props.filter);
       
        
      },[props.filter])

      useEffect(()=>{
        firebase.firestore().collection('forums').onSnapshot(

          snapshot=>{
            let allForums=[]
            snapshot.docs.map(
              d=>{
                allForums.push(d.data())
              }
            )
            setFirebaseForums(allForums)
          }
        )
      },[])
      
    const [more,setMore]=useState(false);
    const clicked=localStorage.getItem('clicked');
    let selectedForum=forums.filter(forum=>forum.id===parseInt(clicked))
   /*  console.log(selectedForum[0])   */
       return(
        <>
        {
            !more?
            <div  style={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'100%',padding:'0% 5% 0% 5%'}}>
                {
                  
                    firebaseForums?
                    firebaseForums.map((forum)=><ForumCard id={forum.id} key={forum.id} data={forum}  onClick={()=>setMore(true)}/>)
                    :
                   <Empty description='No Forums'/>
                }
                
            </div>:
            <>
            {
                selectedForum?
                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'100%',padding:'0% 5% 0% 5%'}}>
                <Button size='small' style={{borderRadius:40,fontWeight:'bold',border:'1px solid lightslategrey',color:'lightslategrey'}}  onClick={()=>setMore(false)}><ArrowLeftOutlined/></Button>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',width:'100%'}}>
                        <MyCard data={selectedForum} /* onClick={()=>{setShowDetails(!showDetails)}} *//>
                        {/* <MyReplies title="Replies" replies={selectedForum[0].replies} /> */}
                    
                 </div>
                </div>
            :
            <Empty/>
            }
                
           </>    
           
        }
        </>
    );
}
export default ForumList