import React,{useState} from 'react';
import { Button, Card, Tabs,Row,Col,Divider,Modal } from 'antd';
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
         <div style={{height:180,border:'4px solid #ff9633',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin:20,cursor:'pointer'}} onClick={() => setModalState(true)}>
          
        </div>
        <Modal
        title='Enter Account Key'
        style={{ top: 100 }}
        width={500}
        visible={modalState}
        onOk={() => setModalState(false)}
        onCancel={() => setModalState(false)}
        footer={[
            
            <Button key="submit" type="primary"  onClick={() => {
                setModalState(false);
                window.location.href='/orgadmin';
                
                }}>
                Enter
          </Button>
          ]}
      >
                    <FormInput
                                         
                     name="key"
                     type="text"
                
                  placeholder="Enter Key"
                
                required
               className="formInput"
                   />

      </Modal>
        
        </>
    :
       <>
        <div style={{height:180,border:'2px solid #adadad',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin:20,cursor:'pointer'}} onClick={() => setModalState(true)}>
          
        </div>
        <Modal
        title='Enter Account Key'
        style={{ top: 100 }}
        width={500}
        visible={modalState}
        onOk={() => setModalState(false)}
        onCancel={() => setModalState(false)}
        footer={[
            
            <Button key="submit" type="primary"  onClick={() => {
                setModalState(false);
                window.location.href='/profile';
                
                }}>
                Enter
          </Button>
          ]}
      >
                    <FormInput
                                         
                     name="key"
                     type="text"
                
                  placeholder="Enter Key"
                
                required
               className="formInput"
                                  />

      </Modal>
        
       </>     
        }
       
        </>
    );
}
const image=require('../../assets/whiteGhana.png');
const OrgAccountss=()=> {
    
    return(
        <div style={{minHeight:'100vh',display:'flex',backgroundColor:'#4e54c8', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <div  style={{height:'60vh',width:'85%'}}>
            <h1 style={{fontSize:'4vw',color:'white'}}>ORGANIZATION PROFILES</h1>
            <div style={{padding:10,display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',overflowY:'scroll',height:'55vh'}}>

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