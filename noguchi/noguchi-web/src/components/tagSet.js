import React,{useState} from 'react';
import ForumList from './forumList';
import { Button } from 'antd';
import {CloseOutlined} from '@ant-design/icons';
import TagBox from './tagBox';
import Avatar from 'antd/lib/avatar/avatar';
const TagSet =(props)=>{
    const [view,setView]=useState(false);
    const replies = ['Great article','The best','Love Ya','Piece Of shit article','Great article','The best','Love Ya','Piece Of shit article','Great article','The best','Love Ya','Piece Of shit article'];
    return(
        <>
        {props.disease?
        <>
        {
            !view?
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))'}}>
                <TagBox onClick={()=>setView(true)} disease='Schistosomiasis'/>
                <TagBox onClick={()=>setView(true)} disease='Cholera'/>
                <TagBox onClick={()=>setView(true)} disease='Dysentry'/>
                <TagBox onClick={()=>setView(true)} disease='Malaria'/>
                <TagBox onClick={()=>setView(true)} disease='Diarrhoea'/>
            </div>:
            <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>
                <Avatar size='small'  style={{boxShadow:'2px 2px 2px  #00000010'/* ,border:'0px solid darkgreen' */,cursor:'pointer',color:'white',backgroundColor:'darkgreen',alignSelf:'flex-start'}}  onClick={()=>setView(false)} icon={<CloseOutlined/>}/>
                <ForumList />

            </div>

        
        }
        </>
        :

        <>
         {
            !view?
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))'}}>
                <TagBox onClick={()=>setView(true)} location='Accra'/>
                <TagBox onClick={()=>setView(true)} location='Kono'/>
                <TagBox onClick={()=>setView(true)} location='Tono'/>
                <TagBox onClick={()=>setView(true)} location='Bono'/>
                <TagBox onClick={()=>setView(true)} location='Ahafo'/>
                <TagBox onClick={()=>setView(true)} location='Cape'/>
                <TagBox onClick={()=>setView(true)} location='Tamale'/>
            </div>:
            <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>
                <Avatar size='small'  style={{boxShadow:'3px 3px 2px #00000010'/* ,border:'0px solid darkgreen' */,cursor:'pointer',fontWeight:'bolder',color:'white',backgroundColor:'orange',alignSelf:'flex-start'}}  onClick={()=>setView(false)} icon={<CloseOutlined/>}/>
                <ForumList />

            </div>

        
        }
        </>
    
        
        }
        
        </>
    );
}
export default TagSet