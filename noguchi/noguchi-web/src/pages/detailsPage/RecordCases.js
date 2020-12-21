import { Layout,Card,Table, Tag, Space,Col,Row,Input,Select } from 'antd';
import React,{useState,useEffect} from 'react';
import ForumList from '../../components/forumList';
import MainHeader from '../../components/mainHeader';
import { Plot,Plot2 } from '../../controls/legend/legend';
import axios from 'axios'

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

  const [diseases,setDiseases]=useState([])
  useEffect(() => {
      axios.get('http://localhost:1337/diseases')
      .then(
        res =>{
          if(res.data){
            setDiseases(res.data)
        }} )
      .catch((error) => {
        console.log(error);
      })
  },[]);
  const [continents, setContinents] =useState([]);
  useEffect(() => {
    axios.get('http://localhost:1337/continents')
    .then(
      res =>{
        if(res.data){
          setContinents(res.data)
      }} )
    .catch((error) => {
      console.log(error);
    })
},[]);

  const [countries, setCountries] =useState([]);
  useEffect(() => {
    axios.get('http://localhost:1337/countries')
    .then(
      res =>{
        if(res.data){
          setCountries(res.data)
      }} )
    .catch((error) => {
      console.log(error);
    })
},[]);
const [communities, setCommunities] =useState([]);
  useEffect(() => {
    axios.get('http://localhost:1337/communities')
    .then(
      res =>{
        if(res.data){
          console.log(res.data)
          setCommunities(res.data)
      }} )
    .catch((error) => {
      console.log(error);
    })
},[]);



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
           {
            communities?
            <Select 
            showSearch
            style={{ width: 'min(500px,90vw)' }}
                    placeholder="Search  Communities"
                    optionFilterProp="children"
                    /* onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}*/
                    onSearch={onSearch} 
            
            
            >
              {
                communities.map(community=><Option value={community.Community}>{community.Community}</Option>)
              }
          </Select>
            :
            <Select/>
          }
           </Col>
           </Row>
           <Row style={{padding:"20px 25% 20px ",marginTop:'2vh'}}>
           <Col style={{padding:"10px 0px"}} xs={24} md={8}>
          {
            diseases?
            <Select defaultValue="Schistosomiasis" style={{ width: 120 }} onChange={handleChange}>
              {
                diseases.map(disease=><Option value={disease.name}>{disease.name}</Option>)
              }
          </Select>
            :
            <Select/>
          }
           </Col>
           <Col style={{padding:"10px 0px"}} xs={24} md={8}>
            
           {
            continents?
            <Select defaultValue="Continent" style={{ width: 120 }} onChange={handleChange}> 
               {
            continents.map(continent=><Option value={continent.name}>{continent.name}</Option>)
          }
          </Select>
            :
            <Select/>
          }
           
           </Col>
           <Col style={{padding:"10px 0px"}} xs={24} md={8}>
           {
            countries?
            <Select defaultValue="Country" style={{ width: 120 }} onChange={handleChange}>
               {
                  countries.map(country=><Option value={country.name}>{country.name}</Option>)
                }
          </Select>
            :
            <Select/>
          }
           
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