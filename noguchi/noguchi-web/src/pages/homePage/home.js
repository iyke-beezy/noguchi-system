import { Button, Space,List } from 'antd'
import React ,{useState} from 'react'
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
    const [disease, setDisease] = React.useState('schistosomiasis');
    const handleChange = (event) => {
      setDisease(event.target.value);
    
  };
  localStorage.setItem('country','all');
  const [continent, setContinent] = React.useState('africa');
  
  const [country, setCountry] = React.useState('ghana');

    return(
        <div class="parent">
        <header >Header</header>
        <div class="left-side" contenteditable>
        <Paper variant="outlined" style={{padding:15}} >
        <Typography style={{fontweight:'500',fontSize: 17,lineHeight:2,textAlign:'left'}} noWrap>
            Total Confirmed Cases
          </Typography>
          <Typography style={{fontSize: 14,color:'grey',textAlign:'left'}} noWrap>
            Updated 25 mins ago
          </Typography>
          <Typography variant='h3' style={{color:'red',textAlign:'left',lineHeight:1.5,}} noWrap>
            6,092
          </Typography>
          <Badge style={{display:'initial'}} badgeContent={4133} max={9999} color="secondary"  >
          <Typography style={{fontSize: 16,textAlign:'left',marginBottom: 15,}} noWrap>
            Active Cases
          </Typography>
        </Badge>
            <Badge style={{display:'initial'}} badgeContent={1733} max={9999} color="primary"  >
          <Typography style={{ fontSize: 16,   textAlign:'left',marginBottom: 15,}} noWrap>
            Recovered Cases
          </Typography>
            </Badge>
            <Badge style={{display:'initial'}} badgeContent={31} max={9999} color="secondary"  >
            <Typography style={{ fontSize: 16,   marginBottom: 15,textAlign:'left',}} noWrap>
            Fatal Cases
          </Typography>
            </Badge>

        </Paper>
        <div style={{display:'flex',alignSelf:'center',marginTop:15,flexDirection:'column',height:'18vh',justifyContent:'space-between'}}>
        <Select
        variant="outlined"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={disease}
          style={{textAlign:'left',margin:2}}
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
          style={{textAlign:'left',margin:2}}
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
          style={{textAlign:'left',margin:2}}
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
        </div>
        </div>
        <main  contenteditable> <Mappings/></main>
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
        <footer >
            <Button onClick={()=>setHidden(!hidden)}>
                Click To Show
            </Button>
        </footer>
      </div>
    );
    
}
    export default Home;