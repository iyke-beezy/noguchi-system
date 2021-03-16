import React, {useState,useEffect} from "react";
import { Input, Radio,Card, Space, Button ,message, InputNumber, Modal,Checkbox,Form,Select} from 'antd';
import "antd/dist/antd.css";
import './components.css'
import {PlusOutlined,ArrowUpOutlined,ArrowDownOutlined,MinusCircleOutlined ,ExclamationCircleOutlined} from '@ant-design/icons';
import axios from 'axios';

const {Option}=Select
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
    const handleCheckChange=value=>{
      let newArr=[...allAnswers]
      newArr[point-1].answer=value
      setAllAnswers(newArr) 

      console.log(allAnswers)
    }
    
    const handleFinish=(values)=>{
      {
                
        if(point===questions.length){
          if(current[0]?.type==='radiolist'||current[0]?.type==='listpairs'||current[0]?.type==='listselect'){
            console.log(values)
            let newArr=[...allAnswers]
            newArr[point-1].answer=Object.values(values)[0];
            setAllAnswers(newArr) 
            console.log(allAnswers)
          }
            Modal.confirm({
                title: 'Submit Survey',
                content: 'Do you want to submit the survey?',
                icon: <ExclamationCircleOutlined />,
                onOk() {
                  axios.post('http://localhost:1337/surveys',{
                      surveyUID:props.surveyUID,
                      org_user:JSON.parse(localStorage.getItem('userAndjwt')).user.id,
                      disease:1,
                      ActualSurveyDate:props.asDate,
                      community:props.community,
                      answers:allAnswers
                       
                  }).then(res =>{
                        if(res.data){
                            console.log(res.data)
                            message.success('Survey Filled Successfully');
                            window.location.href='/entry'
                        }}

                  )
                  .catch((error) => {
                    console.log(error);
                    message.error('Entry Unsuccessful')
                  })
                },
                centered:true,
                onCancel() {
                  console.log('Cancel');
                },
                cancelText:'No',
                okText:'Yes'
              });

        }else if(current[0]?.type==='listpairs'){
            console.log(values)

            let newArr=[...allAnswers]
            newArr[point-1].answer=Object.values(values)[0];
            setAllAnswers(newArr) 
            console.log(allAnswers)
            setPoint(point+1)
        }else if(current[0]?.type==='listselect'){
          console.log(values)
          let newArr=[...allAnswers]
          newArr[point-1].answer=Object.values(values)[0];
          setAllAnswers(newArr) 
          console.log(allAnswers)
          setPoint(point+1)
      }else if(current[0]?.type==='radiolist'){
        console.log(values)
        let newArr=[...allAnswers]
          newArr[point-1].answer=Object.values(values)[0];
          setAllAnswers(newArr) 
          console.log(allAnswers)
          setPoint(point+1)
      }
        else {setPoint(point+1)}
    }
    }
    
  if (current[0]?.type==='boolean') {
      input=
      <Form.Item name={current[0]?.Keyword} /* rules={[{ required: true, message: 'Please enter data!' }]} */>
      <Radio.Group  style={{marginBottom:15}} value={allAnswers[point-1]?.answer} onChange={handleChange}  size='large'>
        <Radio.Button value='yes'>True</Radio.Button>
        <Radio.Button value='no'>False</Radio.Button>
      </Radio.Group>
      </Form.Item>
  } else if(current[0]?.type==='check'){
    input=
    <Form.Item name={current[0]?.Keyword} /* rules={[{ required: true, message: 'Please enter data!' }]} */>
         <Checkbox.Group onChange={handleCheckChange} >
            {current[0]?.options.map(
              (option,index)=><Checkbox key={index} style={{ lineHeight: '32px'}} value={option}>{option}</Checkbox>
            )}
        </Checkbox.Group>
    </Form.Item>
      
  }else if(current[0]?.type==='radio'){
    input=
    <Form.Item name={current[0]?.Keyword} /* rules={[{ required: true, message: 'Please enter data!' }]} */>
         <Radio.Group  style={{marginBottom:15}} value={allAnswers[point-1]?.answer} onChange={handleChange}  size='large'>
          <Radio.Button value='good'>Good</Radio.Button>
          <Radio.Button value='bad'>Bad</Radio.Button>
          <Radio.Button value='poor'>Poor</Radio.Button>
        </Radio.Group>
    </Form.Item>
      
  } else if(current[0]?.type==='number'){
      input=<Form.Item name={current[0]?.Keyword} /* rules={[{ required: true, message: 'Please enter data!' }]} */><InputNumber onChange={handleNumberChange} value={allAnswers[point-1]?.answer}    style={{marginBottom:15}}  size='large' min={0}/></Form.Item>
}else if(current[0]?.type==='listpairs'){
  const [firstpart,secondpart]=current[0]?.Keyword.split(' and ')
  input=
        <Form.List name={current[0]?.Keyword} >
          {(fields, { add, remove }) => (
            <>
              {fields.map(field => (
                <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...field}
                    name={[field.name, firstpart]}
                    fieldKey={[field.fieldKey, firstpart]}
                    rules={[{ required: true, message: 'Missing '+firstpart }]}
                  >
                    <Input placeholder={firstpart}  />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, secondpart]}
                    fieldKey={[field.fieldKey, secondpart]}
                    rules={[{ required: true, message: 'Missing '+secondpart }]}
                  >
                    <Input placeholder={secondpart} />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
  

}else if(current[0]?.type==='listselect'){
  const [firstpart,secondpart]=current[0]?.Keyword.split(' and ')
  input=
        <Form.List name={current[0]?.Keyword} >
          {(fields, { add, remove }) => (
            <>
              {fields.map(field => (
                <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...field}
                    name={[field.name, firstpart]}
                    fieldKey={[field.fieldKey, firstpart]}
                    rules={[{ required: true, message: 'Missing '+firstpart }]}
                  >
                    <Input placeholder={firstpart}  />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, secondpart]}
                    fieldKey={[field.fieldKey, secondpart]}
                    rules={[{ required: true, message: 'Missing '+secondpart }]}
                  >
                    <Select style={{width:200}}>
                      {
                        current[0]?.options.map((option,index)=><Option key={index} value={option}>{option}</Option>)
                      }
                    </Select>
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
  

}else if(current[0]?.type==='radiolist'){
  const [firstpart,secondpart]=current[0]?.Keyword.split(' and ')
  input=
        <Form.List name={current[0]?.Keyword} >
          {(fields, { add, remove }) => (
            <>
              {fields.map(field => (
                <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...field}
                    name={[field.name, firstpart]}
                    fieldKey={[field.fieldKey, firstpart]}
                    rules={[{ required: true, message: 'Missing '+firstpart }]}
                  >
                    <Select style={{width:200}}>
                      {
                        current[0]?.options.map((option,index)=><Option key={index} value={option}>{option}</Option>)
                      }
                    </Select>
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, secondpart]}
                    fieldKey={[field.fieldKey, secondpart]}
                    rules={[{ required: true, message: 'Missing '+secondpart }]}
                  >
                          <Radio.Group  style={{marginBottom:15}}  size='large'>
                            <Radio.Button value='increasing'><ArrowUpOutlined/></Radio.Button>
                            <Radio.Button value='decreasing'><ArrowDownOutlined/></Radio.Button>
                          </Radio.Group>
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
  

}else{
    input=<Form.Item name={current[0]?.Keyword} /* rules={[{ required: true, message: 'Please enter data!' }]} */><Input  onChange={handleChange} value={allAnswers[point-1]?.answer}   style={{marginBottom:15}}  type={current[0]?.type} size='large' /></Form.Item>
  };
    return(
        <>
         <h1 style={{fontSize:'14em',lineHeight:0.4,color:'lightgrey',opacity:0.2,fontWeight:'bolder'}}>
           {point>9?point:'0'+point}
        </h1>
           <Form onFinish={handleFinish}  style={{width:'100%'}}>
            <Card  
              actions={[
                <Button type='default' size='large' style={{borderRadius:15}} onClick={()=>{point!==1 ? setPoint(point-1):setPoint(point);
                 }}>Back</Button>,
                <Button type='primary' size='large'   /* disabled */ style={{borderRadius:15}} htmlType='submit' >{point===questions.length?'Finish':'Next'}</Button>
                ]}

            >
                <Space direction='vertical' size='large'>
                <h1 style={{fontSize:'max(13px,1vw)',wordWrap:'break-word',textTransform:'uppercase',textAlign:'center'}}>{current[0]?.question}</h1>
                {input}
                </Space>


            </Card>
            </Form>
      </>  
    );
};
export default SurveyCard;