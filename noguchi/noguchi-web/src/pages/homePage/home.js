import {Modal, Button, Space,List ,Layout,Row,Col, Card,Slider} from 'antd'
import React ,{useState,useEffect} from 'react';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import {Paper,Badge,Select,MenuItem,Typography} from '@material-ui/core';
import axios from 'axios';
import Mappings from '../Map/map'
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
    const [hidden,setHidden]=useState(true);
   const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
    visible:false,
    secondPaneOpen:false,
    thirdPaneOpen:false
  });
  const [continent, setContinent] =useState('AFRICA');
  const [country, setCountry] = useState('GHANA');
  const [continentJson,setContinentJson]=useState({})
  useEffect(()=>{
    async function getContinent(){
        const conArray=await continents
        const conti=continent
        setContinentJson(continents.filter(continent=>continent.name==conti))
        
        /* continentJson=await continents.filter(cont=>cont.name==continent)
       */
    }
    getContinent();
    
   
  },[continent,continentJson])
    const [disease, setDisease] =useState('Schistosomiasis');
    const handleChange = (event) => {
      setDisease(event.target.value);
    
  };
  
 
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

    return(
      <div>
        <Modal
          title="Details"
          visible={state.visible}
          onOk={()=>setState({visible:false})}
          onCancel={()=>setState({visible:false})}
          okText="Done"
          cancelText="Cancel"
        >
          <p>
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
         

          </p>
          <p>
          <div  style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}  >
            <h1 style={{textAlign:'left'}}>Recorded for Accra</h1>
            <span style={{textAlign:'left'}}>20th Nov 2019</span>
            
            <List
            size="large"
            dataSource={data}
            renderItem={dat => <List.Item>
            <h3 style={{textAlign:'left'}}>{dat.question}:<span style={{textAlign:'left',color:'grey'}}>{dat.answer}</span></h3>
            </List.Item>}
          />
    

        </div>
          </p>
         
        </Modal>
        <SlidingPane
        style={{zIndex:100000000,height:'10%'}}
        closeIcon={<div style={{backgroundColor:'red',padding:'2px 8px 3px 8px',borderRadius:30,color:'white',fontWeight:'bold'}}>Close</div>}
        isOpen={state.thirdPaneOpen}
        hideHeader={false}
        from="right"
        width="100%"
        height="10%"
        onRequestClose={() => setState({ thirdPaneOpen: false })}
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
        
      </SlidingPane>
         
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
     {/*  <Row justify='center' style={{margin:5}}>
        <Col xs={10} md={0}>
        <Card>
                <h1 style={{color:'red',fontWeight:'bold'}}>6093</h1>
        </Card>
        </Col> 
      </Row>
      <Row justify='center' gutter={[10,10]}>
            <Col xs={10} md={0}>
            <Card>
               <h1 style={{color:'red'}}>6093</h1>
              </Card>
              </Col>
              <Col xs={10} md={0}>
              <Card>
               <h1 style={{color:'red'}}>6093</h1>
              </Card>
              </Col>
            
        </Row> */}
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
      <SlidingPane
        style={{zIndex:100000,height:'10%'}}
        closeIcon={<div>close</div>}
        isOpen={state.isPaneOpenLeft}
        hideHeader={true}
        from="bottom"
        width="100%"
        height="10%"
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
      >
       
        <div style={{zIndex:10000000000}}>
        <div style={{display:'flex',alignSelf:'center',marginTop:15,flexDirection:'column',height:'20vh',justifyContent:'space-between',alignItems:'center'}}>
        {diseases?
        <Select 
        variant="outlined"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={disease}
          style={{width:'80%',textAlign:'left',margin:2}}
          onChange={handleChange}
        >
          {
            diseases.map(disease=><MenuItem value={disease.name}>{disease.name}</MenuItem>)
          }
        </Select>
          :
          <Select
          variant="outlined"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={disease}
          style={{width:'80%',textAlign:'left',margin:2}}
          onChange={handleChange}
          >
            <MenuItem value={disease}>{disease}</MenuItem>
          </Select>
        }
        {continents?
        <Select 
        variant="outlined"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={continent}
          style={{width:'80%',textAlign:'left',margin:2}}
          onChange={(e)=>setContinent(e.target.value)}
        >
          {
            continents.map(continent=><MenuItem value={continent.name}>{continent.name}</MenuItem>)
          }
        </Select>
          :
          <Select
          variant="outlined"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={continent}
          style={{width:'80%',textAlign:'left',margin:2}}
          onChange={(e)=>setContinent(e.target.value)}
          >
            <MenuItem value={continent}>{continent}</MenuItem>
          </Select>
        }
        {countries?
        <Select 
        variant="outlined"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={country}
          style={{width:'80%',textAlign:'left',margin:2}}
          onChange={(e)=>setCountry(e.target.value)}
        >
          {
            countries.map(country=><MenuItem value={country.name}>{country.name}</MenuItem>)
          }
        </Select>
          :
          <Select
          variant="outlined"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={country}
          style={{width:'80%',textAlign:'left',margin:2}}
          onChange={(e)=>setCountry(e.target.value)}
          >
            <MenuItem value={country}>{country}</MenuItem>
          </Select>
        }
        {/* <Select 
        variant="outlined"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={continent}
          style={{width:'80%',textAlign:'left',margin:2}}
          onChange={(e)=>setContinent(e.target.value)}
        >
          <MenuItem value={'africa'}>Africa</MenuItem>
          <MenuItem value={'europe'}>Europe</MenuItem>
          <MenuItem value={'america'}>America</MenuItem>
        </Select>
        <Select 
        variant="outlined"
        
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={country}
          style={{width:'80%',textAlign:'left',margin:2}}
          onChange={(e)=>{
            setCountry(e.target.value)
            localStorage.setItem('country',e.target.value)
          
          }}
        >
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'ghana'}>Ghana</MenuItem>
          <MenuItem value={'nigeria'}>Nigeria</MenuItem>
          <MenuItem value={'togo'}>Togo</MenuItem>
        </Select>
 */}
       <Button style={{marginTop:"10px"}} onClick={() => setState({ isPaneOpenLeft: !state.isPaneOpenLeft })}>
         Done
       </Button>
        </div>
       
       
          </div>
      </SlidingPane>
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
        <Select 
        variant="outlined"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={disease}
          style={{width:'90%',textAlign:'left',margin:2}}
          onChange={handleChange}
        >
          {
            diseases.map(disease=><MenuItem value={disease.name}>{disease.name}</MenuItem>)
          }
        </Select>
          :
          <Select/>
        }
        {continents?
        <Select 
        variant="outlined"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={continent}
          style={{width:'90%',textAlign:'left',margin:2}}
          onChange={(e)=>setContinent(e.target.value)}
        >
          {
            continents.map(continent=><MenuItem value={continent.name}>{continent.name}</MenuItem>)
          }
        </Select>
          :
          <Select/>
        }
        {countries?
        <Select 
        variant="outlined"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={country}
          style={{width:'90%',textAlign:'left',margin:2}}
          onChange={(e)=>setCountry(e.target.value)}
        >
          {
            countries.map(country=><MenuItem value={country.name}>{country.name}</MenuItem>)
          }
        </Select>
          :
          <Select/>
        }

        <Button style={{width:"80%"}} onClick={()=>setState({secondPaneOpen:!state.secondPaneOpen})}>
                Show Details
            </Button>

        </div>
       
       

        </Col>

        <Col  flex='auto' style={{position:'relative'}}>       
                   <Mappings continentJson={continentJson} country={country}/>  
                  <div style={{position:'absolute',bottom:'0.2%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center', left:1 ,margin:'50px', width:'min(300px,70vw)', backgroundColor:'white',padding:10,borderRadius:15}}>
                    <h4 style={{textAlign:'left',width:'100%'}}>Year</h4>
                    <Slider min={2015} max={2021} tooltipPlacement='bottom'  /* tooltipVisible={true} */ style={{width:'100%',color:'wheat'}} defaultValue={2020}/>
                  </div>  
        </Col>
        <SlidingPane
        style={{zIndex:100000000,height:'10%',position:'absolute'}}
        closeIcon={<div style={{backgroundColor:'red',padding:'2px 8px 3px 8px',borderRadius:30,color:'white',fontWeight:'bold'}}>Close</div>}
        isOpen={state.secondPaneOpen}
        hideHeader={false}
        from="right"
        width="30%"
        height="10%"
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
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
        
      </SlidingPane>
        {/* <Col xs={hidden?0:12} md={hidden ? 0 : 6 }>
        
        </Col> */}

        </Row>


      
            
      </div>
   
    );
    
}
    export default Home;