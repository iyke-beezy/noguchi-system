import React, {useState} from "react";
import { Input, Card, Button, Popover ,Avatar, Divider} from 'antd';
import "antd/dist/antd.css";
import './components.css';
import {EditFilled ,UserOutlined,ExportOutlined} from '@ant-design/icons';


export const MiniMiniHeader=(props)=>{
  const content = (
      <div style={{display:'flex',flexDirection:'column'}}>
        <Button className='popoverButtons' type='link' size='large' onClick={()=>{
          if(localStorage.getItem('current_user')){
            window.location.href='/profile'
          }else if(localStorage.getItem('currentUser')){
            window.location.href='/userprofile'
          }else if(localStorage.getItem('org_admin')){
            window.location.href='/orgadmin'
          }
          }}><UserOutlined/>Profile</Button>
        <Button className='popoverButtons' type='link' size='large' danger 
        onClick={()=>{
          localStorage.removeItem('current_user');
          localStorage.removeItem('currentUser');
          localStorage.removeItem('org_admin');
          window.location.href='/';
        }}><ExportOutlined/>Logout</Button>
      </div>
    );
  return(
      <div>
          
          <Popover style={{zIndex:100000000000000}} content={content} placement='bottomLeft'  trigger='hover'>
                  <Avatar size={35} icon={<UserOutlined/>}/>
        </Popover>
              
      </div>
  );
}


const MiniHeader=()=>{
    const content = (
        <div style={{display:'flex',flexDirection:'column'}}>
          <Button type='link' size='large' style={{color:'#6461ff'}} onClick={()=>{window.location.href='/profile'}}><UserOutlined/>Profile</Button>
          <Button type='link' size='large' danger onClick={()=>{window.location.href='/'}}><ExportOutlined/>Logout</Button>
        </div>
      );
    return(
        <div className="miniHeaderSection">
            
            <Popover content={content} trigger="click">

                    <Avatar size={70} icon={<UserOutlined/>}/>
        </Popover>
                
        </div>
    );
}
export default MiniHeader;