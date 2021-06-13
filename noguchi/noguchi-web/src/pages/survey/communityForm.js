import React,{useEffect, useState} from 'react'
import {Row,Col,Button,Form,Input,Select,Space} from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {Get,Post} from '../../utils/api'


export const CommunityForm = () =>{
   const [districts,setDistricts] = useState([])
   const [count,setCount] = useState(0)
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

      const postcommunities = async(body) =>{
        var url = "communities";
         const data = await Post(url,body);
         
     
     }

      const onFinish = values => {
        console.log('Received values of form:', values);
        values.communities.map(value=>{
          console.log(value.community)
          const body = {
            community:value.community,
            district:value.district
          } 
          const bod = JSON.stringify(body)
          postcommunities(bod)
        })
      
      };
    

      

      const { Option } = Select;


        function handleChange(value) {
        console.log(`selected ${value}`);
        }

        const getDistrict = async() =>{
          var url = "districts";
          const  data = await Get(url);
           console.log(data)
          setDistricts(data);
       
       }

       useEffect(()=>{
           getDistrict();
       
       },[count])


    return(
     



               <Form style={{marginTop:"10px"}} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
             <Row>
                
               <Form.List name="communities">
                 {(fields, { add, remove }) => (
                   <>
                    <Col xs="24" md="12">
                     {fields.map(field => (
                       <Space key={field.key} style={{ display: 'flex', marginBottom: 3,marginRight:10 }} align="baseline">
                         <Form.Item
                           {...field}
                           name={[field.name, 'community']}
                           fieldKey={[field.fieldKey, 'community']}
                           rules={[{ required: true, message: 'Missing community ' }]}
                         >
                           <Input placeholder="Input community name here" />
                         </Form.Item>
                         <Form.Item
                           {...field}
                           name={[field.name, 'district']}
                           fieldKey={[field.fieldKey, 'district']}
                           rules={[{ required: true, message: 'Missing district ' }]}
                         >
                            <Select placeholder="Add District" defaultValue={undefined} style={{ width: 120 }} >
                       {districts.map(district =>{
                         return(
                              <Option value={district.id}>{district.district}</Option>
                         )
                       })} 
                        
                            </Select>
                         </Form.Item>
                         <MinusCircleOutlined onClick={() => remove(field.name)} />
                       </Space>
                     ))}
                     </Col>
                     <Col xs="24" md="12">
                     <Form.Item>
                       <Button className="addF" style={{marginTop:"3px"}} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                         Add Community
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
    
    );

    
  
}

