import React from "react";
import { Avatar} from 'antd';
import "antd/dist/antd.css";
import './components.css';
import {UserOutlined} from '@ant-design/icons';

const Headers=()=>{
    return(
        <div className="headerSection">
            
                    <div style={{display:'flex',flexDirection:'column',alignItems:'start',margin:10}}>
                    <Avatar size={90} icon={<UserOutlined/>}/>
                    </div>
                
        </div>
    );
}
export default Headers;