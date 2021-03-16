import {Modal, Button, Space,List ,Layout,Row,Col, Card,Slider,Drawer} from 'antd'
import React ,{useState,useEffect} from 'react';
import {Paper,Badge,Select,MenuItem,Typography,FormControl,InputLabel} from '@material-ui/core';
import axios from 'axios';
import Mappings, { Mapp } from '../Map/map'
import './home.css'
import MainHeader from '../../components/mainHeader';

const data=[
    {
        question:'Name Of Comunity',
        answer:'Accra',
     
    },
    {
        question:'Community Location',
        answer:'1.00,3.560',
       
    },
    {
        question:'Population',
        answer:'10,000',
    },
]


const Home=()=>{
  const [markers,setMarkers]=useState([])
  const [diseases,setDiseases]=useState([])
    useEffect(() => {
      async function fetchDiseases(){
        await axios.get('http://localhost:1337/diseases')
        .then(
          res =>{
            if(res.data){
              setDiseases(res.data)
          }} )
        .catch((error) => {
          console.log(error);
        })

      }
      fetchDiseases();
        
    },[]);
    const [surveys,setSurveys]=useState([])
    useEffect(() => {
      async function fetchSurveys(){
        await axios.get('http://localhost:1337/surveys')
        .then(
          res =>{
            if(res.data){

              setSurveys(res.data.filter(dat=>dat.evaluated===true))
          }} )
        .catch((error) => {
          console.log(error);
        })

      }
      fetchSurveys();
        
    },[]);
    const [continents, setContinents] =useState([]);
    useEffect(() => {
      async function fetchContinents(){
        await axios.get('http://localhost:1337/continents')
        .then(
          res =>{
            if(res.data){
              setContinents(res.data)
          }} )
        .catch((error) => {
          console.log(error);
        })
      }
      fetchContinents();
      
  },[]);
  
    const [countries, setCountries] =useState([]);
    useEffect(() => {
      async function fetchCountries(){
        await axios.get('http://localhost:1337/countries')
        .then(
          res =>{
            if(res.data){
              setCountries(res.data)
            
          }} )
        .catch((error) => {
          console.log(error);
        })
      }

      fetchCountries();
      
  },[]);
  const [regions, setRegions] =useState([]);
    useEffect(() => {
      async function fetchRegions(){
        await axios.get('http://localhost:1337/countries')
        .then(
          res =>{
            if(res.data){
              setRegions(res.data)
            
          }} )
        .catch((error) => {
          console.log(error);
        })
      }

      fetchRegions();
      
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
    const [hidden,setHidden]=useState(true);
   const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
    visible:false,
    secondPaneOpen:false,
    thirdPaneOpen:false
  });
  const [continent, setContinent] =useState('');
  const [center, setCenter] =useState({});
  const [zoom, setZoom] =useState();
  const [country, setCountry] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [year,setYear]=useState(2020)
    const [disease, setDisease] =useState(``);
    const handleChange = (event) => {
      setDisease(event.target.value);
      let byYears;
      
      if(country!=''){
        let count=countries.filter(country=>country.name===country);
        let rejiin=count[0]?.regions
        let id=rejiin?.map(rej=>rej.id)
        let dis=id?districts.filter(district=>id.includes(district.region.id)):[]
        let comms=dis?.map(di=>di.communities)
      if(markers.length>0){
        let oldMarkers=markers;
        if(comms.length>0){
          let commIds=comms[0]?.map(comm=>comm.id)
          let byComms=oldMarkers.filter(oldMarker=>commIds.includes(oldMarkers.community.id))
          byYears=byComms.filter(byComm=>byComm.ActualSurveyDate.includes(year))
          setMarkers(byYears.filter(byYear=>byYear.disease.id==event.target.value))
        }else{
          setMarkers([])
        }
        
      }else{
        if(comms.length>0){
          let commIds=comms[0]?.map(comm=>comm.id)
          let byComms=surveys.filter(survey=>commIds.includes(survey.community.id))
          byYears=byComms.filter(byComm=>byComm.ActualSurveyDate.includes(year))
          console.log(byYears)
          setMarkers(byYears.filter(byYear=>byYear.disease.id==event.target.value))
        }else{
          setMarkers([])
        }
      }
    }else{
      setMarkers([])
    }
      
    
  };
  const handleContinent = (event) => {
    setContinent(event.target.value);
    localStorage.removeItem('currentContinent')
    localStorage.setItem('currentContinent',JSON.stringify(continents.filter(continent=>continent.name==event.target.value)))
    let contt=continents.filter(continent=>continent.name==event.target.value)
    setFilteredCountries(countries.filter(country=>country.continent.name===event.target.value))
    let cent=contt[0]?.center
    setCountry('')
    setCenter(cent)
    setZoom(contt[0]?.zoom)
    setMarkers([])

};
const handleCountry=(event)=>{
    setCountry(event.target.value);
    let count=countries.filter(country=>country.name===event.target.value);
    setCenter(count[0]?.center)
    setZoom(count[0]?.zoom)
    if(disease){
      let yearSurveys=surveys.filter(survey=>survey.disease.id==disease)
      let rejiin=count[0]?.regions
        
      let id=rejiin.map(rej=>rej.id)
      let dis=districts.filter(district=>id.includes(district.region.id))
      
      let comms=dis.map(di=>di.communities)
      
      if(comms.length>0){
        let commIds=comms[0]?.map(comm=>comm.id)
        let byCommIds=yearSurveys?.filter(yearSurvey=>commIds.includes(yearSurvey.community.id))
      console.log(byCommIds)
      setMarkers(byCommIds?.filter(byCommId=>byCommId.ActualSurveyDate.includes(year)))
      }else{
        setMarkers([])
      }
      
    }
    

}

 
  const {Header,Footer}=Layout;

  
 
  const marks = {
    2015: '2015',
    2016: '2016',
    2017: '2017',
    2018:'2018',
    2019:'2019',
    2020:'2020',
    2021:'2021'

  };
  console.log(markers)

    return(
      <div>
        <Drawer
        title="Details"
        placement="right"
        width='90%'
        closable={true}
        onClose={() => setState({ thirdPaneOpen: false })}
        visible={state.thirdPaneOpen}
      >
        <div style={{zIndex:100000000000,display:'flex',flexDirection:'column',alignItems:'flex-start'}} contenteditable >
            <h1 style={{textAlign:'left'}}>Recorded for Accra</h1>
            <span style={{textAlign:'left'}}>20th Nov 2019</span>
            
            <List
            size="large"
            style={{width:'100%'}}
            dataSource={data}
            renderItem={dat => <List.Item >
            <h3 style={{textAlign:'left'}}>{dat.question}:<span style={{textAlign:'left',color:'grey'}}>{dat.answer}</span></h3>
            </List.Item>}
          />
    

        </div>

      </Drawer>
         
      <Row style={{height:"5vh"}}>
      <Col xs={24}><MainHeader/></Col>
      </Row>
      <Col xs={24} md={0} style={{marginTop:35}}>
      <Row  style={{height:'20vh'}} justify='center'  >
        
        <Col xs={10} md={0} style={{height:'100%'}} >
        <Card hoverable style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <b>Total Cases</b>
                <h1 style={{color:'red',fontWeight:'bold'}}>6093</h1>
        </Card>
        </Col>
        <Col xs={10} md={0} style={{height:'100%'}}>
          <Row style={{height:'50%'}}>
              <Col xs={24} md={0} style={{height:'100%'}}>
                <Card hoverable style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <span>Active</span>
                 <h3 style={{color:'red'}}>5093</h3>
                </Card>
              </Col>
          </Row>
          <Row style={{height:'50%'}}>
            <Col xs={24} md={0} style={{height:'100%'}}>
              <Card hoverable style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
              <span>Recovered</span>
                <h3 style={{color:'seagreen'}}>1000</h3>
              </Card>
            </Col>
          </Row>
        </Col>
       
      </Row>
      </Col>
    
      <Row style={{padding:"10px 0"}} sm={0}>
      <Col xs={18} md={0} style={{flex:"0 0 64%",paddingRight:"5px"}}>
       <Button onClick={() => setState({ isPaneOpenLeft: !state.isPaneOpenLeft })} style={{fontSize:"12px"}}>
         Change Disease/Location
       </Button>
      
      </Col>
      <Col xs={6} md={0}>
      <Button onClick={()=>setState({thirdPaneOpen:!state.thirdPaneOpen})} style={{fontSize:"12px"}}>
         View Details 
       </Button>
      </Col>
      <Drawer
      title="Change Disease/Location"
      placement="bottom"
      height='50%'
      closable={true}
      onClose={() => setState({ isPaneOpenLeft: false })}
      visible={state.isPaneOpenLeft}
      >
       
        <div style={{zIndex:10000000000}}>
        <div style={{display:'flex',alignSelf:'center',marginTop:15,flexDirection:'column',height:'20vh',justifyContent:'space-between',alignItems:'center'}}>
        {diseases?
        <FormControl style={{width:'80%',margin:2}}>
        <InputLabel id="demo-simple-select-autowidth-label" style={{paddingLeft:5}}>Select Disease</InputLabel>
        <Select 
        variant="outlined"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label='Select Disease'
        
          value={disease}
          onChange={handleChange}
        >
          {
            diseases.map((disease,index)=><MenuItem key={index} value={disease.id}>{disease.name}</MenuItem>)
          }
        </Select>
        </FormControl>
          :
          <FormControl style={{width:'80%',margin:2}}>
            <InputLabel id="demo-simple-select-autowidth-label" style={{paddingLeft:5}}>Select Disease</InputLabel>
                 <Select/>
          </FormControl>
        }
        {continents?
         <FormControl style={{width:'80%',margin:2}}>
         <InputLabel id="demo-simple-select-autowidth-label" style={{paddingLeft:5}}>Select Continent</InputLabel>
        <Select 
        variant="outlined"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label='Select Continent'
     
          value={continent}
          onChange={handleContinent}
        >
          {
            continents.map((continent,index)=><MenuItem key={index} value={continent.name}>{continent.name}</MenuItem>)
          }
        </Select>
        </FormControl>
          :
          <FormControl style={{width:'80%',margin:2}}>
            <InputLabel id="demo-simple-select-autowidth-label" style={{paddingLeft:5}}>Select Continent</InputLabel>
                 <Select/>
          </FormControl>
        }
        {filteredCountries?
        <FormControl style={{width:'80%',margin:2}}>
        <InputLabel id="demo-simple-select-autowidth-label" style={{paddingLeft:5}}>Select Country</InputLabel>
        <Select 
        variant="outlined"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={country}
          
          onChange={handleCountry}
        >
          {
            filteredCountries.map((filteredCountry,index)=><MenuItem key={index} value={filteredCountry.name}>{filteredCountry.name}</MenuItem>)
          }
        </Select>
        </FormControl>
          :
          <FormControl style={{width:'80%',margin:2}}>
            <InputLabel id="demo-simple-select-autowidth-label" style={{paddingLeft:5}}>Select Country</InputLabel>
                 <Select/>
          </FormControl>
         
        }
       <Button style={{marginTop:"10px"}} onClick={() => setState({ isPaneOpenLeft: !state.isPaneOpenLeft })}>
         Done
       </Button>
        </div>
       </div>
      </Drawer>
      </Row>
   
      
     
      <Row style={{height:'90vh'}}>
        <Col xs={0} md={6} flex='250px'>
      
     
        <Paper variant="outlined"  style={{padding:15,margin:10}} >
        <Typography style={{fontweight:'500',fontSize: 17,lineHeight:2,textAlign:'left'}} noWrap>
            Total Confirmed Cases
          </Typography>
          <Typography style={{fontSize: 12,color:'grey',textAlign:'left'}} noWrap>
            Updated 25 mins ago
          </Typography>
          <Typography variant='h3' style={{color:'red',textAlign:'left',lineHeight:1.5,}} noWrap>
            6,092
          </Typography>

       <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'80%',marginBottom:"10px"}}>
      
          <Typography style={{fontSize: 13,textAlign:'left'}} noWrap>
            Active Cases
          </Typography>
          <Badge style={{marginTop:"10px"}}  badgeContent={4133} max={9999} color="secondary"  >
          </Badge>
         </div>  
         <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'80%',marginBottom:"10px"}}>
      
          <Typography style={{fontSize: 13,textAlign:'left'}} noWrap>
            Recorded Cases
          </Typography>
          <Badge style={{marginTop:"10px"}}  badgeContent={1733} max={9999} color="primary"  >
          </Badge>
         </div>  
         <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'80%',marginBottom:"10px"}}>
      
          <Typography style={{fontSize: 13,textAlign:'left'}} noWrap>
            Fatal Cases
          </Typography>
          <Badge style={{marginTop:"10px"}}  badgeContent={31} max={9999} color="secondary"  >
          </Badge>
         </div>  
         

        </Paper>
      
       
        <div style={{display:'flex',alignSelf:'center',marginTop:15,flexDirection:'column',height:'18vh',justifyContent:'space-between',alignItems:'center'}}>
        {diseases?
        <FormControl style={{width:'90%',margin:2}}>
        <InputLabel id="demo-simple-select-autowidth-label" style={{paddingLeft:5}}>Select Disease</InputLabel>
        <Select 
        variant="outlined"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label='Select Disease'
        
          value={disease}
          onChange={handleChange}
        >
          {
            diseases.map((disease,index)=><MenuItem key={index} value={disease.id}>{disease.name}</MenuItem>)
          }
        </Select>
        </FormControl>
          :
          <FormControl style={{width:'90%',margin:2}}>
            <InputLabel id="demo-simple-select-autowidth-label" style={{paddingLeft:5}}>Select Disease</InputLabel>
                 <Select/>
          </FormControl>
        }
        {continents?
         <FormControl style={{width:'90%',margin:2}}>
         <InputLabel id="demo-simple-select-autowidth-label" style={{paddingLeft:5}}>Select Continent</InputLabel>
        <Select 
        variant="outlined"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label='Select Continent'
     
          value={continent}
          onChange={handleContinent}
        >
          {
            continents.map((continent,index)=><MenuItem key={index} value={continent.name}>{continent.name}</MenuItem>)
          }
        </Select>
        </FormControl>
          :
          <FormControl style={{width:'90%',margin:2}}>
            <InputLabel id="demo-simple-select-autowidth-label" style={{paddingLeft:5}}>Select Continent</InputLabel>
                 <Select/>
          </FormControl>
        }
        {filteredCountries?
        <FormControl style={{width:'90%',margin:2}}>
        <InputLabel id="demo-simple-select-autowidth-label" style={{paddingLeft:5}}>Select Country</InputLabel>
        <Select 
        variant="outlined"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={country}
          
          onChange={handleCountry}
        >
          {
            filteredCountries.map((filteredCountry,index)=><MenuItem key={index} value={filteredCountry.name}>{filteredCountry.name}</MenuItem>)
          }
        </Select>
        </FormControl>
          :
          <FormControl style={{width:'90%',margin:2}}>
            <InputLabel id="demo-simple-select-autowidth-label" style={{paddingLeft:5}}>Select Country</InputLabel>
                 <Select/>
          </FormControl>
         
        }

        

        </div>
       
       

        </Col>

        <Col  flex='auto' style={{position:'relative'}}>       
                   <Mapp center={center} markers={markers} zoom={zoom} onClick={()=>setState({secondPaneOpen:!state.secondPaneOpen})}/>  
                  <div style={{position:'absolute',bottom:'0.2%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center', left:1 ,margin:'50px', width:'min(300px,70vw)', backgroundColor:'white',padding:10,borderRadius:15}}>
                    <h4 style={{textAlign:'left',width:'100%'}}>Year</h4>
                    <Slider min={2015} max={2021} 
                    onChange={(value)=>{
                      setYear(value);
                      if(country!=''){
                        let count=countries.filter(countr=>countr.name===country);
                        let rejiin=count[0]?.regions
                        let id=rejiin?.map(rej=>rej.id)
                        let dis=id?districts.filter(district=>id.includes(district.region.id)):[]
                        let comms=dis?.map(di=>di.communities)
                        
                        if(comms.length>0){
                          let commIds=comms[0]?.map(comm=>comm.id)
                          let byCommIds=surveys.filter(survey=>commIds.includes(survey.community.id))
                          if(disease){
                            let yearSurveys=byCommIds.filter(byCommId=>byCommId.disease.id==disease)
                            setMarkers(yearSurveys?.filter(yearSurvey=>yearSurvey.ActualSurveyDate.includes(value)))
                          }
                        }else{
                          setMarkers([])
                        }
                        }else{
                          setMarkers([])
                        }
                        
                      
                      
                      
                      
                      }} tooltipPlacement='bottom' tooltipVisible={true} style={{width:'100%',color:'wheat'}} defaultValue={2020}/>
                  </div>  
        </Col>
        
        

        </Row>


      
            
      </div>
   
    );
    
}
    export default Home;