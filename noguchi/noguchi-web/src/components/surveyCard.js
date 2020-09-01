import React, {useState} from "react";
import { Input, Radio,Card, Space, Button ,Avatar, InputNumber} from 'antd';
import "antd/dist/antd.css";
import './components.css'
import {UserOutlined,LockOutlined } from '@ant-design/icons';

import Background from '../assets/desktop4.png';
import Background2 from '../assets/desktop7.png';
import Background3 from '../assets/desktop3.png';
const Questions=[
    {
        id:0,
        question:'What is the population of the community',
        type:'number',
        background:Background2
    },
    {
        id:1,
        question:'How many people are affected in the community',
        type:'number',
        background:Background3
    },
    {
        id:2,
        question:'What is the population of children',
        type:'boolean',
        background:Background
    },
]

const SurveyCard=()=>{
 //const type='email';
 const [point,setPoint]=useState(1);
 const current =Questions.filter(function(question){
            return question.id==point-1;
 })
 console.log(current)
 let input;
  if (current[0].type=='boolean') {
      input=
      <Radio.Group size='large' /* onChange={this.onChange} value={this.state.value} */>
        <Radio.Button value={1}>True</Radio.Button>
        <Radio.Button value={2}>False</Radio.Button>
      </Radio.Group>
      
  } else if(current[0].type=='multiple'){
      
  } else if(current[0].type=='number'){
      input=<InputNumber size='large'min={0}/>
}else{
    input=<Input type={current[0].type} size='large' />
  };
    return(
        <div style={{display:"flex", height:'50vh',width:'65%'}}>
        <div style={{flex:0.4,backgroundImage:`url(${current[0].background})`}} className='surveyCard'>
        </div>
    <Card title={<h1>QUESTION {point}</h1>} style={{flex:0.6,borderRadius:'0px 35px 35px 0px',boxShadow: "2px 2px 8px #00000020"}} actions={[
            <Button type='default' onClick={()=>{
                point!=1 ? setPoint(point-1):setPoint(point);
            }}>Back</Button>,
            <Button type='primary'  /* disabled */ onClick={()=>{
                point!=Questions.length ? setPoint(point+1):setPoint(point);
            }} >Next</Button>
        ]}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'20vh'}}>
            <h2>{current[0].question}</h2>
            {input}

                
            </div>


        </Card>
        </div>
    );
};
export default SurveyCard;