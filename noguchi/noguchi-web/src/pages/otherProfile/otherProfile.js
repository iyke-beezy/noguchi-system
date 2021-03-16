import React, {useState,useEffect} from "react";
import { Input, Card, Button ,Form,Tabs, Radio,Layout, Result, Select} from 'antd';
import "antd/dist/antd.css";
import '../../App.css';
import axios from 'axios'
import Headers from "../../components/header";
import ForumList from "../../components/forumList";
import MainHeader from "../../components/mainHeader";

const {TextArea} =Input;

const { TabPane } = Tabs;
const {Option}=Select;

const OtherProfile=()=>{
    let me=JSON.parse(localStorage.getItem('currentUser'))
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
        axios.post('http://localhost:1337/forums',{ author: me.id,  title:title, description: description ,content:content,disease:disease,community:community} )
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

    const [disability,setDisability]=useState(true);
    return(
        <div className='profilePage'>
            <MainHeader/>
            {
                me?
                <>
                <Headers/>
            <div className='profileMidSection'>
            
                    <Card bordered style={{flex:0.3,height:'auto',minWidth:'min(95vw,350px)',backgroundColor:'white',textAlign:'left',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'flex-start',flexShrink:0,margin:20,/* boxShadow:'3px 3px 20px #00000010' */}}>
                        <h1 style={{color:'black',fontSize:30}}>
                         PROFILE
                        </h1>
                        <h3 style={{color:'#40404090'}}>
                            Username
                        </h3>
                        <Input type='text' value={me.username} onChange={(e)=>{setOrgname(e.target.value)}} disabled={disability} size='large' style={{marginBottom:15,fontSize:17,backgroundColor:'transparent',borderWidth:3}}/>
                        <h3 style={{color:'#40404090'}}>
                            Email
                        </h3>
                        <Input type='text' value={me.email} disabled={disability} onChange={(e)=>{setOrgUsername(e.target.value)}} size='large' style={{marginBottom:15,fontSize:17,backgroundColor:'transparent',borderWidth:3}}/>
                        <h3 style={{color:'#40404090'}}>
                            Password
                        </h3>
                        <Input type='password' value={me.password} disabled={disability} size='large' onChange={(e)=>{setOrgPassword(e.target.value)}} style={{marginBottom:15,fontSize:17,backgroundColor:'transparent',borderWidth:3}}/>
                        <Button type='primary' size='large' onClick={()=>{setDisability(!disability)}}  block style={{marginBottom:30,backgroundColor:'#6461ff'}}>{disability?'Edit Profile':'Save'}</Button>
                        <Button type='primary' size='large' 
                        onClick={()=>{
                            localStorage.removeItem('currentUser');
                            
                            window.location.href='/';
                        }} 
                        danger 
                        block>
                        Logout
                        </Button>

                    </Card>
                <Card className="card-container">
                    <Tabs type="card">
                    <TabPane tab="Explore Cases" key="4">
                        <div className='cardSvgee' style={{height:'48vh'}}>
                            <Button onClick={()=>window.location.href='/cases'}>Explore Cases</Button>
                        </div>
                    </TabPane>
                    <TabPane tab="Trending Forums" key="1">
                        <div style={{height:'48vh'}} className='adminProfiles'>
                        <ForumList/>
                        </div>
                    </TabPane>
                    <TabPane tab="Create A Forum" key="2">
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <div className='adminProfiles' style={{height:'43vh',overflowY:'scroll'}}>
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
                                    </div>
                    </TabPane>
                    <TabPane tab="My Forums" key="3">
                    <div className='adminProfiles' style={{height:'48vh',overflowY:'scroll'}}>
                        <ForumList user={me.id}/>
                        </div>
                    </TabPane>
                    </Tabs>
                </Card>
                
            </div>
            
            </>
                :
                <>
                <Result
                    style={{marginTop:'8vh'}}
                    status="403"
                    title="403"
                    subTitle="Sorry, you are not authorized to access this page."
                    extra={<Button size='large' onClick={()=>window.location.href='/login'} type="primary">Go to Login</Button>}
                />
                </>
                
            }
        

        </div>
    );
}
export default OtherProfile;