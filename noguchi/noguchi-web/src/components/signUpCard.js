import React, {useState} from "react";
import { Input, Card, Space, Button ,Avatar,Select} from 'antd';
import "antd/dist/antd.css";
import './components.css'
import {UserOutlined,LockOutlined,KeyOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";

const {Option}=Select;
const SignUpCard =()=>{
  const [fullname,setFullname]=useState('');
const [username,setUsername]=useState('');
const [password,setPassword]=useState('');
const [key,setKey]=useState('');
const [loginType,setLoginType]=useState('other');
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(username+''+password);
    window.location.href='/profile';
}
return(
    <Card style={{ flex: 0.25,minWidth:350,border:'1px solid graysmoke',display:'flex',flexDirection:'column',alignItems:'center',borderRadius:15,backgroundColor:'white',justifyContent:'center'}}>
      {
        loginType==='other'?
        <Space direction='vertical' size={25}>
     
      <h1 style={{fontSize:30,fontWeight:'bold',textAlign:'left'}}>Sign Up</h1>
      
      
      
      <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}><h4 style={{fontSize:14,color:'lightblue',textAlign:'left',marginRight:6,cursor:'pointer'}} onClick={()=>setLoginType('org')}>Org SignUp</h4><span style={{color:'blue'}}>/</span><h4 style={{fontSize:14,textAlign:'left',color:'#8a2be290',marginLeft:6,cursor:'pointer'}} onClick={()=>setLoginType('other')}>Other</h4></div>
      <Input 
      size="large"
    
      className='formInput2'
      onChange={(e)=>{setFullname(e.target.value)}}
      placeholder="Enter your fullname" 
      prefix={<UserOutlined className="site-form-item-icon" />} 
      />
      
      <Input 
      size="large"
    
      className='formInput2'
      onChange={(e)=>{setUsername(e.target.value)}}
      placeholder="Enter your username" 
      prefix={<UserOutlined className="site-form-item-icon" />} 
      />
      <Input 
      size="large"
      className='formInput2'
      onChange={(e)=>{setPassword(e.target.value)}}
      placeholder="Enter your password" 
      prefix={<LockOutlined className="site-form-item-icon" />} 
      />
      <Input 
      size="large"
      className='formInput2'
      onChange={(e)=>{setPassword(e.target.value)}}
      placeholder="Repeat password" 
      prefix={<LockOutlined className="site-form-item-icon" />} 
      />
      <Button 
      size='large'
      block
      style={{height:55,backgroundColor:'#247aeb',color:'white',marginTop:20,borderRadius:8}}
      
      onClick={handleSubmit}
      >
      Sign Up
      </Button>
    </Space>
    :
    <Space direction='vertical' size={25}>
    <h1 style={{fontSize:30,marginRight:10,fontWeight:'bold',textAlign:'left'}}>Org Sign Up</h1>
    
      

    <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}><h4 style={{fontSize:14,color:'#8a2be290',textAlign:'left',marginRight:6,cursor:'pointer'}} onClick={()=>setLoginType('org')} >Org SignUp</h4><span style={{color:'blue'}}>/</span><h4 style={{fontSize:14,textAlign:'left',color:'lightblue',marginLeft:6,cursor:'pointer'}} onClick={()=>setLoginType('other')}>Other</h4></div>
    <Input 
    size="large"
  
    className='formInput2'
    onChange={(e)=>{setFullname(e.target.value)}}
    placeholder="Enter org name" 
    prefix={<UserOutlined className="site-form-item-icon" />} 
    />
    <Input 
    size="large"
  
    className='formInput2'
    onChange={(e)=>{setUsername(e.target.value)}}
    placeholder="Enter org username" 
    prefix={<UserOutlined className="site-form-item-icon" />} 
    />
    <Input 
    size="large"
    className='formInput2'
    onChange={(e)=>{setPassword(e.target.value)}}
    placeholder="Enter org password" 
    prefix={<LockOutlined className="site-form-item-icon" />} 
    />
    <Input 
    size="large"
    className='formInput2'
    onChange={(e)=>{setKey(e.target.value)}}
    placeholder="Confirm Password" 
    prefix={<KeyOutlined className="site-form-item-icon" />} 
    />
    <Button 
    size='large'
    block
    style={{height:55,backgroundColor:'#247aeb',color:'white',marginTop:20,borderRadius:8}}
    
    onClick={handleSubmit}
    >
    Sign In
    </Button>
  </Space>
  
      }
    
    <Button size={30} type='link' style={{color:'lightseagreen',textDecorationStyle:'solid',textDecorationColor:'lightseagreen',textDecorationLine:'underline',textDecorationWidth:1}}>Have an Account?</Button>
    </Card>

);

}

export default SignUpCard;