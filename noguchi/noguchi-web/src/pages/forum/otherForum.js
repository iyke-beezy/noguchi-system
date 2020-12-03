import React,{useState} from 'react';
import { Button, Card, Tabs,Modal,Col,Row } from 'antd';

import  '../../components/components.css';
import TagBox from '../../components/tagBox';
import ForumCard from '../../components/forumCard';
import FormInput from '../../components/input'
import {MyCard, MyReplies} from '../../components/card';
import ForumList from '../../components/forumList';
import TagSet from '../../components/tagSet';

const OtherForum =()=>{
    const [showDetails,setShowDetails] = useState(false);
    const [showModal,setShowModal] = useState(false);
    const [reply,setReply] = useState('');
    const [title,setTitle] = useState("Title");
    const [desc,setDesc] = useState('Descriptions');
    const replies = ['Great article','The best','Love Ya','Not a useful article'];
    const image=require('../../assets/whiteGhana.png')
    const {TabPane} = Tabs;
    return(
        <div>
            <div>
            {!showDetails ?
        <div className='login not_mobi' style={{maxHeight:'100vh',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
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
         <div className='login not_mobi' style={{maxHeight:'100vh',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
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
     <Row className="mobi">
     <Col style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:'10vh'}}  xs={24} md={0}>
                    <h5 style={{width:'50%'}}>Survey And Preview</h5></Col>
               
               
                <Tabs style={{width:'100%'}} centered defaultActiveKey="1" >
                    <TabPane tab="All Forums" key="1">
                    <div style={{padding:35}}>
                     
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center',overflowY:'scroll',height:'63vh'}}>
                        <ForumList/>

                        </div>
                        
                        
                    </div>
                    </TabPane>
                    <TabPane tab="Community Tags" key="2">
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <div style={{height:'63vh',overflowY:'scroll'}}>
                            <TagSet/> 
                        </div>    
                      
                    </div>
                    </TabPane>
                    <TabPane tab="Disease Tags" key="3">
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <div style={{height:'63vh',overflowY:'scroll'}}>
                            <TagSet disease/> 
                        </div> 
                      
                    </div>
                    </TabPane>
                   
                </Tabs>
     </Row>

        </div>
    );
}
export default OtherForum;