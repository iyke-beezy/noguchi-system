import React from 'react';

const TagBox=(props)=>{
    const colorCode='#adff2f50';
    return(
        
        <div style={{flex:'25%',maxWidth:250,margin:20,height:'auto',borderWidth:'3px',borderStyle:'solid',borderColor:colorCode,borderRadius:12,padding:25}}>
           {props.disease?
            <>
            <h4 style={{backgroundColor:colorCode,color:'green',padding:5}}>{props.disease}</h4>
            <p>
                These are all the forums on {props.disease}
            </p>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',marginTop:30}}>
            <span style={{borderStyle:'solid',borderWidth:'2px',borderColor:'lightblue',borderRadius:5,color:'#0000ff80',fontWeight:'bold',padding:'2px 5px 2px 5px',fontSize:12}}>100 forums</span>
            </div>
            </>:
            <>
            <h4 style={{backgroundColor:colorCode,color:'green',padding:5}}>{props.location}</h4>
            <p>
                These are all the forums at {props.location}
            </p>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',marginTop:30}}>
            <span style={{borderStyle:'solid',borderWidth:'2px',borderColor:'lightblue',borderRadius:5,color:'#0000ff80',fontWeight:'bold',padding:'2px 5px 2px 5px',fontSize:12}}>100 forums</span>
            </div>
            
            </>
            }
            
        </div>
    );
}
export default TagBox;