<<<<<<< HEAD
import React, {useState} from 'react';
import {message, Input, Card, Space, Button, Avatar, Form} from 'antd';
import 'antd/dist/antd.css';
import './components.css';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
// import axios from 'axios';
// import qs from 'qs';
import {OrgLogin, UserLogin} from '../utils/functions';
=======
import React, {useState} from "react";
import { message,Input, Card, Space, Button , Form} from 'antd';
import "antd/dist/antd.css";
import './components.css'
import {UserOutlined,LockOutlined} from '@ant-design/icons';
import axios from 'axios';
import qs from 'qs';
>>>>>>> parent of 5b2abbb (reverted)

//Login Forms for the end user and organisation

<<<<<<< HEAD
//Organisation Login Form
const OrgForm = ({onClick, ...props}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    OrgLogin(username, password);
  };
  return (
    <Card
      style={{
        flex: 0.28,
        width: 'min(95vw,100%)',
        border: '1px solid graysmoke',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: 'white',
        justifyContent: 'center',
      }}>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Space direction="vertical" size={10}>
          <h1 style={{fontSize: 30, fontWeight: 'bold', textAlign: 'left'}}>
            Org Sign In
          </h1>
          <Form.Item
            label="Org Username"
            name="org_username"
            rules={[
              {
                required: true,
                message: "Please input the organization's username!",
              },
            ]}>
            <Input
              size="large"
              className="formInput"
              onChange={e => {
                setUsername(e.target.value);
              }}
              placeholder="Enter org username"
              prefix={<UserOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Form.Item
            label="Org Password"
            name="org_password"
            rules={[
              {
                required: true,
                message: "Please input the organization's password!",
              },
            ]}>
            <Input
              size="large"
              className="formInput"
              onChange={e => {
                setPassword(e.target.value);
              }}
              placeholder="Enter org password"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Button
            size="large"
            block
            style={{
              height: 55,
              backgroundColor: '#247aeb',
              color: 'white',
              marginTop: 20,
              borderRadius: 8,
            }}
            htmlType="submit">
            Sign In
          </Button>
        </Space>
      </Form>

      <Button
        size={30}
        onClick={onClick}
        type="link"
        style={{
          color: 'lightseagreen',
          textDecorationStyle: 'solid',
          textDecorationColor: 'lightseagreen',
          textDecorationLine: 'underline',
          textDecorationWidth: 1,
        }}>
        Do Not Have An Account?
=======
const [username,setUsername]=useState('');
const [password,setPassword]=useState('');
const [loginType,setLoginType]=useState('other');
const handleSubmit=(e)=>{
    const org={
      username:username,
      password:password
    }
    console.log(org)
  axios.get('http://localhost:1337/organizations',
    {
      params:{
        username:username,
        key:password
      },
      paramsSerializer:(params)=>qs.stringify(params,{arrayFormat:'repeat'})
    }
  )
   .then(response => {
          
          console.log(response.data)
          if(response.data.length>0){
            localStorage.setItem('selectedOrg',JSON.stringify(response.data))
            window.location.href='/orgAccounts'
          }
          else{
            
            message.error('Organization Not Found')
          }
         
        
        }
        )
        .catch((error) => {
          
          console.log(error);
        })
    
}
const  handleSubmit2=(e)=>{
  axios
  .post('http://localhost:1337/auth/local', {
    identifier: username,
    password: password,
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    localStorage.setItem('currentUser',JSON.stringify(response.data.user))
    window.location.href='/other'
  })
  .catch(error => {
    // Handle error.
    message.error('Incorrect Details')
    console.log('An error occurred:', error.response);
  });
  /* axios.post('http://localhost:1337/user',)
      .then(response =>window.location.href='/other')
      .catch((error) => {
        console.log(error);
        
      }) */
   /* axios.post('http://localhost:5002/auth/userLogin',user)
      .then(response =>window.location.href='/other')
      .catch((error) => {
        console.log(error);
        
      }) */
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
>>>>>>> parent of 5b2abbb (reverted)
      </Button>
    </Card>
  );
};

export default OrgForm;

//user login form
export const UserForm = ({onClick, ...props}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit2 = e => {
    UserLogin(username, password);
  };
  return (
    <Card
      style={{
        flex: 0.28,
        width: 'min(95vw,100%)',
        border: '1px solid graysmoke',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: 'white',
        justifyContent: 'center',
      }}>
      <Form layout="vertical" onFinish={handleSubmit2}>
        <Space direction="vertical" size={10}>
          <h1 style={{fontSize: 32, fontWeight: 'bold', textAlign: 'left'}}>
            Sign In
          </h1>
          <Form.Item
            label="Username"
            name="username"
            rules={[{required: true, message: 'Please input your username!'}]}>
            <Input
              size="large"
              className="formInput"
              onChange={e => {
                setUsername(e.target.value);
              }}
              placeholder="Enter your username"
              prefix={<UserOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{required: true, message: 'Please input your password!'}]}>
            <Input.Password
              size="large"
              className="formInput"
              onChange={e => {
                setPassword(e.target.value);
              }}
              placeholder="Enter your password"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Button
            size="large"
            block
            style={{
              height: 55,
              backgroundColor: '#247aeb',
              color: 'white',
              marginTop: 20,
              borderRadius: 8,
            }}
            htmlType="submit">
            Sign In
          </Button>
        </Space>
      </Form>

      <Button
        size={30}
        onClick={onClick}
        type="link"
        style={{
          color: 'lightseagreen',
          textDecorationStyle: 'solid',
          textDecorationColor: 'lightseagreen',
          textDecorationLine: 'underline',
          textDecorationWidth: 1,
        }}>
        Do Not Have An Account?
      </Button>
    </Card>
  );
};
