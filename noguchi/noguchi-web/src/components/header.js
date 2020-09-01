import React, {useState} from "react";
import { Input, Card, Space, Button ,Avatar} from 'antd';
import "antd/dist/antd.css";
import './components.css';
import {EditFilled ,UserOutlined} from '@ant-design/icons';

const Header=()=>{
    return(
        <div className="headerSection">
            
                    <div style={{display:'flex',flexDirection:'column',alignItems:'start' }}>
                    <Avatar size={100} icon={<UserOutlined/>}/>
                    </div>
                
        </div>
    );
}
export default Header;