import React ,{useState,useEffect}from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {Paper,Chip,Avatar,Badge,ListItemSecondaryAction,Select,MenuItem,FormControl,InputLabel,FormHelperText, Button} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Mappings from '../Map/map';
import Legend from '../../controls/legend/legend';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  badge:{
    display:'initial'
  },
  title: {
      fontweight:'500',
    fontSize: 17,
    lineHeight:2,
    textAlign:'left'
  },
  bigText: {
    color:'red',
    textAlign:'left',
    lineHeight:1.5,
  },
  pos: {
    fontSize: 14,
    color:'grey',
    textAlign:'left'
  },
  pos2: {
    fontSize: 14,
    color:'grey',
    textAlign:'left'
  },
  
  cases: {
    fontSize: 16,
    textAlign:'left',
    marginBottom: 15,
  },
  paper:{
    padding:15
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    height:'8vh',
    backgroundColor:'white',
    borderBottom:'2px solid whitesmoke'
  },
  drawer: {
    width: drawerWidth,
    minWidth:100
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: {
    height:'8vh'
  },
  content: {
    flexGrow: 1,
    width: `calc(100% - ${drawerWidth}px)`,
    height:'92vh',
    backgroundColor: theme.palette.background.default,
    position:'relative'
   
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  lists:{
      /* height:'30vh', */
      overflowY:'scroll'
  }
}));

export default function HomePage() {

  const classes = useStyles();
  const [disease, setDisease] = React.useState('schistosomiasis');
  const handleChange = (event) => {
    setDisease(event.target.value);
  
};
localStorage.setItem('country','all');
const [continent, setContinent] = React.useState('africa');

const [country, setCountry] = React.useState('all');
useEffect(()=>{
 re
  
},[])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar elevation={0}  position="fixed" className={classes.appBar}>
        <Toolbar style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Disease</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={disease}
          
          onChange={handleChange}
        >
          <MenuItem value={'schistosomiasis'}>Schistosomiasis</MenuItem>
          <MenuItem value={'malaria'}>Malaria</MenuItem>
          <MenuItem value={'cholera'}>Cholera</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Continent</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={continent}
          
          onChange={(e)=>setContinent(e.target.value)}
        >
          <MenuItem value={'africa'}>Africa</MenuItem>
          <MenuItem value={'europe'}>Europe</MenuItem>
          <MenuItem value={'america'}>America</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl} hiddenLabel={true}>
        <InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
        <Select
        
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={country}
          
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
      </FormControl>
      <Button variant="contained" color='primary' disableElevation onClick={
      ()=>{
        window.location.href='/login';
      }}>Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        {/* <div className={classes.toolbar} /> */}
        <Paper variant="outlined" className={classes.paper} >
        <Typography className={classes.title} noWrap>
            Total Confirmed Cases
          </Typography>
          <Typography className={classes.pos} noWrap>
            Updated 25 mins ago
          </Typography>
          <Typography variant='h3' className={classes.bigText} noWrap>
            6,092
          </Typography>
          <Badge badgeContent={4133} max={9999} color="secondary" className={classes.badge} >
          <Typography className={classes.cases} noWrap>
            Active Cases
          </Typography>
            </Badge>
            <Badge badgeContent={1733} max={9999} color="primary" className={classes.badge} >
          <Typography className={classes.cases} noWrap>
            Recovered Cases
          </Typography>
            </Badge>
            <Badge badgeContent={31} max={9999} color="secondary" className={classes.badge} >
            <Typography className={classes.cases} noWrap>
            Fatal Cases
          </Typography>
            </Badge>

        </Paper>
        
        <ListItem button><ListItemText primary={'Country'} secondary={'Number of Cases: 6092'} /></ListItem>
        <Divider />
        <List className={classes.lists}>
          {['Greater Accra Region','Eastern Region', 'Ashanti Region','Central Region', 'Volta Region', 'Upper East Region','Upper West Region','North East Region','Northern Region','Savannah Region','Bono Region','Oti Region','Ahafo Region','Western North Region','Western Region'].map((text, index) => (
              <>
           <ListItem button key={text}>
              <ListItemText primary={text} />
              <ListItemSecondaryAction>
              <Typography className={classes.pos2} noWrap>
            1089
          </Typography>
        </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
            </>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            <div style={{display:'flex',flexDirection:'row'}}>
            <Mappings/>
            <div style={{width:'400px',backgroundColor:'white'}}>

            </div>
            </div>
            
           
      </main>
    </div>
  );
}