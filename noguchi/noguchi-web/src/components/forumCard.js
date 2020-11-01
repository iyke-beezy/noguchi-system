import React from 'react';

const ForumCard=(props)=>{
    const colorCode='#adff2f50';
    return(
        
        <div style={{minWidth:'70%',width:'80%',margin:12,height:'auto',borderWidth:'2px',borderStyle:'solid',borderColor:'whitesmoke',borderRadius:5,padding:15}}>
          
            <h3 style={{textAlign:'left'}}>Title</h3>
            <p style={{textAlign:'left'}}>
                This is the description of the forum,This is the description of the forum,This is the description of the forum,This is the description of the forum
            </p>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
            <span style={{borderStyle:'solid',borderWidth:'2px',borderColor:'lightblue',borderRadius:5,color:'#0000ff80',fontWeight:'bold',padding:'2px 5px 2px 5px',fontSize:12}}>100 replies</span>
            </div>
            
            
            
        </div>
    );
}
export default ForumCard;