import React from 'react'
import {Row,Col,Button,Form,Input,Select,Space} from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {Get,Post} from '../../utils/api'
export const DiseaseForm = () =>{

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

      const postdiseases = async(body) =>{
        var url = "diseases";
         const data = await Post(url,body);
         
     
     }


      const onFinish = values => {
        console.log('Received values of form:', values);
        values.diseases.map(value=>{
          const body = {
            name:value.disease,
          
          } 
          const bod = JSON.stringify(body)
          postdiseases(bod)
        })  
      };
    

      const { Option } = Select;


        function handleChange(value) {
        console.log(`selected ${value}`);
        }


    return(
       <>
         

             
           



               <Form style={{marginTop:"10px"}} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
             <Row>
                
               <Form.List name="diseases">
                 {(fields, { add, remove }) => (
                   <>
                    <Col xs="24" md="12">
                     {fields.map(field => (
                       <Space key={field.key} style={{ display: 'flex', marginBottom: 3,marginRight:10 }} align="baseline">
                         <Form.Item
                           {...field}
                           name={[field.name, 'disease']}
                           fieldKey={[field.fieldKey, 'disease']}
                           rules={[{ required: true, message: 'Missing disease ' }]}
                         >
                           <Input placeholder="Input disease here" />
                         </Form.Item>
                         <MinusCircleOutlined onClick={() => remove(field.name)} />
                       </Space>
                     ))}
                     </Col>
                     <Col xs="24" md="12">
                     <Form.Item>
                       <Button className="addF" style={{marginTop:"3px"}} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                         Add Disease
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

