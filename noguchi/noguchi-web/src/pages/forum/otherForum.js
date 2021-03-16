import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { Button, Card, Tabs,Form,Col,Row, Result,Input,Radio,Select } from 'antd';

import  '../../components/components.css';

import ForumList from '../../components/forumList';
import TagSet from '../../components/tagSet';
import MainHeader from '../../components/mainHeader';

const {Option}=Select
const {TextArea}=Input
const OtherForum =()=>{
    const {TabPane} = Tabs;
    let me=JSON.parse(localStorage.getItem('currentUser'))
    let otherMe=JSON.parse(localStorage.getItem('current_user'))
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [content,setContent]=useState('');
    const [disease,setDisease]=useState('')
    const [community,setCommunity]=useState('');
    const [diseases,setDiseases]=useState('')
    const [communities,setCommunities]=useState('');
    useEffect(() => {
        async function fetchDiseases(){
          await axios.get('http://localhost:1337/diseases')
          .then(
            res =>{
              if(res.data){
                setDiseases(res.data)
            }} )
          .catch((error) => {
            console.log(error);
          })
  
        }
        fetchDiseases();
          
      },[]);
      useEffect(() => {
        async function fetchCommunities(){
          await axios.get('http://localhost:1337/communities')
          .then(
            res =>{
              if(res.data){
                setCommunities(res.data)
            }} )
          .catch((error) => {
            console.log(error);
          })
  
        }
        fetchCommunities();
          
      },[]);

    const createForum=()=>{
        console.log(
            disease,community,description,title,content
        )
      axios.post('http://localhost:1337/forums',{author: me?.id, org_author:otherMe?.id, title:title, description: description ,content:content,disease:disease,community:community} )
        .then(
          res =>{
            if(res.data){
              console.log(res.data)
          }}
    
        
        )
        .catch((error) => {
          console.log(error);
        })
    }
    return(
        <div >
            <MainHeader/>
        <div className='login not_mobi' style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
        
            
            <Card  title={<h1 style={{fontSize:15,textAlign:'left'}}>Forums</h1>} style={{height:'75vh',width:'85%',borderRadius:15}}>
                <Tabs tabPosition='left' defaultActiveKey='1' size='small' style={{height:'auto'}}>
                    <TabPane tab="All Forums" key="1" >
                        <div className='adminProfiles' style={{height:'63vh'}}>
                        <ForumList/>

                        </div>
                        
                    </TabPane>
                    
                    <TabPane tab="Community Tags" key="2"  >
                        <div className='adminProfiles'  style={{height:'63vh'}}>
                            <TagSet/> 
                        </div>
                        
                        
                        
                    </TabPane>
                    <TabPane tab="Disease Tags" key="3" >
                    <div className='adminProfiles' style={{height:'63vh'}}>
                            <TagSet disease/> 
                        </div>
                        
                    </TabPane>
                    <TabPane tab="Create Forum" key="4" >
                    {
                        localStorage.getItem('current_user')||localStorage.getItem('currentUser')?
                        <div className='adminProfiles' style={{height:'63vh'}}>
                             <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-around'}}>
                            <h1 style={{color:'lightslategray',margin:8}}>
                                NEW FORUM
                            </h1>
                            <Form layout='vertical' onFinish={createForum}>
                                
                                <Form.Item
                                label="Forum Title"
                                name="forumTitle"
                                rules={[{ required: true, message: 'Please input Forum Title!' }]}
                                >
                                    <Input
                                    type='text'
                                    value={title}
                                    onChange={(e)=>setTitle(e.target.value)}
                                    size='large'
                                    
                                    
                                    />

                                </Form.Item>
                                <Form.Item
                                label="Forum Description"
                                name="forumDescription"
                                rules={[{ required: true, message: 'Please input Forum Description!' }]}
                                >
                                    <Input
                                    type='text'
                                    size='large'
                                    value={description}
                                    onChange={(e)=>setDescription(e.target.value)}
                                   
                                    
                                    />
                                </Form.Item>
                                <Form.Item
                                label="Forum Content"
                                name="forumContent"
                                rules={[{ required: true, message: 'Please input Forum Content!' }]}
                                >
                                <TextArea rows={4} value={content} onChange={(e)=>setContent(e.target.value)} />
                            
                                </Form.Item>
                                <Form.Item
                                label="Select Disease Tag"
                                name="diseaseTag"
                                rules={[{ required: true, message: 'Please select disease tag!' }]}
                                >
                                <Radio.Group buttonStyle='solid' value={disease} onChange={(e)=>setDisease( e.target.value)} style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',flexWrap:'wrap'}} size='large' >
                                
                                {
                                    diseases?
                                        diseases.map((dis,index)=><Radio.Button key={index} value={dis.id} style={{margin:2}}>{dis.name}</Radio.Button>)
                                    :
                                    null
                                }
                                </Radio.Group>

                                </Form.Item>
                                <Form.Item
                                label="Select Community"
                                name="communityTag"
                                rules={[{ required: true, message: 'Please select community tag!' }]}
                                >
                                <Select  onChange={(value)=>setCommunity(value)} >
                                    {
                                        communities?
                                        communities.map((comm,index)=><Option key={index} value={comm.id}>{comm.Community}</Option>) 
                                        :
                                        null                                       
                                    }
                                 </Select>
                                </Form.Item>
                                <Form.Item>
                                <Button type='primary' htmlType='submit' size='large' block>Create</Button>
           
                                </Form.Item>
                            </Form>
                            </div>
                        </div>
                        :
                        <Result
                            status="error"
                            title="403"
                            subTitle="Sorry, you are not authorized to create a forum."
                            extra={<Button size='large' onClick={()=>window.location.href='/login'} type="primary">Go to Login</Button>}
                        />

                    }
                    
                        
                    </TabPane>
                    </Tabs>
                  
            </Card>
                             

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