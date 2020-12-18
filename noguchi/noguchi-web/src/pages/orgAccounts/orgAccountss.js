import React,{useState} from 'react';
import { Button, Card, Tabs,Row,Col,Divider,Modal ,Layout,Form,Space,Input} from 'antd';
import FormInput from '../../components/input'
import  '../../components/components.css';
import TagBox from '../../components/tagBox';
import ForumCard from '../../components/forumCard';
import axios from 'axios'
import MainHeader from '../../components/mainHeader';
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
    const [noUsers,setNoUsers]=useState(true)
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {Header}=Layout;

    const addAdmin=(e)=>{
        
        const user = {
          name: username,
          privateKey: password,
          company:"5fbcf73e612071290c2a3046",
          role:'admin'
        }
        console.log(user)
        axios.post('http://localhost:5002/auth/userSignUp', user)
          .then(
            res =>{
              if(res.data){
                console.log(res.data)
            }}
      
          
          )
          .catch((error) => {
            console.log(error);
          })
      
    }

    return(
        <div style={{minHeight:'100vh',height:'auto',width:'100%',display:'flex',backgroundColor:'#4e54c8', flexDirection:'column'/* ,justifyContent:'center' */,alignItems:'center'}}>
            <MainHeader/>
            <div  style={{height:'80vh',width:'85%',marginTop:'8vh'}}>
                {
                    !noUsers?
                    <h1 style={{fontSize:'max(4vw,30px)',color:'white'}}>ORGANIZATION PROFILES</h1>
                    :
                    null
                }
                
                {noUsers?
                
                <div className='orgAccountsBox' style={{padding:10,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',overflowY:'scroll',height:'70vh'}}>
                        <h1 style={{fontSize:'max(4vw,30px)',color:'white',textAlign:'left',fontFamily: "'Poppins', sans-serif"}}>Create Admin Account</h1>
                        <Card style={{width:'min(500px,80vw)',height:'auto',borderRadius:30}}>
                        <Form layout='vertical' onFinish={addAdmin}>
                            <Space direction='vertical' size={5}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                            <Input 
                            size="large"
                            className='formInput'
                            value={username}
                            placeholder="Enter your username" 
                            onChange={(e)=>setUsername(e.target.value)}
                            />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                            <Input.Password 
                            size="large"
                            className='formInput'
                            value={password}
                            placeholder="Enter your password" 
                            onChange={(e)=>setPassword(e.target.value)}
                           
                            />
                            </Form.Item>
                            <Button 
                            size='large'
                            block
                            style={{height:55,backgroundColor:'#247aeb',color:'white',marginTop:3,borderRadius:8}}
                            htmlType='submit'
                            >
                            Create
                            </Button>
                            </Space>
                            </Form>
                        </Card>
                                              
                </div>
                    :
                    <div className='orgAccountsBox' style={{padding:10,display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',overflowY:'scroll',height:'55vh'}}>
                            <Box admin/> 
                            <Box/>
                            <Box/>
                            <Box/>             
                    </div>
                }
                
            </div> 
        </div>
      
    );
  
}
export default OrgAccountss;