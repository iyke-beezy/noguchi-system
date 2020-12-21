import React from 'react';
import {Button} from 'antd';

const ForumCard=({onClick,data,onPress,...props})=>{
    const colorCode='#adff2f50';
    const whenClicked=()=>{
        onClick();
        localStorage.setItem('clicked',data.id)
        
    }
    return(
        
        <div onClick={whenClicked} style={{minWidth:'70%',width:'100%',cursor:'pointer',height:'auto',borderWidth:'2px',borderStyle:'solid',borderColor:'whitesmoke',borderRadius:5,padding:15}}>
          
            <h3 style={{textAlign:'left'}}>{data.title}</h3>
            <p style={{textAlign:'left'}}>
            {data.description} 
             </p>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
            <Button onClick={whenClicked}>
            <span >{data.reply.length}reply</span>
            </Button>
            
            </div>
            
            
            
        </div>
    );
}
export default ForumCard;