import React from 'react';
import {Button} from 'antd';

const ForumCard=({onClick,data,onPress,...props})=>{
<<<<<<< HEAD
    const colorCode='#adff2f50';
    // const whenClicked=()=>{
    //     onClick();
    //     localStorage.setItem('clicked',data.id)
=======
    const whenClicked=()=>{
        onClick();
        localStorage.setItem('clicked',data.id)
>>>>>>> parent of 5b2abbb (reverted)
        
    // }
    return(
        // onClick={whenClicked} 
        
        <div style={{minWidth:'70%',marginTop:15,marginBottom:15,width:'100%',cursor:'pointer',height:'auto',borderWidth:'2px',borderStyle:'solid',borderColor:'whitesmoke',borderRadius:5,padding:15}}>
          
            <h3 style={{textAlign:'left'}}>{data.title}</h3>
            <p style={{textAlign:'left'}}>
            {data.description} 
             </p>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
            <Button>
            <span >{data.replies.length}{data.replies.length>1?'replies':'reply'}</span>
            </Button>
            
            </div>
            
            
            
        </div>
    );
}
export default ForumCard;