import React, {useState,useEffect} from "react";
import { Input, Card, Space, Button ,Avatar,Tabs, Radio,Checkbox,Layout, Result} from 'antd';
import "antd/dist/antd.css";
import '../../App.css';
import axios from 'axios'
import Headers from "../../components/header";
import Banner from "../../components/banner";
import ForumCard from "../../components/forumCard";
import ForumList from "../../components/forumList";
import MainHeader from "../../components/mainHeader";

const {TextArea} =Input;

const { TabPane } = Tabs;

const OtherProfile=()=>{
    let me=JSON.parse(localStorage.getItem('currentUser'))
      const createForum=()=>{
        axios.post('http://localhost:1337/forums'/* ,{ username: username,  email:email, password: password } */)
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
    const [orgname,setOrgname]=useState('Akwasi Mensah')
    const [orgUsername,setOrgUsername]=useState('Akwmensah');
    const [orgPassword,setOrgPassword]=useState('yerspiyooor');
    const{Header}=Layout;
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
                {/* <div style={{flex:0.45,display:'flex',flexDirection:'column',margin:20,minWidth:350,height:'auto',justifyContent:'space-between'}}>
                    <Card className='banner' style={{height:'45%'}}>
                    <h2 style={{fontSize:30,color:'white'}}>Create A Forum</h2>
                    <Button className='bannerButton' style={{fontSize:17,width:100}} onClick={()=>{window.location.href='/entry';}}>Create</Button>
                    </Card>
                    <Card className='banner' style={{height:'45%',backgroundColor:'white'}}>
                    <h2 style={{fontSize:30,color:'#7021b098'}}>Contribute to Existing Forums</h2>
                    <Button className='bannerButton' id='special' style={{backgroundColor:'#7021b0',fontSize:17,width:100}} onClick={()=>{window.location.href='/entry';}}>Support</Button>
                    </Card>
                    
                </div> */}
                <Card className="card-container">
                    <Tabs type="card">
                    <TabPane tab="Explore Cases" key="4">
                        <div className='cardSvgee' style={{height:'48vh'}}>
                            <Button onClick={()=>window.location.href='/cases'}>Explore Cases</Button>
                        </div>
                    </TabPane>
                    <TabPane tab="Trending Forums" key="1">
                        <div style={{height:'48vh',overflowY:'scroll'}}>
                        <ForumList/>
                        </div>
                    </TabPane>
                    <TabPane tab="Create A Forum" key="2">
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{height:'43vh',overflowY:'scroll'}}>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-around'}}>
                            <h1 style={{color:'lightslategray',margin:8}}>
                                NEW FORUM
                            </h1>
                            <Input
                            type='text'
                            size='large'
                            placeholder='Enter Forum Title'
                            style={{width:'60%',margin:8}}
                            
                            />
                             <Input
                            type='text'
                            size='large'
                            placeholder='Enter Forum Description'
                            style={{width:'75%',margin:8}}
                            
                            />
                            <TextArea rows={4} placeholder='Enter Forum Details' style={{width:'80%',margin:8}}/>
                            
                            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-around',width:'80%',margin:8}}>
                                <span style={{fontSize:16,color:'gray'}}>Select Disease Tag</span>
                                <Radio.Group buttonStyle='solid' defaultValue='schistosomiasis' style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',flexWrap:'wrap'}} size='large' >
                                    <Radio.Button value='schistosomiasis' style={{margin:2}}>Schistosomiasis</Radio.Button>
                                    <Radio.Button value='Cholera' style={{margin:2}}>Cholera</Radio.Button>
                                    <Radio.Button value='malaria' style={{margin:2}}>Malaria</Radio.Button>
                                    <Radio.Button value='dysentry' style={{margin:2}}>Dysentry</Radio.Button>
                                </Radio.Group>

                            
                            </div>
                            
                            <Checkbox style={{margin:8}}>Use My Location</Checkbox>
                            
                        </div>
                        </div>
                        <Button type='primary' size='large' style={{alignSelf:'flex-end',marginTop:25,borderRadius:20,height:'5.5vh'}}>Create</Button>
                        </div>
                    </TabPane>
                    <TabPane tab="My Forums" key="3">
                    <div style={{height:'48vh',overflowY:'scroll'}}>
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