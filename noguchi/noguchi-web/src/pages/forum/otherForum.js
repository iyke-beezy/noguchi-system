import React,{useState} from 'react';
import { Button, Card, Tabs,Modal } from 'antd';

import  '../../components/components.css';
import TagBox from '../../components/tagBox';
import ForumCard from '../../components/forumCard';
import FormInput from '../../components/input'
import {MyCard, MyReplies} from '../../components/card';
import ForumList from '../../components/forumList';
import TagSet from '../../components/tagSet';
const {TabPane}=Tabs;
const OtherForum =()=>{
    const [showDetails,setShowDetails] = useState(false);
<<<<<<< HEAD
    const [showModal,setShowModal] = useState(false);
    const [reply,setReply] = useState('');
    const [title,setTitle] = useState("Title");
    const [desc,setDesc] = useState('Descriptions');
    const replies = ['Great article','The best','Love Ya','Piece Of shit article'];
=======
    const replies = ['Great article','The best','Love Ya','Not Useful article'];
>>>>>>> 46dbb62eab326afb94073e1f1c70563164d72804
    const image=require('../../assets/whiteGhana.png')
    return(
        <div>
            {!showDetails ?
        <div className='login' style={{maxHeight:'100vh',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Card  title={<h1 style={{fontSize:20,textAlign:'left',padding:5}}>Forums</h1>} style={{height:'85vh',width:'85%',borderRadius:15}}>
                <Tabs tabPosition='left' defaultActiveKey='1' size='small' style={{height:'auto'}}>
                    <TabPane tab="All Forums" key="1" >
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center',overflowY:'scroll',height:'63vh'}}>
                        <ForumList/>

                        </div>
                        
                    </TabPane>
                    
                    <TabPane tab="Community Tags" key="2"  >
                        <div style={{height:'63vh',overflowY:'scroll'}}>
                            <TagSet/> 
                        </div>
                        
                        
                        
                    </TabPane>
                    <TabPane tab="Disease Tags" key="3" >
                    <div style={{height:'63vh',overflowY:'scroll'}}>
                            <TagSet disease/> 
                        </div>
                        
                    </TabPane>
                    </Tabs>
                  
            </Card>
                                

        </div>
    :
    <div>
         <div className='login' style={{maxHeight:'100vh',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Card  title={<Button onClick={()=>{setShowDetails(!showDetails)}} style={{height:50,width:100,fontSize:20}}>&lt;Back</Button>} style={{textAlign:'left',height:'85vh',width:'80%',borderRadius:15}}>
             
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center',overflowY:'scroll',height:'63vh'}}>
                        <MyCard title={title} description={desc} onClick={()=>{setShowModal(!showModal)}}/>
                        <MyReplies title="Replies" replies={replies} />
                        <Modal
                        title="Enter Your Key"
                        visible={showModal}
                        onOk={()=>{setShowModal(!showModal);replies.push(reply);console.log(replies)}}
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
                        
                   
                  
            </Card>
                                

        </div>
    </div>
    }
        </div>
    );
}
export default OtherForum;