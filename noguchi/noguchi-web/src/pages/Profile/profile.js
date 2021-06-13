import React, {useState} from "react";
import { Input, Card, Button , Result} from 'antd';
import "antd/dist/antd.css";
import '../../App.css';
import Headers from "../../components/header";
import MainHeader from "../../components/mainHeader";

const ProfilePage=()=>{
    const [disability,setDisability]=useState(true);
    const [orgname,setOrgname]=useState('GHANA EDUCATION SERVICE')
    const [orgUsername,setOrgUsername]=useState('GeSNoguchi');
    const [orgPassword,setOrgPassword]=useState('osemigor123');
    const mee=localStorage.getItem('current_user')
    return(
        <div className='profilePage'>
            <MainHeader/>
            {
                mee?
                <>
                <Headers/>
            <div className='profileMidSection'>
            
                    <Card className='proCard' bordered style={{flex:0.3,height:'auto',backgroundColor:'white',textAlign:'left',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'flex-start',flexShrink:0,margin:20,/* boxShadow:'3px 3px 20px #00000010' */minWidth:'min(95vw,350px)'}}>
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
                        <Input.Password type='password' value={orgPassword} disabled={disability} size='large' onChange={(e)=>{setOrgPassword(e.target.value)}} style={{marginBottom:15,fontSize:17,backgroundColor:'transparent',borderWidth:3}}/>
                        <Button type='primary' size='large' onClick={()=>{setDisability(!disability)}}  block style={{marginBottom:30,backgroundColor:'#6461ff'}}>{disability?'Edit Profile':'Save'}</Button>
                        <Button type='primary' size='large' onClick={()=>{
                            localStorage.removeItem('current_user');
                            window.location.href='/';
                            }} danger block>Logout</Button>

                    </Card>
                <Card className='banner proCard' style={{flex:0.5,margin:20,minWidth:'min(95vw,350px)'}}>
                    <h1>Take A Disease Survey</h1>
                    <Button className='bannerButton' onClick={()=>{window.location.href='/entry';}}>Start</Button>
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
export default ProfilePage;