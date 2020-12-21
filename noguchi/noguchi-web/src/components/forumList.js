import React,{useState,useEffect} from 'react';
import ForumCard from './forumCard';
import {MyCard, MyReplies} from './card';
import { Button, Empty } from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';
import axios from 'axios';
const ForumList =()=>{
    const [forums,setForums]=useState([])
    useEffect(() => {
          axios.get('http://localhost:1337/forums')
          .then(
            res =>{
              if(res.data){
               // console.log(res.data)
                setForums(res.data)
            }} )
          .catch((error) => {
            console.log(error);
          })
      },[]);
    

    const [more,setMore]=useState(false);
    const clicked=localStorage.getItem('clicked');
    console.log(clicked) 
    let selectedForum=forums.filter(forum=>forum.id===parseInt(clicked))
    console.log(selectedForum[0])  
    const replies = ['Great article','The best','Love Ya','Not Useful article','Great article','The best','Love Ya','Not Useful article','Great article','The best','Love Ya','Not Useful article'];
    return(
        <>
        {
            !more?
            <div  style={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'100%',padding:'0% 5% 0% 5%'}}>
                {
                    forums?
                    forums.map((forum)=><ForumCard id={forum.id} data={forum}  onClick={()=>setMore(true)}/>)
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
                        <MyCard data={selectedForum[0]} /* onClick={()=>{setShowDetails(!showDetails)}} *//>
                        <MyReplies title="Replies" replies={selectedForum[0].reply} />
                    
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