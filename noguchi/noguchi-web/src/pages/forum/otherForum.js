import React,{useState} from 'react';
import { Button, Card, Tabs,Modal } from 'antd';

import  '../../components/components.css';
import TagBox from '../../components/tagBox';
import ForumCard from '../../components/forumCard';
import FormInput from '../../components/input'
import {MyCard, MyReplies} from '../../components/card';
const {TabPane}=Tabs;
const OtherForum =()=>{
    const [showDetails,setShowDetails] = useState(false);
    const [showModal,setShowModal] = useState(false);
    const [reply,setReply] = useState('');
    const [title,setTitle] = useState("Title");
    const [desc,setDesc] = useState('Descriptions');
    const replies = ['Great article','The best','Love Ya','Piece Of shit article'];
    const image=require('../../assets/whiteGhana.png')
    return(
        <div>
            {!showDetails ?
        <div className='login' style={{maxHeight:'100vh',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Card  title={<h1 style={{fontSize:20,textAlign:'left',padding:5}}>Forums</h1>} style={{height:'85vh',width:'85%',borderRadius:15}}>
                <Tabs tabPosition='left' defaultActiveKey='1' size='small' style={{height:'auto'}}>
                    <TabPane tab="All Forums" key="1" >
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center',overflowY:'scroll',height:'63vh'}}>
                        <ForumCard onClick={() =>{setShowDetails(!showDetails)}}/>
                        <ForumCard/>
                        <ForumCard/>
                        <ForumCard/>
                        <ForumCard/>
                        <ForumCard/>

                        </div>
                        
                    </TabPane>
                    
                    <TabPane tab="Community Tags" key="2"  >
                        <div style={{height:'63vh',overflowY:'scroll'}}>
                        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))'}}>
                        <TagBox location='Tema'/>
                        <TagBox location='Lakeside Estates'/>
                        <TagBox location='Botwe'/>
                        <TagBox location='Accra'/>
                        </div>   
                        </div>
                        
                        
                        
                    </TabPane>
                    <TabPane tab="Disease Tags" key="3" >
                        <div style={{height:'63vh',overflowY:'scroll'}}>
                        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))'}}>
                        <TagBox disease='Schistosomiasis'/>
                        <TagBox disease='Malaria'/>
                        <TagBox disease='Cholera'/>
                        <TagBox disease='Dysentry'/>
                        </div>   
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