import React,{useState} from 'react';
import axios from 'axios'
import {Button,Modal,message} from 'antd';
import FormInput from './input'
const MyCard=({ ...props})=>{
    const colorCode='#adff2f50';
    const [showModal,setShowModal] = useState(false);
    const [reply,setReply] = useState('');
    let normalUser=JSON.parse(localStorage.getItem('currentUser'))
    let orgUser=JSON.parse(localStorage.getItem('current_user'))
    const handleReply=()=>{
        if(normalUser){
            
            axios.post('http://localhost:1337/replies', 
            {
              user: normalUser.id,
              forum:props.data.id,
              reply: reply
            }
            )
              .then(
                res =>{
                  if(res.data){
                   
                    message.success('Replied Successfully')
                }}
          
              
              )
              .catch((error) => {
                console.log(error);
              }) 
              
        }else if(orgUser){
            axios.post('http://localhost:1337/replies', 
            {
              org_user: orgUser.id,
              forum:props.data.id,
              reply: reply
            }
            )
              .then(
                res =>{
                  if(res.data){
                    console.log(res.data)
                    message.success('Replied Successfully')
                    setShowModal(!showModal)
                }}
          
              
              )
              .catch((error) => {
                console.log(error);
              })
        }
    }
    

    return(
        
        <div style={{minWidth:'70%',width:'100%',margin:12,height:'auto',borderWidth:'2px',borderStyle:'solid',borderColor:'whitesmoke',borderRadius:5,padding:15}}>
          
            <h3 style={{textAlign:'left'}}>{props.data.title}</h3>
             <p>{props.data.content}</p>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
            <Button onClick={()=> {
                if(normalUser||orgUser){
                    setShowModal(!showModal)
                }else{
                    message.error('You must login to reply a forum')
                }
            } }>
            <span>Reply</span>
            </Button>
            <Modal
                        title="Enter Your Reply"
                        visible={showModal}
                        onOk={handleReply}
                        onCancel={()=>{setShowModal(!showModal)}}
                        >
                       <FormInput
                             
                              name="key"
                              type="textArea"
                              value={reply}
                              onChange={(e)=>{setReply(e.target.value)}}
                              placeholder="Enter Reply"
                              error ={false}
                              required
                              className="formInput"
                       />
                       
                          </Modal>
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