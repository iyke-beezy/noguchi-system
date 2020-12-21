import React from 'react';
import {Button} from 'antd';

const MyCard=(props)=>{
    const colorCode='#adff2f50';
    

    return(
        
        <div style={{minWidth:'70%',width:'100%',margin:12,height:'auto',borderWidth:'2px',borderStyle:'solid',borderColor:'whitesmoke',borderRadius:5,padding:15}}>
          
            <h3 style={{textAlign:'left'}}>{props.data.title}</h3>
             <p>{props.data.content}</p>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
            <Button>
            <span>Reply</span>
            </Button>
            </div>
        </div>
        
    );
}
const MyReplies=({title,replies,...props})=>{
    const colorCode='#adff2f50';
    const listItems = replies.map((reply) =>
    <p key={reply.id} style={{textAlign:'left'}}>{reply.reply}</p>
  );
    return(
        
        <div style={{minWidth:'70%',width:'100%',margin:12,height:'auto',borderWidth:'2px',borderStyle:'solid',borderColor:'whitesmoke',borderRadius:5,padding:15}}>
          
            <h3 style={{textAlign:'left'}}>{title}</h3>
            <div>{listItems}</div>
          
            
            
            
        </div>
        
    );
}
export {MyCard};
export {MyReplies};