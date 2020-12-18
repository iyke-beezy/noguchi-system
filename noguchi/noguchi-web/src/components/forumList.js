import React,{useState} from 'react';
import ForumCard from './forumCard';
import {MyCard, MyReplies} from './card';
import { Button } from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';
const ForumList =()=>{
    const [more,setMore]=useState(false);
    const replies = ['Great article','The best','Love Ya','Not Useful article','Great article','The best','Love Ya','Not Useful article','Great article','The best','Love Ya','Not Useful article'];
    return(
        <>
        {
            !more?
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
                <ForumCard onClick={()=>setMore(true)}/>
                <ForumCard onClick={()=>setMore(true)}/>
                <ForumCard onClick={()=>setMore(true)}/>
                <ForumCard onClick={()=>setMore(true)}/>
                <ForumCard onClick={()=>setMore(true)}/>
                <ForumCard onClick={()=>setMore(true)}/>
                <ForumCard onClick={()=>setMore(true)}/>
            </div>:
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'100%',padding:'0% 5% 0% 5%'}}>
                <Button size='small' style={{borderRadius:40,fontWeight:'bold',border:'1px solid lightslategrey',color:'lightslategrey'}}  onClick={()=>setMore(false)}><ArrowLeftOutlined/></Button>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%'}}>
                        <MyCard title="title1" /* onClick={()=>{setShowDetails(!showDetails)}} *//>
                        <MyReplies title="Replies" replies={replies} />
                    
                 </div>

            </div>

        
        }
        </>
    );
}
export default ForumList