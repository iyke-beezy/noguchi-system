import React from 'react';
import SurveyCard from '../../components/surveyCard';
import { Input, Card, Space, Button ,Avatar,Progress} from 'antd';
import "antd/dist/antd.css";
import MiniHeader from '../../components/miniheader';

const SurveyPage=()=>{

    return(
        <div className='surveyPage' style={{backgroundColor:'#f5f5f5'}}>
            <MiniHeader/>
            <h1 style={{fontSize:45,/* textShadow:'0 0 2px #000000, 0 0 2px #000000', */ marginBottom:5,color:'#40404080'}}>SCHISTOSOMIASIS</h1>
            <SurveyCard/>
            <Progress type="circle" percent={75} width={50} style={{padding:20,marginBottom:20,boxShadow:'3px 3px 5px #00000020',borderRadius:'60px',backgroundColor:'#ffffff'}}/>
            
        </div>

    );
}
export default SurveyPage;