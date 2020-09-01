import React, {useState} from "react";
import { Input, Card, Space, Button ,Avatar} from 'antd';
import "antd/dist/antd.css";
import './components.css'
import {UserOutlined,LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const OrgForm =()=>{

const [username,setUsername]=useState('');
const [password,setPassword]=useState('')
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(username+''+password);
    window.location.href='/profile';
}
return(
    <Card style={{ width: 400,border:'1px solid graysmoke',display:'flex',flexDirection:'column',alignItems:'center',borderRadius:15,backgroundColor:'white',justifyContent:'center'}}>
      
    
    <Space direction='vertical' size={30}>
      <h1 style={{fontSize:30,fontWeight:'bold',textAlign:'left'}}>Sign In</h1>
      <Input 
      size="large"
    
      className='formInput'
      onChange={(e)=>{setUsername(e.target.value)}}
      placeholder="Enter your username" 
      prefix={<UserOutlined className="site-form-item-icon" />} 
      />
      <Input 
      size="large"
      className='formInput'
      onChange={(e)=>{setPassword(e.target.value)}}
      placeholder="Enter your password" 
      prefix={<LockOutlined className="site-form-item-icon" />} 
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
    
    </Card>
);

}

export default OrgForm;