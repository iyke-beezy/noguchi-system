import React, {useState} from "react";
import { Input, Card, Space, Button ,Avatar, Form} from 'antd';
import "antd/dist/antd.css";
import './components.css'
import {UserOutlined,LockOutlined,KeyOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";
import axios from 'axios'

const OrgForm =({onClick,...props})=>{

const [username,setUsername]=useState('');
const [password,setPassword]=useState('');
const [key,setKey]=useState('');
const [loginType,setLoginType]=useState('other');
const handleSubmit=(e)=>{
    const org={
      username:username,
      password:password
    }
  axios.post('http://localhost:5002/auth/login',org)
        .then(response => window.location.href='/orgAccounts'
          
        )
        .catch((error) => {
          console.log(error);
        })
    
}
const  handleSubmit2=(e)=>{
  const user={
    name:username,
    privateKey:password
  }
   axios.post('http://localhost:5002/auth/userLogin',user)
      .then(response =>window.location.href='/other')
      .catch((error) => {
        console.log(error);
        
      })
    /*   const response = await fetch('http://localhost/5000/auth/userLogin', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'sam e-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(user) // body data type must match "Content-Type" header
      })
      console.log(response.json()) */
  
}
return(
    <Card style={{ flex: 0.28,width:'min(95vw,100%)',border:'1px solid graysmoke',display:'flex',flexDirection:'column',alignItems:'center',borderRadius:15,backgroundColor:'white',justifyContent:'center'}}>
      {
        loginType==='other'?
        <Form layout='vertical' onFinish={handleSubmit2}>
        <Space direction='vertical' size={10}>
      <h1 style={{fontSize:32,fontWeight:'bold',textAlign:'left'}}>Sign In</h1>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}><h4 style={{fontSize:14,color:'lightblue',textAlign:'left',marginRight:6,cursor:'pointer'}} onClick={()=>setLoginType('org')}>Org Login</h4><span style={{color:'blue'}}>/</span><h4 style={{fontSize:14,textAlign:'left',color:'#8a2be290',marginLeft:6,cursor:'pointer'}} onClick={()=>setLoginType('other')}>Other</h4></div>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
      <Input 
      size="large"
      className='formInput'
      onChange={(e)=>{setUsername(e.target.value)}}
      placeholder="Enter your username" 
      prefix={<UserOutlined className="site-form-item-icon" />} 
      />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
      <Input.Password 
      size="large"
      className='formInput'
      onChange={(e)=>{setPassword(e.target.value)}}
      placeholder="Enter your password" 
      prefix={<LockOutlined className="site-form-item-icon" />} 
      />
      </Form.Item>
      <Button 
      size='large'
      block
      style={{height:55,backgroundColor:'#247aeb',color:'white',marginTop:20,borderRadius:8}}
      htmlType='submit'
      >
      Sign In
      </Button>
    </Space>
    </Form>
    :
    <Form>
    <Space direction='vertical' size={10}>
    <h1 style={{fontSize:30,fontWeight:'bold',textAlign:'left'}}>Org Sign In</h1>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}><h4 style={{fontSize:14,color:'#8a2be290',textAlign:'left',marginRight:6,cursor:'pointer'}} onClick={()=>setLoginType('org')} >Org Login</h4><span style={{color:'blue'}}>/</span><h4 style={{fontSize:14,textAlign:'left',color:'lightblue',marginLeft:6,cursor:'pointer'}} onClick={()=>setLoginType('other')}>Other</h4></div>
    <Input 
    size="large"
  
    className='formInput'
    onChange={(e)=>{setUsername(e.target.value)}}
    placeholder="Enter org username" 
    prefix={<UserOutlined className="site-form-item-icon" />} 
    />
    <Input 
    size="large"
    className='formInput'
    onChange={(e)=>{setPassword(e.target.value)}}
    placeholder="Enter org password" 
    prefix={<LockOutlined className="site-form-item-icon" />} 
    />
    <Button 
    size='large'
    block
    style={{height:55,backgroundColor:'#247aeb',color:'white',marginTop:20,borderRadius:8}}
    
        onClick={()=>handleSubmit()}
    >
    Sign In
    </Button>
  </Space>
  </Form>
  
      }
    
    <Button size={30} onClick={onClick} type='link' style={{color:'lightseagreen',textDecorationStyle:'solid',textDecorationColor:'lightseagreen',textDecorationLine:'underline',textDecorationWidth:1}}>Do Not Have An Account?</Button>
    </Card>
);

}

export default OrgForm;