import React, {useState} from "react";
import { Input, Card, Space, Button ,Avatar,Select, Form} from 'antd';
import "antd/dist/antd.css";
import './components.css'
import {UserOutlined,LockOutlined,KeyOutlined,MailOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import axios from 'axios'
const {Option}=Select;
const SignUpCard =({onClick,...props})=>{

const [username,setUsername]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [key,setKey]=useState('');
const [loginType,setLoginType]=useState('other');

const handleSubmit=(e)=>{
    // e.preventDefault();

  axios
 .post('http://localhost:1337/auth/local/register', {
    username: username,
    email:email,
    password: password,
    company:true,
  })
 .then(response => {
   // Handle success.
   console.log('Well done!');
   console.log('User profile', response.data.user);
   console.log('User token', response.data.jwt);
 })
 .catch(error => {
   // Handle error.
   console.log('An error occurred:', error.response);
 });

    
}
const handleSubmit2=(e)=>{
 /* console.log([username,password,email]) */
 axios
 .post('http://localhost:1337/auth/local/register', {
    username: username,
    email:email,
    password: password
  })
 .then(response => {
   // Handle success.
   console.log('Well done!');
   console.log('User profile', response.data.user);
   console.log('User token', response.data.jwt);
 })
 .catch(error => {
   // Handle error.
   console.log('An error occurred:', error.response);
 });
  
}
return(
    <Card style={{flex: 0.28,width:'min(95vw,100%)',border:'1px solid graysmoke',display:'flex',flexDirection:'column',alignItems:'center',borderRadius:15,backgroundColor:'white',justifyContent:'center'}}>
      {
        loginType==='other'?
        //Normal User SignUp
        <Form layout='vertical' onFinish={handleSubmit2}>
       
     
      <h1 style={{fontSize:30,fontWeight:'bold',textAlign:'left'}}>Sign Up</h1>
      
      
      
      <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}><h4 style={{fontSize:14,color:'lightblue',textAlign:'left',marginRight:6,cursor:'pointer'}} onClick={()=>setLoginType('org')}>Org SignUp</h4><span style={{color:'blue'}}>/</span><h4 style={{fontSize:14,textAlign:'left',color:'#8a2be290',marginLeft:6,cursor:'pointer'}} onClick={()=>setLoginType('other')}>Other</h4></div>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
      <Input 
      size="small"
      className='formInput'
      value={username}
      onChange={(e)=>{setUsername(e.target.value)}}
      placeholder="Enter your username" 
      prefix={<UserOutlined className="site-form-item-icon" />} 
      />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
      <Input 
      size="small"
      className='formInput'
      value={email}
      onChange={(e)=>{setEmail(e.target.value)}}
      placeholder="Enter your email" 
      prefix={<MailOutlined className="site-form-item-icon" />} 
      />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >

      <Input 
      size="small"
      value={password}
      className='formInput'
      onChange={(e)=>{setPassword(e.target.value)}}
      placeholder="Enter your password" 
      prefix={<LockOutlined className="site-form-item-icon" />} 
      />
      </Form.Item>
      <Form.Item
        label="Repeat Password"
        name="repeat"
        rules={[{ required: true, message: 'Please repeat your password!' }]}
      >
      <Input 
      size="small"
      className='formInput'
      value={key}
      onChange={(e)=>{setKey(e.target.value)}}
      placeholder="Repeat password" 
      prefix={<LockOutlined className="site-form-item-icon" />} 
      />
      </Form.Item>
      <Button 
      size='small'
      block
      style={{height:55,backgroundColor:'#247aeb',color:'white',marginTop:20,borderRadius:8}}
      htmlType='submit'
      >
      Sign Up
      </Button>

    </Form>
    :
    //Organization SignUp
    <Form layout='vertical' onFinish={handleSubmit}>
    
    <h1 style={{fontSize:30,marginRight:10,fontWeight:'bold',textAlign:'left'}}>Org Sign Up</h1>
    
      

    <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}><h4 style={{fontSize:14,color:'#8a2be290',textAlign:'left',marginRight:6,cursor:'pointer'}} onClick={()=>setLoginType('org')} >Org SignUp</h4><span style={{color:'blue'}}>/</span><h4 style={{fontSize:14,textAlign:'left',color:'lightblue',marginLeft:6,cursor:'pointer'}} onClick={()=>setLoginType('other')}>Other</h4></div>
    <Form.Item
        label="Organization Name"
        name="username"
        rules={[{ required: true, message: 'Please enter org username!' }]}
      >
    <Input 
    size="small"
    value={username}
    className='formInput'
    onChange={(e)=>{setUsername(e.target.value)}}
    placeholder="Enter org username" 
    prefix={<UserOutlined className="site-form-item-icon" />} 
    />
    </Form.Item>
    <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
      <Input 
      size="small"
      className='formInput'
      value={email}
      onChange={(e)=>{setEmail(e.target.value)}}
      placeholder="Enter your email" 
      prefix={<MailOutlined className="site-form-item-icon" />} 
      />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter org password!' }]}
      >
    <Input 
    size="small"
    className='formInput'
    value={password}
    onChange={(e)=>{setPassword(e.target.value)}}
    placeholder="Enter org password" 
    prefix={<LockOutlined className="site-form-item-icon" />} 
    />
    </Form.Item>
      <Form.Item
        label="Repeat Password"
        name="repeat"
        rules={[{ required: true, message: 'Please repeat your password!' }]}
      >
    <Input 
    size="small"
    className='formInput'
    value={key}
    placeholder="Repeat Password" 
    onChange={(e)=>{setKey(e.target.value)}}
    prefix={<LockOutlined className="site-form-item-icon" />} 
    />
    </Form.Item>
    <Button 
    size='small'
    block
    style={{height:55,backgroundColor:'#247aeb',color:'white',marginTop:20,borderRadius:8}}
    htmlType='submit'
    >
    Sign Up
    </Button>

  </Form>
  
      }
    
    <Button onClick={onClick} size={30} type='link' style={{color:'lightseagreen',textDecorationStyle:'solid',textDecorationColor:'lightseagreen',textDecorationLine:'underline',textDecorationWidth:1}}>Have an Account?</Button>
    </Card>

);

}

export default SignUpCard;