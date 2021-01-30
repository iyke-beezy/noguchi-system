import { Layout,Card,Table, Tag, Space,Col,Row,Input,Select, Empty, Spin } from 'antd';
import React,{useState,useEffect} from 'react';
import ForumList from '../../components/forumList';
import MainHeader from '../../components/mainHeader';
import { Plot,Plot2 } from '../../controls/legend/legend';
import axios from 'axios'

const RecordCard=(props)=>{
  console.log(props.data.surveys[0].surveyUID)
  if(props.data.surveys){
 /*    localStorage.setItem('expandSurvey',props.data.surveys.surveyUID)
 */  }
 const handleClick=()=>{
  if(props.data.surveys){
       localStorage.setItem('expandedCommunity',props.data.id);
       window.location.href='/details';
      }
 }
    return(
        <Card onClick={handleClick} style={{height:160,margin:10,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h1 >{props.data.Community}</h1>
            
            
            <span>{props.data.surveys.length} surveys</span>
            

        </Card>
    );
}


const RecordCases=()=>{
  const [selectedCountry,setSelectedCountry]=useState('');
  const [selectedContinent,setSelectedContinent]=useState('');
  const [selectedDisease,setSelectedDisease]=useState('');
  const [diseases,setDiseases]=useState([])
  const [filteredCommunities,setFilteredCommunities]=useState([])
  const [filteredCountries,setFilteredCountries]=useState([])
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
console.log(countries)
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

const [regions, setRegions] =useState([]);
useEffect(() => {
  axios.get('http://localhost:1337/regions')
  .then(
    res =>{
      if(res.data){
        console.log(res.data)
        setRegions(res.data)
    }} )
  .catch((error) => {
    console.log(error);
  })
},[]);
const [districts, setDistricts] =useState([]);
useEffect(() => {
  axios.get('http://localhost:1337/districts')
  .then(
    res =>{
      if(res.data){
        console.log(res.data)
        setDistricts(res.data)
    }} )
  .catch((error) => {
    console.log(error);
  })
},[]);


  const { Search } = Input;
  const { Option } = Select;
  const onSearch = value => {
    setFilteredCommunities(communities.filter(community=>community.Community===value))
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const handleDisease=(value)=>{
    setSelectedDisease(value)
  }
  const handleCountry=(value)=>{
    setSelectedCountry(value)
    let country=countries.filter(country=>country.name===value)
      let rejiin=country[0]?.regions
      
      let id=rejiin.map(rej=>rej.id)
     let dis=districts.filter(district=>id.includes(district.region.id))
     if(dis[0]?.communities.length>0){
     setFilteredCommunities(dis[0]?.communities) 
    }else{
      setFilteredCommunities([]) 
    }
      
    }
  
  const onContinentChange=(value)=>{

    setSelectedContinent(value)
    setFilteredCountries(countries.filter(country=>country.continent.name===value));
    console.log(filteredCountries);
    setFilteredCommunities([])
    setSelectedCountry('...')
    /* if (results.length>0){
      const nouveau=results.map(result=>({name:result.name}));
      setCountries(nouveau);
    }else{
      setCountries([]);
    } */
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
                    onChange={onSearch}
            
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
            <Select defaultValue="Select Disease" style={{ width: 120 }} onChange={handleDisease}>
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
            <Select defaultValue="Select Continent" style={{ width: 120 }} onChange={onContinentChange}> 
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
            filteredCountries.length>0?
            <Select defaultValue="Select Country" style={{ width: 120 }} onChange={handleCountry}>
               {
                  countries.map(country=><Option value={country.name}>{country.name}</Option>)
                }
          </Select>
            :
            <Select defaultValue='No Data'  />
          }
           
           </Col>
           </Row>
           <Row>
             
             <Col xs={24}>
               <h1>Recorded cases in {selectedCountry?selectedCountry:'...'}</h1>
             </Col>
           </Row>
           <Row>

              {
                filteredCommunities.length>0?
                communities.map((community,index)=><Col key={index} xs={24} md={6}><RecordCard key={index} data={community}/></Col>)
                
                :
                <Col xs={24}>
                  <Empty description='Search for a Community'/>
                </Col>
                
              }

             
             
           </Row>
           </div>
        </div>
    );
}
export default RecordCases;