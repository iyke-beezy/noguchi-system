import React from 'react'
import {Row,Col,Button,Form,Input,Select,Space} from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
<<<<<<< HEAD
import {Get,Post} from '../../utils/api'
=======
import {Post} from '../../api'
>>>>>>> parent of 5b2abbb (reverted)
export const DiseaseForm = () =>{

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

