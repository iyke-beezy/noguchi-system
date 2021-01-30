import React from 'react'
import { List, Typography, Divider,Row,Col } from 'antd';
import {} from '@ant-design/icons';
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];


export const Request =()=>{

return(
  <>
 
    
    <Divider orientation="left">Requests</Divider>
    <List
      size="large"
      header={<div></div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item><text>{item}</text><text style={{fontSize:"10px"}}>by ken</text></List.Item>}
    />
    
  </>
);

      }
