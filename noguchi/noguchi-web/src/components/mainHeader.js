import { Row,Layout,Menu } from 'antd'
import React, {useState} from 'react'
import {Button,Avatar} from '@material-ui/core';

import {MessageOutlined,FileSearchOutlined,UserOutlined} from '@ant-design/icons';
import { MiniMiniHeader } from './miniheader';
const {Header}=Layout

const MainHeader=()=>{
    const [online,setOnline]=useState(true)
    return(
        <Header style={{position:'fixed',height:'auto',borderBottom:'1px solid whitesmoke',zIndex:1,backgroundColor:"white",width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <div className="logo" onClick={()=>{window.location.href='/home';}}><span style={{fontWeight:'bold',cursor:'pointer'}} >IDCS</span ></div>
            <Menu theme="light"  mode="horizontal"  style={{borderBottom:'none',width:'30%',display:'flex',justifyContent:'flex-end'}}>
                <Menu.Item icon={<MessageOutlined/>} key="1" onClick={()=>{window.location.href='/oforum';}}>Forums</Menu.Item>
                <Menu.Item icon={<FileSearchOutlined/>} key="2" onClick={()=>{window.location.href='/cases';}}>Explore Cases </Menu.Item>
                {
                    online?
                    <Menu.Item key="3" style={{border:'none'}}><MiniMiniHeader onClick={()=>setOnline(false)}/></Menu.Item>
                    :
                    <Menu.Item key="3" style={{border:'none'}}><Button variant="contained" color='primary' disableElevation onClick={()=>{window.location.href='/login';}}>Login</Button></Menu.Item>

                }
            </Menu>
         </Header>
    );
}
export default MainHeader;