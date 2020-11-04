import React from 'react';
import {Button} from 'antd';

const ForumCard=({onClick,...props})=>{
    const colorCode='#adff2f50';
    return(
        
        <div style={{minWidth:'70%',width:'80%',margin:12,height:'auto',borderWidth:'2px',borderStyle:'solid',borderColor:'whitesmoke',borderRadius:5,padding:15}}>
          
            <h3 style={{textAlign:'left'}}>Title</h3>
            <p style={{textAlign:'left'}}>
                This is the description of the forum,This is the description of the forum,This is the description of the forum,This is the description of the forum
            </p>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
            <Button onClick={onClick}>
            <span >100 replies</span>
            </Button>
            
            </div>
            
            
            
        </div>
    );
}
export default ForumCard;