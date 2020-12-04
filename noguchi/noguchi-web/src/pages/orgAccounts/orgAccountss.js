import React,{useState} from 'react';
import { Button, Card, Tabs,Row,Col,Divider,Modal ,Layout} from 'antd';
import FormInput from '../../components/input'
import  '../../components/components.css';
import TagBox from '../../components/tagBox';
import ForumCard from '../../components/forumCard';
const {TabPane}=Tabs;
const style = { background: '#0092ff', padding: '8px 0',height:'180px', marginBottom:'10px',
color:'white',display:'flex',flexDirection:'Column',alignItems:'flex-start',fontSize:'15px' };
const adminStyle = { background: '#0092ff', padding: '8px 0',height:'180px' };
const loginStyle={
    backgroundColor:"red"
}

const Box=(props)=>{
    const [modalState,setModalState]=useState(false);
    return(
        <>
        {
        props.admin?
        <>
         <div style={{height:180,border:'4px solid #ff9633',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin:20,cursor:'pointer'}} onClick={() => setModalState(true)} onDoubleClick={()=>setModalState(false)}>
          <div hidden={!modalState} style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-between',padding:5,height:'50%'}}>
          <FormInput name="key" type="text" placeholder="Enter Admin Key"  required style={{width:'95%'}} />
          <Button key="submit" type="primary"  onClick={() => {
                window.location.href='/orgadmin';
                
                }}>
                Enter
          </Button>
          </div>
        </div>
        
        </>
    :
       <>
        <div style={{height:180,border:'2px solid #adadad',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin:20,cursor:'pointer'}} onClick={() => setModalState(true)}  onDoubleClick={()=>setModalState(false)}>
        <div hidden={!modalState} style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-between',padding:5,height:'50%'}}>
          <FormInput name="key" type="text" placeholder="Enter Profile Key"  required style={{width:'95%'}} />
          <Button key="submit" type="primary"  onClick={() => {
                window.location.href='/other';
                
                }}>
                Enter
          </Button>
          </div>
        </div>
         
       </>     
        }
       
        </>
    );
}
const image=require('../../assets/whiteGhana.png');
const OrgAccountss=()=> {
    const {Header}=Layout;
    return(
        <div style={{minHeight:'100vh',height:'auto',width:'100%',display:'flex',backgroundColor:'#4e54c8', flexDirection:'column'/* ,justifyContent:'center' */,alignItems:'center'}}>
            <Header style={{backgroundColor:"white",borderBottom:"1px solid whitesmoke",width:'100%'}}>Header</Header>
            <div  style={{height:'60vh',width:'85%',paddingTop:'5vh'}}>
            <h1 style={{fontSize:'max(4vw,30px)',color:'white'}}>ORGANIZATION PROFILES</h1>
            <div className='orgAccountsBox' style={{padding:10,display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',overflowY:'scroll',height:'55vh'}}>

                <Box admin/>
                <Box/>
                <Box/>
                <Box/>
                
            
          
                                
           </div>
        </div> 
        </div>
      
    );
  
}
export default OrgAccountss;