import React, {useState} from "react";
import { Input, Card, Space, Button ,Avatar,Tabs} from 'antd';
import "antd/dist/antd.css";
import '../../App.css';
import Header from "../../components/header";
import Banner from "../../components/banner";

const { TabPane } = Tabs;

const OtherProfile=()=>{
    const [disability,setDisability]=useState(true);
    const [orgname,setOrgname]=useState('Akwasi Mensah')
    const [orgUsername,setOrgUsername]=useState('Akwmensah');
    const [orgPassword,setOrgPassword]=useState('yerspiyooor');

    return(
        <div className='profilePage'>
            <Header/>
            <div className='profileMidSection'>
            
                    <Card bordered style={{flex:0.3,height:'auto',minWidth:350,backgroundColor:'white',textAlign:'left',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'flex-start',flexShrink:0,margin:20,/* boxShadow:'3px 3px 20px #00000010' */}}>
                        <h1 style={{color:'black',fontSize:30}}>
                         PROFILE
                        </h1>
                        <h3 style={{color:'#40404090'}}>
                            Name
                        </h3>
                        <Input type='text' value={orgname} onChange={(e)=>{setOrgname(e.target.value)}} disabled={disability} size='large' style={{marginBottom:15,fontSize:17,backgroundColor:'transparent',borderWidth:3}}/>
                        <h3 style={{color:'#40404090'}}>
                            Username
                        </h3>
                        <Input type='text' value={orgUsername} disabled={disability} onChange={(e)=>{setOrgUsername(e.target.value)}} size='large' style={{marginBottom:15,fontSize:17,backgroundColor:'transparent',borderWidth:3}}/>
                        <h3 style={{color:'#40404090'}}>
                            Password
                        </h3>
                        <Input type='password' value={orgPassword} disabled={disability} size='large' onChange={(e)=>{setOrgPassword(e.target.value)}} style={{marginBottom:15,fontSize:17,backgroundColor:'transparent',borderWidth:3}}/>
                        <Button type='primary' size='large' onClick={()=>{setDisability(!disability)}}  block style={{marginBottom:30,backgroundColor:'#6461ff'}}>{disability?'Edit Profile':'Save'}</Button>
                        <Button type='primary' size='large' onClick={()=>{window.location.href='/';}} danger block>Logout</Button>

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
                    <TabPane tab="Trending Forums" key="1">
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                    </TabPane>
                    <TabPane tab="Create A Forum" key="2">
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                    </TabPane>
                    <TabPane tab="My Forums" key="3">
                        <p>Content of Tab Pane 3</p>
                        <p>Content of Tab Pane 3</p>
                        <p>Content of Tab Pane 3</p>
                    </TabPane>
                    </Tabs>
                </Card>
                
            </div>
            
                

        </div>
    );
}
export default OtherProfile;