import React from 'react';
import {Button} from 'antd';

const MyCard=({title,description,onClick,...props})=>{
    const colorCode='#adff2f50';
  

    return(
        
        <div style={{minWidth:'70%',width:'100%',margin:12,height:'auto',borderWidth:'2px',borderStyle:'solid',borderColor:'whitesmoke',borderRadius:5,padding:15}}>
          
            <h3 style={{textAlign:'left'}}>{title}</h3>
             <p>{description}</p>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
            <Button onClick={onClick}>
            <span>Reply</span>
            </Button>
            
            </div>
            
            
            
        </div>
        
    );
}
const MyReplies=({title,replies,onClick,...props})=>{
    const colorCode='#adff2f50';
    const listItems = replies.map((reply) =>
    <p style={{textAlign:'left'}}>{reply}</p>
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