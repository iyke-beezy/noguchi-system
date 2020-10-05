import React ,{useState}from 'react';
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
    minWidth:150
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

            <Mappings/>
            <Paper style={{position:'absolute',top:60, left:1 ,zIndex:500,margin:'50px',minWidth:'150px', width:'20%', backgroundColor:'white',height:'auto',padding:'10px 6px 24px 6px'}}>
            <h3>Overview</h3>
            <Legend/>
          </Paper>
      </main>
    </div>
  );
}