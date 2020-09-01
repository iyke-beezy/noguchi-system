import React, {useState} from "react";
import { Input, Card, Space, Button ,Avatar} from 'antd';
import "antd/dist/antd.css";
import '../../App.css';
import {EditFilled ,UserOutlined,InfoCircleOutlined} from '@ant-design/icons';
import Header from "../../components/header";
import Banner from "../../components/banner";

const ProfilePage=()=>{
    const [disability,setDisability]=useState(true);
    const [orgname,setOrgname]=useState('GHANA EDUCATION SERVICE')
    const [orgUsername,setOrgUsername]=useState('GeSNoguchi');
    const [orgPassword,setOrgPassword]=useState('osemigor123');

    return(
        <div className='profilePage'>
            <Header/>
            <div className='profileMidSection'>
            
                    <Card style={{flex:0.3,height:'auto',backgroundColor:'wheat',textAlign:'left',border:'none',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'flex-start',flexShrink:0,margin:20,boxShadow:'3px 3px 20px #00000010'}}>
                        <h1 style={{color:'white',fontSize:35}}>
                         PROFILE
                        </h1>
                        <h2 style={{color:'white',fontSize:23}}>
                            NAME
                        </h2>
                        <Input type='text' value={orgname} onChange={(e)=>{setOrgname(e.target.value)}} disabled={disability} size='large' style={{marginBottom:15,fontSize:20,fontWeight:'bold',backgroundColor:'transparent',borderWidth:3}}/>
                        <h2 style={{color:'white'}}>
                            USERNAME
                        </h2>
                        <Input type='text' value={orgUsername} disabled={disability} onChange={(e)=>{setOrgUsername(e.target.value)}} size='large' style={{marginBottom:15,fontSize:20,fontWeight:'bold',backgroundColor:'transparent',borderWidth:3}}/>
                        <h2 style={{color:'white'}}>
                            PASSWORD
                        </h2>
                        <Input type='password' value={orgPassword} disabled={disability} size='large' onChange={(e)=>{setOrgPassword(e.target.value)}} style={{marginBottom:15,fontSize:20,fontWeight:'bold',backgroundColor:'transparent',borderWidth:3}}/>
    <Button type='primary' size='large' onClick={()=>{setDisability(!disability)}}  block style={{marginBottom:30}}>{disability?'Edit Profile':'Save'}</Button>
                        <Button type='primary' size='large' onClick={()=>{window.location.href='/';}} danger block>Logout</Button>

                    </Card>
                <Card className='banner' style={{flex:0.5,margin:20}}>
                    <h1>Take A Disease Survey</h1>
                    <Button className='bannerButton' onClick={()=>{window.location.href='/preview';}}>Start</Button>
                </Card>
                
            </div>
            
                

        </div>
    );
}
export default ProfilePage;