import React,{useState,useEffect} from 'react';
import ForumList from './forumList';
import { Button, Empty } from 'antd';
import {CloseOutlined} from '@ant-design/icons';
import TagBox from './tagBox';
import Avatar from 'antd/lib/avatar/avatar';
import axios from 'axios'
const TagSet =(props)=>{
    const [view,setView]=useState(false);
    const selectedDiseaseTag=localStorage.getItem('diseaseTag');
    const selectedLocationTag=localStorage.getItem('communityTag');
    const [diseases,setDiseases]=useState([])
    const [communities,setCommunities]=useState([])
    useEffect(() => {
        axios.get('http://localhost:1337/diseases')
        .then(
          res =>{
            if(res.data){
              setDiseases(res.data)
          }} )
        .catch((error) => {
          console.log(error);
        })
    },[]);
    useEffect(() => {
        axios.get('http://localhost:1337/communities')
        .then(
          res =>{
            if(res.data){
              setCommunities(res.data)
          }} )
        .catch((error) => {
          console.log(error);
        })
    },[]);
    const replies = ['Great article','The best','Love Ya','Piece Of shit article','Great article','The best','Love Ya','Piece Of shit article','Great article','The best','Love Ya','Piece Of shit article'];
    return(
        <>
        {props.disease?
        <>
        {
            !view?
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))'}}>
                {
                    diseases?
                    <>
                    {
                        diseases.map(disease=><TagBox onClick={()=>{ setView(true);localStorage.setItem('diseaseTag',disease.id)  }} disease={disease.name} numberOfForums={disease.forums.length}/>)
                      }
                      </>
                    :
                    <Empty/>
                }
                {/* <TagBox onClick={()=>setView(true)} disease='Schistosomiasis'/>
                <TagBox onClick={()=>setView(true)} disease='Cholera'/>
                <TagBox onClick={()=>setView(true)} disease='Dysentry'/>
                <TagBox onClick={()=>setView(true)} disease='Malaria'/>
                <TagBox onClick={()=>setView(true)} disease='Diarrhoea'/> */}
            </div>:
            <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>
                {
                    selectedDiseaseTag?
                    <>
                        <Avatar size='small'  style={{boxShadow:'2px 2px 2px  #00000010'/* ,border:'0px solid darkgreen' */,cursor:'pointer',color:'white',backgroundColor:'darkgreen',alignSelf:'flex-start'}}  onClick={()=>setView(false)} icon={<CloseOutlined/>}/>
                        <ForumList filter={selectedDiseaseTag} />
                    </>
                    :
                    <Empty/>
                }
                

            </div>

        
        }
        </>
        :

        <>
         {
            !view?
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))'}}>
                {
                    communities?
                    <>
                    {
                        communities.map(community=><TagBox onClick={()=>{ setView(true);localStorage.setItem('communityTag',community.id)  }} location={community.Community} numberOfForums={community.forums.length}/>)
                      }
                      </>
                    :
                    <Empty/>
                }
            </div>:
            <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>
                <Avatar size='small'  style={{boxShadow:'3px 3px 2px #00000010'/* ,border:'0px solid darkgreen' */,cursor:'pointer',fontWeight:'bolder',color:'white',backgroundColor:'orange',alignSelf:'flex-start'}}  onClick={()=>setView(false)} icon={<CloseOutlined/>}/>
                <ForumList location={selectedLocationTag}/>

            </div>

        
        }
        </>
    
        
        }
        
        </>
    );
}
export default TagSet