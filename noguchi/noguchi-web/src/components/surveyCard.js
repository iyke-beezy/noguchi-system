import React, {useState,useEffect} from "react";
import { Input, Radio,Card, Space, Button ,Avatar, InputNumber, Modal,Typography} from 'antd';
import "antd/dist/antd.css";
import './components.css'
import {UserOutlined,LockOutlined ,ExclamationCircleOutlined} from '@ant-design/icons';
import axios from 'axios';
import Background from '../assets/desktop4.png';
import Background2 from '../assets/desktop7.png';
import Background3 from '../assets/desktop3.png';

const SurveyCard=(props)=>{
const [allAnswers,setAllAnswers]=useState([])
 const [questions,setQuestions]=useState([]);
 useEffect(() => {
    axios.get('http://localhost:1337/questions')
    .then(
      res =>{
        if(res.data){
         let alls=res.data
          setQuestions(res.data)
          setAllAnswers(alls.map((all)=>({question:all.id,answer:[]}))) 
      }} )
    .catch((error) => {
      console.log(error);
    })
},[]);
 const [point,setPoint]=useState(1);
 let current =questions.filter((question,index)=>index===point-1) 
 let input;
    const handleChange=e=>{
       
        let newArr=[...allAnswers]
        newArr[point-1].answer=e.target.value
       setAllAnswers(newArr) 
    
    } 
    const handleNumberChange=value=>{
        let newArr=[...allAnswers]
        newArr[point-1].answer=value
       setAllAnswers(newArr) 
    }  
    
  if (current[0]?.type==='boolean') {
      input=
      <Radio.Group  style={{marginBottom:15}} value={allAnswers[point-1]?.answer} onChange={handleChange}  size='large'>
        <Radio.Button value='yes'>True</Radio.Button>
        <Radio.Button value='no'>False</Radio.Button>
      </Radio.Group>
      
  } else if(current[0]?.type==='multiple'){
      
  } else if(current[0]?.type==='number'){
      input=<InputNumber onChange={handleNumberChange} value={allAnswers[point-1]?.answer}    style={{marginBottom:15}}  size='large' min={0}/>
}else{
    input=<Input  onChange={handleChange} value={allAnswers[point-1]?.answer}   style={{marginBottom:15}}  type={current[0]?.type} size='large' />
  };
    return(
        <>
         <h1 style={{fontSize:'14em',lineHeight:0.4,color:'lightgrey',opacity:0.2,fontWeight:'bolder'}}>
           {point>9?point:'0'+point}
        </h1>
            <Card style={{width:'100%'}} 
  
    
            actions={[
                <Button type='default' size='large' style={{borderRadius:15}} onClick={()=>{
                point!==1 ? setPoint(point-1):setPoint(point);
                 }}>Back</Button>,
            <Button type='primary' size='large'   /* disabled */ style={{borderRadius:15}} onClick={()=>{
                
                if(point===questions.length){
                    Modal.confirm({
                        title: 'Submit Survey',
                        content: 'Do you want to submit the survey?',
                        icon: <ExclamationCircleOutlined />,
                        onOk() {
                          axios.post('http://localhost:1337/surveys',{
                              surveyUID:props.surveyUID,
                              org_user:JSON.parse(localStorage.getItem('userAndjwt')).user.id,
                              disease:1,
                              ActualSurveyDate:'2017-08-09',
                              community:props.community,
                              answers:allAnswers
                               
                          }).then(res =>{
                                if(res.data){
                                    console.log(res.data)
                                }}

                          )
                          .catch((error) => {
                            console.log(error);
                          })
                        },
                        centered:true,
                        onCancel() {
                          console.log('Cancel');
                        },
                        cancelText:'No',
                        okText:'Yes'
                      });

                }

                point!==questions.length ? setPoint(point+1):setPoint(point);
            }} >{point===questions.length?'Finish':'Next'}</Button>
              ]}
            
            
            >
                <Space direction='vertical' size='large'>
            
                <h1 style={{fontSize:'max(13px,1vw)',wordWrap:'break-word',textTransform:'uppercase',textAlign:'start'}}>{current[0]?.question}</h1>
            
            
            {input}

                
            
            
           
            </Space>


        </Card>
      </>  
    );
};
export default SurveyCard;