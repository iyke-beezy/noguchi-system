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
     
    },
    {
        id:1,
        question:'How many people are affected in the community',
        type:'number',
       
    },
    {
        id:2,
        question:'What is the population of children',
        type:'number',
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
      <Radio.Group style={{marginBottom:15}} size='large' /* onChange={this.onChange} value={this.state.value} */>
        <Radio.Button value={1}>True</Radio.Button>
        <Radio.Button value={2}>False</Radio.Button>
      </Radio.Group>
      
  } else if(current[0].type=='multiple'){
      
  } else if(current[0].type=='number'){
      input=<InputNumber style={{marginBottom:15}} size='large'min={0}/>
}else{
    input=<Input style={{marginBottom:15}} type={current[0].type} size='large' />
  };
    return(
        
            <Card style={{width:'auto',minWidth:250,padding:20}} >
                <Space direction='vertical' size='large'>
            
            
            <h3 style={{fontSize:20,textTransform:'uppercase',textAlign:'start'}}>{current[0].question}</h3>
            {input}

                
            
            <div style={{display:"flex",flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
            <Button type='default' size='large' style={{borderRadius:15}} onClick={()=>{
                point!=1 ? setPoint(point-1):setPoint(point);
            }}>Back</Button>
            <Button type='primary' size='large'   /* disabled */ style={{borderRadius:15}} onClick={()=>{
                point!=Questions.length ? setPoint(point+1):setPoint(point);
            }} >Next</Button>

            </div>
           
            </Space>


        </Card>
        
    );
};
export default SurveyCard;