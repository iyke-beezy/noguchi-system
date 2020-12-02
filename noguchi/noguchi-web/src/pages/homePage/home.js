import {Modal, Button, Space,List ,Layout,Row,Col} from 'antd'
import React ,{useState} from 'react';
import ContainerDimensions from 'react-container-dimensions';
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import {Paper,Chip,Avatar,Badge,ListItemSecondaryAction,Select,MenuItem,FormControl,InputLabel,FormHelperText,Typography} from '@material-ui/core';

import Mappings from '../Map/map'
import './home.css'

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
    const [hidden,setHidden]=useState(true);
  //  const [map,setMap]=useState(24);
   // const [right,setRight]=useState(0);
   const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
    visible:false
  });
    const [disease, setDisease] = React.useState('schistosomiasis');
    const handleChange = (event) => {
      setDisease(event.target.value);
    
  };
  localStorage.setItem('country','all');
  const [continent, setContinent] = React.useState('africa');
  
  const [country, setCountry] = React.useState('ghana');
  const {Header,Footer}=Layout;
  
 

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
         
      <Row style={{height:"5vh"}}>
      <Col xs={24}><h3>Header</h3></Col>
      </Row>
      <Row style={{padding:"10px 0"}} sm={0}>

      <Col xs={18} md={0} style={{flex:"0 0 64%",paddingRight:"5px"}}>
       <Button onClick={() => setState({ isPaneOpenLeft: !state.isPaneOpenLeft })} style={{fontSize:"12px"}}>
         Change Disease/Location
       </Button>
      
      </Col>
      <Col xs={6} md={0}>
      <Button onClick={()=>setState({visible:true})} style={{fontSize:"12px"}}>
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
        <div style={{display:'flex',alignSelf:'center',marginTop:15,flexDirection:'column',height:'18vh',justifyContent:'space-between',alignItems:'center'}}>
        <Select 
        variant="outlined"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={disease}
          style={{width:'80%',textAlign:'left',margin:2}}
          onChange={handleChange}
        >
          <MenuItem value={'schistosomiasis'}>Schistosomiasis</MenuItem>
          <MenuItem value={'malaria'}>Malaria</MenuItem>
          <MenuItem value={'cholera'}>Cholera</MenuItem>
        </Select>
        <Select 
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

       <Button style={{marginTop:"10px"}} onClick={() => setState({ isPaneOpenLeft: !state.isPaneOpenLeft })}>
         Done
       </Button>
        </div>
       
       
          </div>
      </SlidingPane>
    
    </Row>
      
     
      <Row style={{height:'90vh'}}>
        <Col xs={0} md={6}>
      
     
        <Paper variant="outlined" style={{padding:15}} >
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
        <Select 
        variant="outlined"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={disease}
          style={{width:'80%',textAlign:'left',margin:2}}
          onChange={handleChange}
        >
          <MenuItem value={'schistosomiasis'}>Schistosomiasis</MenuItem>
          <MenuItem value={'malaria'}>Malaria</MenuItem>
          <MenuItem value={'cholera'}>Cholera</MenuItem>
        </Select>
        <Select 
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

        <Button style={{width:"80%",height:'100%'}} onClick={()=>setHidden(!hidden)}>
                Show Details
            </Button>
        </div>
       
       

        </Col>

        <Col xs={hidden?24:12} md={hidden ? 18 : 12}>
                   <ContainerDimensions>
      
                <Mappings/>  
            
        
      </ContainerDimensions>
        
        
   
        </Col>

        <Col xs={hidden?0:12} md={hidden ? 0 : 6 }>
        <div class="right-side" style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}} contenteditable hidden={hidden} >
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
        </Col>

        </Row>


      
            
      </div>
   
    );
    
}
    export default Home;