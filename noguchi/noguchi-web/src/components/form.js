import React, { useState } from "react";
import { message, Input, Card, Space, Button, Avatar, Form } from 'antd';
import "antd/dist/antd.css";
import './components.css'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
// import axios from 'axios';
// import qs from 'qs';
import { OrgLogin, UserLogin } from "../functions";

const OrgForm = ({ onClick, ...props }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    OrgLogin(username, password)
  }
  return (
    <Card style={{ flex: 0.28, width: 'min(95vw,100%)', border: '1px solid graysmoke', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 15, backgroundColor: 'white', justifyContent: 'center' }}>
          <Form layout='vertical' onFinish={handleSubmit}>
            <Space direction='vertical' size={10}>
              <h1 style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'left' }}>Org Sign In</h1>
              <Form.Item
                label="Org Username"
                name="org_username"
                rules={[{ required: true, message: "Please input the organization's username!" }]}
              >
                <Input
                  size="large"
                  className='formInput'
                  onChange={(e) => { setUsername(e.target.value) }}
                  placeholder="Enter org username"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
              <Form.Item
                label="Org Password"
                name="org_password"
                rules={[{ required: true, message: "Please input the organization's password!" }]}
              >
                <Input
                  size="large"
                  className='formInput'
                  onChange={(e) => { setPassword(e.target.value) }}
                  placeholder="Enter org password"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
              <Button
                size='large'
                block
                style={{ height: 55, backgroundColor: '#247aeb', color: 'white', marginTop: 20, borderRadius: 8 }}
                htmlType='submit'
              >
                Sign In
    </Button>
            </Space>
          </Form>

    

      <Button size={30} onClick={onClick} type='link' style={{ color: 'lightseagreen', textDecorationStyle: 'solid', textDecorationColor: 'lightseagreen', textDecorationLine: 'underline', textDecorationWidth: 1 }}>Do Not Have An Account?</Button>
    </Card>
  );

}

export default OrgForm;



export const UserForm = ({ onClick, ...props }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit2 = (e) => {
    UserLogin(username, password);
  }
  return (
    <Card style={{ flex: 0.28, width: 'min(95vw,100%)', border: '1px solid graysmoke', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 15, backgroundColor: 'white', justifyContent: 'center' }}>
     
          <Form layout='vertical' onFinish={handleSubmit2}>
            <Space direction='vertical' size={10}>
              <h1 style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'left' }}>Sign In</h1>
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input
                  size="large"
                  className='formInput'
                  onChange={(e) => { setUsername(e.target.value) }}
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
                  onChange={(e) => { setPassword(e.target.value) }}
                  placeholder="Enter your password"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
              <Button
                size='large'
                block
                style={{ height: 55, backgroundColor: '#247aeb', color: 'white', marginTop: 20, borderRadius: 8 }}
                htmlType='submit'
              >
                Sign In
         </Button>
            </Space>
          </Form>
         

      <Button size={30} onClick={onClick} type='link' style={{ color: 'lightseagreen', textDecorationStyle: 'solid', textDecorationColor: 'lightseagreen', textDecorationLine: 'underline', textDecorationWidth: 1 }}>Do Not Have An Account?</Button>
    </Card>
  );

}
