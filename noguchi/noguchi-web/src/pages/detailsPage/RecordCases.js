import { Layout,Card,Col,Row,Input,Select, Empty, Divider, Button } from 'antd';
import React,{useState,useEffect} from 'react';
import MainHeader from '../../components/mainHeader';
import { jsPDF } from "jspdf";
import 'jspdf-autotable'
import axios from 'axios'

const doc = new jsPDF('l');

const RecordCard=(props)=>{
  console.log(props.disease)
  console.log(props.data.surveys)
  let savey;
  if(props.disease){
    savey=props.data.surveys.filter(survey=>survey.disease===props.disease)
  }else{
    savey=props.data.surveys
  }
 const handleClick=()=>{
  if(savey.length>0){
       localStorage.setItem('expandedCommunity',props.data.id);
       window.location.href='/details';
      }
 }
    return(
        <Card onClick={handleClick} style={{height:160,margin:10,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h1 >{props.data.Community}</h1>
            
            {
              savey.length>0?
              <span>{savey.length} surveys</span>
              :
              <span>No surveys</span>
            }
            
            

        </Card>
    );
}


const RecordCases=()=>{
  const [selectedCountry,setSelectedCountry]=useState();
  const [selectedContinent,setSelectedContinent]=useState();
  const [selectedDisease,setSelectedDisease]=useState();
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
const [surveys, setSurveys] =useState([]);
const [surveyAnswers,setSurveyAnswers]=useState([])
useEffect(() => {
  axios.get('http://localhost:1337/surveys')
  .then(
    res =>{
      if(res.data){
        console.log(res.data)
        setSurveys(res.data)
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
    console.log(value)
    setSelectedDisease(1)
    setFilteredCommunities(communities.filter(community=>community.Community===value))

  };
  
  const handleDisease=(value)=>{
    setSelectedDisease(value)
    console.log(value)
  }
  const handleCountry=(value)=>{
    setSelectedCountry(value)
    let country=countries.filter(country=>country.id===value)
      let rejiin=country[0]?.regions

      let id=rejiin.map(rej=>rej.id)
     let dis=districts.filter(district=>id.includes(district.region.id))
     
     console.log('districts:',rejiin)
     if(dis[0]?.communities.length>0){
     setFilteredCommunities(dis[0]?.communities) 
    }else{
      setFilteredCommunities([]) 
    }
      
    }
  
  const onContinentChange=(value)=>{
    setSelectedContinent(value)
    setFilteredCountries(countries.filter(country=>country.continent.id===value));
    console.log(countries.filter(country=>country.continent.id===value));
    setFilteredCommunities([])
    setSelectedCountry('');
    /* if (results.length>0){
      const nouveau=results.map(result=>({name:result.name}));
      setCountries(nouveau);
    }else{
      setCountries([]);
    } */
  }
 
    const{Header} = Layout;
    let filteredCommIds=filteredCommunities.map(fc=>fc.id)
    let neatSurvey=surveys.filter(survey=>filteredCommIds.includes(survey.community.id)&& survey.disease.id===selectedDisease)
  
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
            <>
              <label style={{display:'block'}}>Select Disease</label>
            <Select value={selectedDisease} style={{ width: 120 }} onChange={handleDisease}>
              {
                diseases.map(disease=><Option value={disease.id}>{disease.name}</Option>)
              }
            </Select>
            </>
            :
            <Select/>
          }
           </Col>
           <Col style={{padding:"10px 0px"}} xs={24} md={8}>
            
           {
            continents?
            <>
              <label style={{display:'block'}}>Select Continent</label>
            <Select value={selectedContinent}  style={{ width: 120 }} onChange={onContinentChange}> 
               {
              continents.map(continent=><Option value={continent.id}>{continent.name}</Option>)
             }
          </Select>
          </>
            :
            <Select/>
          }
           
           </Col>
           <Col style={{padding:"10px 0px"}} xs={24} md={8}>
           {
            filteredCountries.length>0?
            <>
              <label style={{display:'block'}}>Select Country</label>
              <Select value={selectedCountry}  style={{ width: 120 }} onChange={handleCountry}>
                {
                    countries.map((country,index)=><Option key={index} value={country.id}>{country.name}</Option>)
                  }
              </Select>
            </>
            :
            <>
            <label style={{display:'block'}}>Select Country</label>
            <Select style={{width:120}} />
            </>
          }
           
           </Col>
           </Row>
           <Divider orientation="left">Communities</Divider>
           
           <Row style={{padding:30}}>

              {
                
                filteredCommunities.length>0?
                filteredCommunities.map((community,index)=><Col key={index} xs={24} md={6}><RecordCard key={index} disease={selectedDisease} data={community}/></Col>)
                
                :
                <Col xs={24}>
                  <Empty description='Search for a Community'/>
                </Col>
                
              }

             
             
           </Row>
           <Divider orientation="left">Reports</Divider>
            {/* <div style={{display:'flex',flexDirection:'row'}}>
              <div style={{width:300,height:300}}>
                Report List
              </div>
              <div style={{width:300,height:300}}>
                Report Charts
              </div>
            </div> */}
            <div style={{display:'flex',justifyContent:'center',padding:20}}>
            {
                neatSurvey.length>0?
                  
            <Button block type='primary' style={{height:150,fontSize:18,borderRadius:15,}} onClick={()=>{
                
              
              let surveyAnswersMap=neatSurvey.map(survey=>survey.answers)
              let comms=neatSurvey.map(survey=>survey.community);
              let commselect=comms.map(comm=>([comm.Community,Object.values(comm.location)]))
              let selectedFews=surveyAnswersMap.map(sams=>sams.filter(sam=>sam.question.Keyword==='Schistosomiasis Prevalence'||sam.question.Keyword==='Population'||sam.question.Keyword==='Schistosomiasis Control Approaches'))
              let Stakeholders=surveyAnswersMap.map(sams=>sams.filter(sam=>(sam.question.Keyword==='Stakeholders and Activities') ))
              let STanswers=Stakeholders.map(stakeholder=>stakeholder[0]?.answer?stakeholder[0].answer:'')
              let selectfilter=selectedFews.map(selectedFew=>selectedFew.map(sfw=>(sfw.answer))) 

              let stfinal=STanswers.map(STanswer=>STanswer.length>0?

                  STanswer.map(
                    sta=>Object.values(sta)
                  ).join(' | ')
                :'')
              
              let complete=commselect.map((co,index)=>co.concat(selectfilter[index],stfinal[index]))
              
              let reportName=(diseases.filter(disease=>disease.id===selectedDisease)[0]?.name+' ' +'SURVEYS IN'+' ' +countries.filter(country=>country.id===selectedCountry)[0]?.name).toUpperCase()
              /* console.log(complete,Stakeholders,STanswers,stfinal) */
              var head = [['NAME', 'GEO REFERENCE', 'POPULATION', 'PREVALENCE','CONTROL APPROACHES','STAKEHOLDERS AND ACTIVITIES']]
              var body = complete 
              doc.text(reportName,10,10)
              doc.autoTable({ head: head, body: body })
              doc.save('table.pdf')
              
 
            console.log(neatSurvey)
            } }>PRINT REPORT</Button>
                :
                <Empty description='No reports to Print'/>
            }
            </div>
           </div>
        </div>
    );
}
export default RecordCases;
