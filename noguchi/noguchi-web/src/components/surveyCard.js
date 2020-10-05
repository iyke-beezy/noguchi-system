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
        type:'number',
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
        <div style={{display:"flex", height:'auto',width:'60%',flexDirection:'column',marginBottom:20,minWidth:300}}>
        <div style={{height:'28vh',backgroundImage:`url(${current[0].background})`}} className='surveyCard'>
        </div>
    <Card bordered title={<h1 style={{fontSize:20}}>QUESTION {point}</h1>} style={{height:'41vh'/* ,boxShadow: "2px 2px 8px #00000020" */}} 
            actions={[
            <Button type='default' onClick={()=>{
                point!=1 ? setPoint(point-1):setPoint(point);
            }}>Back</Button>,
            <Button type='primary'  /* disabled */ onClick={()=>{
                point!=Questions.length ? setPoint(point+1):setPoint(point);
            }} >Next</Button>
        ]}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'15vh'}}>
            <h3 style={{fontSize:15}}>{current[0].question}</h3>
            {input}

                
            </div>


        </Card>
        </div>
    );
};
export default SurveyCard;