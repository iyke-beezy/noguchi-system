import React,{useEffect,useState} from 'react'
import {Row,Col,Button,Form,Input,Select,Space} from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {Get,Post} from '../../utils/api'


export const SurveyForm = () =>{
   const [diseases,setDiseases] = useState([]);
   const [dis,setDis] = useState(0);
   const [count,setCount] = useState(0);
   var data = [];
    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 },
        },
      };
      const formItemLayoutWithOutLabel = {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 },
        },
      };


      const postquestions = async(body) =>{
        var url = "questions";
         data = await Post(url,body);
         
     
     }


      const onFinish = values => {
       if (dis===0){
         alert("You must choose a disease");
         return
       }
        values.questions.map(value=>{
         
          const body = {
            disease: dis,
            question:value.question,
            Keyword:value.keyword,
            type:value.type
          }
        
          const bod = JSON.stringify(body)
       
          postquestions(bod)
        })
      };
    

      const { Option } = Select;


        function handleChange(value) {
     
      

        }

        function handleChanges(value) {
         
          setDis(value);
  
          }
     
        const getDiseases = async() =>{
          var url = "diseases";
           data = await Get(url);
          setDiseases(data);
         
       
       }

        useEffect(()=>{
            getDiseases();
        
        },[count])


    return(
       <>
         

               <Row>
                   <Col>
                 
                   <Select placeholder="Disease" defaultValue={undefined} style={{ width: 120 }} onChange={handleChanges}>
                     
                   {diseases.map(disease =>{
                           return( <Option value={disease.id}>{disease.name}</Option> 
                            )})}
                  
                        </Select>

               
                       
                       
                   </Col>
               </Row> 
           



               <Form style={{marginTop:"10px"}} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
             <Row>
                
               <Form.List name="questions">
                 {(fields, { add, remove }) => (
                   <>
                    <Col xs="24" md="12">
                     {fields.map(field => (
                       <Space key={field.key} style={{ display: 'flex', marginBottom: 3,marginRight:10 }} align="baseline">
                         <Form.Item
                           {...field}
                           name={[field.name, 'question']}
                           fieldKey={[field.fieldKey, 'question']}
                           rules={[{ required: true, message: 'Missing question ' }]}
                         >
                           <Input placeholder="Input question here" />
                         </Form.Item>
                         <Form.Item
                           {...field}
                           name={[field.name, 'keyword']}
                           fieldKey={[field.fieldKey, 'keyword']}
                           rules={[{ required: true, message: 'Missing keyword ' }]}
                         >
                           <Input placeholder="Input keyword here" />
                         </Form.Item>
                         <Form.Item
                           {...field}
                           name={[field.name, 'type']}
                           fieldKey={[field.fieldKey, 'type']}
                           rules={[{ required: true, message: 'Missing type ' }]}
                         >
                              <Select placeholder="Select type" defaultValue={undefined} style={{ width: 120 }} onChange={handleChange}>
                                    <Option value="string">string</Option>
                                    <Option value="boolean">boolean</Option>
                                    <Option value="number">number</Option>
                                    <Option value="radio">radio</Option>
                                    <Option value="list">list</Option>
                                    <Option value="listpairs">listpairs</Option>
                              </Select>
                         </Form.Item>
                         <MinusCircleOutlined onClick={() => remove(field.name)} />
                       </Space>
                     ))}
                     </Col>
                     <Col xs="24" md="12">
                     <Form.Item>
                       <Button className="addF" style={{marginTop:"3px"}} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                         Add Question
                       </Button>
                     </Form.Item>
                     </Col>
                   </>
                 )}
               </Form.List>
             <Col md="12" xs="24">
             <Form.Item>
                 <Button  style={{margin:"3px 10px 0px"}} type="primary" htmlType="submit">
                   Submit
                 </Button>
               </Form.Item>
             </Col>
             <Col md="12" xs="24">
            
             </Col>
              
               </Row>
             </Form>
       </>
    );

    
  
}

