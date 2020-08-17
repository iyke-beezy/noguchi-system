import React, {useState} from "react";
import { Input, Card, Space, Button } from 'antd';
import "antd/dist/antd.css";
import {UserOutlined,LockOutlined } from '@ant-design/icons';

const OrgForm =()=>{

const [username,setUsername]=useState('');
const [password,setPassword]=useState('')
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(username+''+password);
}
return(
    <Card style={{ width: 450,paddingTop:15, paddingBottom:15}}>
    <Space direction='vertical' size={30}>

      <Input 
      size="large"
      style={{width:350,height:50}}
      onChange={(e)=>{setUsername(e.target.value)}}
      placeholder="Enter your username" 
      prefix={<UserOutlined className="site-form-item-icon" />} 
      />
      <Input 
      size="large"
      style={{width:350,height:50}}
      onChange={(e)=>{setPassword(e.target.value)}}
      placeholder="Enter your password" 
      prefix={<LockOutlined className="site-form-item-icon" />} 
      />
      <Button 
      size='large'
      block
      style={{height:55}}
      type='primary'
      onClick={handleSubmit}
      >
      Login
      </Button>
    </Space>
    
    </Card>
);

}

export default OrgForm;