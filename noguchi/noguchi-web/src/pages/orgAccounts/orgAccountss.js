import React,{useState} from 'react';
import { Button, Card, Tabs,Layout,Form,Space,Input,Result} from 'antd';
import FormInput from '../../components/input'
import  '../../components/components.css';
<<<<<<< HEAD
<<<<<<< HEAD
import { UserOutlined,CloseOutlined } from "@ant-design/icons";
import Avatar from 'antd/lib/avatar/avatar';
// import TagBox from '../../components/tagBox';
// import ForumCard from '../../components/forumCard';
// import axios from 'axios';
// import firebase from '../../utils/api';
// import qs from 'qs';
// import MainHeader from '../../components/mainHeader';
// const {TabPane}=Tabs;
// const style = { background: '#0092ff', padding: '8px 0',height:'180px', marginBottom:'10px',
// color:'white',display:'flex',flexDirection:'Column',alignItems:'flex-start',fontSize:'15px' };
// const adminStyle = { background: '#0092ff', padding: '8px 0',height:'180px' };
// const loginStyle={
//     backgroundColor:"red"
// }
=======
import axios from 'axios'
import qs from 'qs';
import MainHeader from '../../components/mainHeader';
const style = { background: '#0092ff', padding: '8px 0',height:'180px', marginBottom:'10px',
color:'white',display:'flex',flexDirection:'Column',alignItems:'flex-start',fontSize:'15px' };
>>>>>>> parent of 5b2abbb (reverted)
=======
import TagBox from '../../components/tagBox';
import ForumCard from '../../components/forumCard';
import axios from 'axios';
import firebase from '../../api';
import qs from 'qs';
import MainHeader from '../../components/mainHeader';
const {TabPane}=Tabs;
const style = { background: '#0092ff', padding: '8px 0',height:'180px', marginBottom:'10px',
color:'white',display:'flex',flexDirection:'Column',alignItems:'flex-start',fontSize:'15px' };
const adminStyle = { background: '#0092ff', padding: '8px 0',height:'180px' };
const loginStyle={
    backgroundColor:"red"
}
>>>>>>> parent of a7f87c5 (doing things)


const Box=(props)=>{
    const [modalState,setModalState]=useState(false);
    const [key,setKey]=useState('')
    return(
        <>
        {
        props.admin?
        <>
         <div style={{height:180,border:'4px solid #ff9633',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin:20,cursor:'pointer'}} onClick={() => setModalState(true)} onDoubleClick={()=>setModalState(false)}>
          <div hidden={modalState}>
                <h3>Admin</h3>
                <span>Click to Login</span>
          </div>
          <div hidden={!modalState} style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-between',padding:5,height:'50%'}}>
          <FormInput value={key} onChange={(e)=>setKey(e.target.value)} name="key" type="text" placeholder="Enter Admin Key"  required style={{width:'95%'}} />
          <Button key="submit" type="primary"  onClick={() => {
                axios.get('http://localhost:1337/org-admins',
                {
                  params:{
                    username:props.data.username,
                    key:key
                  },
                  paramsSerializer:(params)=>qs.stringify(params,{arrayFormat:'repeat'})
                }
              )
                    .then(response => {
                        localStorage.setItem('org_admin',JSON.stringify(response.data))
                        window.location.href='/orgAdmin'
                    }
                    )
                    .catch((error) => {
                      console.log(error);
                    })
                
            
                
                }}>
                Enter
          </Button>
          </div>
        </div>
        
        </>
    :
       <>
        <div style={{height:180,border:'2px solid #adadad',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin:20,cursor:'pointer'}} onClick={() => setModalState(true)}  onDoubleClick={()=>setModalState(false)}>
        <div hidden={modalState}>
                <h3>{props.data.username}</h3>
                <span>Click to Login</span>
          </div>
        <div hidden={!modalState} style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-between',padding:5,height:'50%'}}>
          <FormInput value={key} onChange={(e)=>setKey(e.target.value)} name="key" type="text" placeholder="Enter Profile Key"  required style={{width:'95%'}} />
          <Button key="submit" type="primary"  onClick={() => {
              axios.get('http://localhost:1337/org-users',
              {
                params:{
                  username:props.data.username,
                  key:key
                },
                paramsSerializer:(params)=>qs.stringify(params,{arrayFormat:'repeat'})
              }
            )
                  .then(response => {
                      localStorage.setItem('current_user',JSON.stringify(response.data))
                      window.location.href='/profile'
                  }
                  )
                  .catch((error) => {
                    console.log(error);
                  })
              
               
                
                }}>
                Enter
          </Button>
          </div>
        </div>
         
       </>     
        }
       
<<<<<<< HEAD
<<<<<<< HEAD
//         </>
//     );
// }
// const image=require('../../assets/whiteGhana.png');
// const OrgAccountss=()=> {
//     const [noUsers,setNoUsers]=useState(true)
//     const [username,setUsername]=useState('')
//     const [password,setPassword]=useState('')
//     const {Header}=Layout;
=======
        </>
    );
}
const OrgAccountss=()=> {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {Header}=Layout;
>>>>>>> parent of 5b2abbb (reverted)
=======
        </>
    );
}
const image=require('../../assets/whiteGhana.png');
const OrgAccountss=()=> {
    const [noUsers,setNoUsers]=useState(true)
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {Header}=Layout;
>>>>>>> parent of a7f87c5 (doing things)

    const selectedOrg=localStorage.getItem('selectedOrg');
    let selectedAdmin=selectedOrg?.org_admin;
    let selectedAccounts
    let accounts=[]
    if(selectedAdmin){
        selectedAccounts=selectedOrg.org_users
        accounts=[selectedAdmin,...selectedAccounts]
    }
    
   
    const addAdmin=(e)=>{
      console.log(selectedOrg)
     firebase.firestore().collection('organisations').doc(selectedOrg).update({
       admin:{
         username:username,
         password:password,
       }
     }).then(()=>{
       window.location.href='/orgAdmin'
     })
      
      
        /* const user = {
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
       */
    }
    let cur_org=localStorage.getItem('selectedOrg')
    return(
        <div style={{minHeight:'100vh',height:'auto',width:'100%',display:'flex',backgroundColor:'#4e54c8', flexDirection:'column'/* ,justifyContent:'center' */,alignItems:'center'}}>
            <MainHeader/>
            {
                cur_org?
                <>
            <div  style={{height:'80vh',width:'85%',marginTop:'10vh'}}>
                {
                    selectedAdmin?
                    <h1 style={{fontSize:'max(4vw,30px)',color:'white'}}>ORGANIZATION PROFILES</h1>
                    :
                    null
                }
                
                {!selectedAdmin?
                
                <div className='orgAccountsBox' style={{padding:10,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',overflowY:'scroll',height:'70vh'}}>
                        <h1 style={{fontSize:'max(4vw,30px)',color:'white',textAlign:'left',fontFamily: "'Poppins', sans-serif"}}>Create Admin Account</h1>
                        <Card style={{width:'min(500px,80vw)',height:'auto',borderRadius:30}}>
                        <Form layout='vertical' onFinish={addAdmin}>
                            <Space direction='vertical' size={5}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input admin name!' }]}
                            >
                            <Input 
                            size="large"
                            className='formInput'
                            value={username}
                            placeholder="Enter Admin name" 
                            onChange={(e)=>setUsername(e.target.value)}
                            />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input admin password!' }]}
                            >
                            <Input.Password 
                            size="large"
                            className='formInput'
                            value={password}
                            placeholder="Enter Admin password" 
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
                    <div className='orgAccountsBox' style={{padding:10,display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(230px,1fr))',overflowY:'scroll',height:'55vh'}}>
                            
                            {
                                accounts.map((account,index)=><Box admin={index===0}  key={account} data={account}/>)
                            }
                                     
                    </div>
                }
                
            </div> 
            </>
                :
                <>
                <Result
                    style={{marginTop:'8vh'}}
                    status="403"
                    title={<span style={{color:'white'}}>Unauthorized Access</span>}
                    subTitle={<span style={{color:'white'}}>Sorry, you are not authorized to access this page.</span>}
                    extra={<Button size='large' onClick={()=>window.location.href='/home'} type="primary">Back to Home</Button>}
                />
                </>
                
            }
        </div>
      
    );
  
}
export default OrgAccountss;