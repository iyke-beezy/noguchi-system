import { Layout,Card,Table, Tag, Space,Col,Row,Input,Select } from 'antd';
import React,{useState} from 'react';
import ForumList from '../../components/forumList';
import MainHeader from '../../components/mainHeader';
import { Plot,Plot2 } from '../../controls/legend/legend';

const RecordCard=()=>{
    return(
        <Card style={{height:160,margin:10}}>
            <hr/>
        </Card>
    );
}

const columns = [
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    
    },
    {
      title: 'New Cases',
      dataIndex: 'new',
      key: 'new',
    },
    {
      title: 'Active Cases',
      dataIndex: 'active',
      key: 'active',
    },
    {
      title: 'Recovered',
      key: 'recover',
      dataIndex: 'recover',
    },
    {
      title: 'Deaths',
      key: 'deaths',
      dataIndex: 'deaths',
    },
  ];
  
  const data = [
    {
      key: '1',
      year: '2020',
      new: 32,
      active: 100,
      recover: 60,
      deaths: 0,
    },
    {
        key: '2',
        year: '2019',
        new: 32,
        active: 120,
        recover: 30,
        deaths: 7,
      },
      {
        key: '3',
        year: '2018',
        new: 32,
        active: 150,
        recover: 0,
        deaths: 13,
      },
  ];

const RecordCases=()=>{
  const { Search } = Input;
  const { Option } = Select;
  const onSearch = value => console.log(value);
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const{Header} = Layout;

    return(
        <div className='profilePage' style={{maxWidth:'100vw',backgroundColor:'white',width:'auto'}}>
          <MainHeader/>
          <div style={{marginTop:'10vh',width:'100%'}}>
           <Row style={{position:'fixed',zIndex:1,width:'100%'}}>
           <Col xs={24} style={{display:"flex",justifyContent:"center"}}>
           <Search placeholder="Search communities" onSearch={onSearch} style={{ width: 'min(500px,90vw)' }} />
           </Col>
           </Row>
           <Row style={{padding:"20px 25% 20px ",marginTop:'2vh'}}>
           <Col style={{padding:"10px 0px"}} xs={24} md={8}>
           <Select defaultValue="Diseases" style={{ width: 120 }} onChange={handleChange}>
          
              <Option value="Malaria">Malaria</Option>
              <Option value="Cholera">Cholera</Option>
              <Option value="Corona Virus">Corona Virus</Option>
          </Select>
           </Col>
           <Col style={{padding:"10px 0px"}} xs={24} md={8}>
           <Select defaultValue="Continent" style={{ width: 120 }} onChange={handleChange}>
          
              <Option value="Africa">Africa</Option>
              <Option value="Asia">Asia</Option>
              <Option value="Europe">Europe</Option>
              <Option value="America">America</Option>
          </Select>
           </Col>
           <Col style={{padding:"10px 0px"}} xs={24} md={8}>
           <Select defaultValue="Country" style={{ width: 120 }} onChange={handleChange}>
          
              <Option value="Ghana">Ghana</Option>
              <Option value="Nigeria">Nigeria</Option>
              <Option value="South Africa">South Africa</Option>
          </Select>
           </Col>
           </Row>
           <Row>
             <Col xs={24}>
               <h1>Recorded cases in Country</h1>
             </Col>
           </Row>
           <Row>
             <Col xs={24} md={6}>
               <RecordCard 
               
               />
             </Col>
             <Col xs={24} md={6}>
               <RecordCard 
               
               />
             </Col>
             <Col xs={24} md={6}>
               <RecordCard 
               
               />
             </Col>
             <Col xs={24} md={6}>
               <RecordCard 
               
               />
             </Col>
           </Row>
           </div>
        </div>
    );
}
export default RecordCases;