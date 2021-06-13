import React from "react";
import {Button } from 'antd';
import "antd/dist/antd.css";
import './components.css'


const Banner =()=>{
    return(
        <div className='banner'>
            <h1>Take A Disease Survey</h1>
            <Button className='bannerButton'>Start</Button>
        </div>
    );
}
export default Banner;