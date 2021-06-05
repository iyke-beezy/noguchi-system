import React, { useState } from "react";
import { Input, Card, Space, Button, Avatar, Select, Form } from 'antd';
import "antd/dist/antd.css";
import './components.css';
import { UserOutlined, LockOutlined, KeyOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import axios from 'axios'
import { orgSignUp, userSignUp } from "../functions";
const { Option } = Select;
const SignUpCard = ({ onClick, ...props }) => {

  // The End User states
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // The Org states
  const [orgName, setOrgName] = useState('');
  const [orgEmail, setOrgEmail] = useState('');
  const [orgPassword, setOrgPassword] = useState('');



  //Type of sign Up for either org 
  //or end user
  const [loginType, setLoginType] = useState('other');



//Org Form Submission
  const handleSubmit = (e) => {
      orgSignUp(orgEmail,orgPassword,orgName);
  }
  //User Form Submission
  const handleUserSubmit = (e) => {
    userSignUp(email,password,username)
  }

  const ChangeType = () => {

  }



  return (
    <Card style={{ flex: 0.28, width: 'min(95vw,100%)', border: '1px solid graysmoke', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 15, backgroundColor: 'white', justifyContent: 'center' }}>
      {
        loginType === 'other' ?





          //  This is the sign up form for the end users
          <Form layout='vertical' onFinish={handleUserSubmit}>


            <h1 style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'left' }}>Sign Up</h1>



            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}><h4 style={{ fontSize: 14, color: 'lightblue', textAlign: 'left', marginRight: 6, cursor: 'pointer' }} onClick={() => setLoginType('org')}>Org SignUp</h4><span style={{ color: 'blue' }}>/</span><h4 style={{ fontSize: 14, textAlign: 'left', color: '#8a2be290', marginLeft: 6, cursor: 'pointer' }} onClick={() => setLoginType('other')}>Other</h4></div>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input
                size="small"
                className='formInput'
                value={username}
                onChange={(e) => { setUsername(e.target.value) }}
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
                onChange={(e) => { setEmail(e.target.value) }}
                placeholder="Enter your email"
                prefix={<MailOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >

              <Input.Password
                size="small"
                value={password}
                className='formInput'
                onChange={(e) => { setPassword(e.target.value) }}
                placeholder="Enter your password"
                prefix={<LockOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Button
              size='small'
              block
              style={{ height: 55, backgroundColor: '#247aeb', color: 'white', marginTop: 20, borderRadius: 8 }}
              htmlType='submit'
            >
              Sign Up
            </Button>

          </Form>







          :


          //Org Sign Up Form











          <Form layout='vertical' onFinish={handleSubmit}>

            <h1 style={{ fontSize: 30, marginRight: 10, fontWeight: 'bold', textAlign: 'left' }}>Org Sign Up</h1>



            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}><h4 style={{ fontSize: 14, color: '#8a2be290', textAlign: 'left', marginRight: 6, cursor: 'pointer' }} onClick={() => setLoginType('org')} >Org SignUp</h4><span style={{ color: 'blue' }}>/</span><h4 style={{ fontSize: 14, textAlign: 'left', color: 'lightblue', marginLeft: 6, cursor: 'pointer' }} onClick={() => setLoginType('other')}>Other</h4></div>
            <Form.Item
              label="Org Name"
              name="org_name"
              rules={[{ required: true, message: 'Please enter org name!' }]}
            >
              <Input
                size="small"
                className='formInput'
                value={orgName}
                onChange={(e) => { setOrgName(e.target.value) }}
                placeholder="Enter org name"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Form.Item
              label="Org Email"
              name="org_email"
              rules={[{ required: true, message: 'Please enter org email!' }]}
            >
              <Input
                size="small"
                value={orgEmail}
                className='formInput'
                onChange={(e) => { setOrgEmail(e.target.value) }}
                placeholder="Enter org email"
                prefix={<MailOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Form.Item
              label="Org Password"
              name="org_password"
              rules={[{ required: true, message: 'Please enter org password!' }]}
            >
              <Input.Password
                size="small"
                className='formInput'
                value={orgPassword}
                onChange={(e) => { setOrgPassword(e.target.value) }}
                placeholder="Enter org password"
                prefix={<LockOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Button
              size='small'
              block
              style={{ height: 55, backgroundColor: '#247aeb', color: 'white', marginTop: 20, borderRadius: 8 }}
              htmlType='submit'
            >
              Sign Up
            </Button>

          </Form>

      }

      <Button onClick={onClick} size={30} type='link' style={{ color: 'lightseagreen', textDecorationStyle: 'solid', textDecorationColor: 'lightseagreen', textDecorationLine: 'underline', textDecorationWidth: 1 }}>Have an Account?</Button>
    </Card>

  );

}

export default SignUpCard;