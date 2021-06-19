import React, {useState} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Button, Card, Input, Modal, Select, Tabs ,Avatar,Layout, Empty, Space} from 'antd';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Legend, { Plot } from '../../controls/legend/legend';
import {EditFilled ,UserOutlined,ExportOutlined,UserAddOutlined} from '@ant-design/icons';
import MainHeader from '../../components/mainHeader';
import {Request} from '../request/request'
import {Survey} from '../survey/survey'
const {TabPane}=Tabs;
const {Option}=Select;
const {Header}=Layout;



// const AdminPage =()=>{
//   const [logged,setLogged]=useState(false)
//    // const selectedOrg=JSON.parse(localStorage.getItem('selectedOrg'))[0];
//    // let selectedAccounts=selectedOrg.org_users;
//    const data ={
//     username:"james",
//     id:1
//   }
//    let selectedAccounts= [data]
//     return(
//       <div className='profilePage'>
//         {
//           logged?
          
//           <div style={{display:'flex',width:'100%',height:'100vh',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
//               <h1 style={{fontSize:'max(3vw,25px)',width:'80%',color:'grey'}}>ADMIN</h1>
//               <div style={{width:'80%'}}>
//                   <Tabs  tabPosition='top' defaultActiveKey='1' size='small' style={{height:'auto',backgroundColor:'white',padding:30,}}>
//                   <TabPane tab="Build Survey " key="1" >
                        
//                         <Survey />
                        
                            
//                         </TabPane>
                        
//                           <TabPane tab="Manage requests" key="2" >
//                         <Request/>   
//                           </TabPane>
                        
//                           </Tabs>
                        
//               </div>
//         </div>
          
//           :
//           <div style={{display:'flex',width:'100%',height:'100vh',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

//               <Card  style={{height:200,width:400,borderRadius:25}}>
//                 <Space size='middle' direction='vertical'>
//                  <h2> 
//                    ADMIN LOGIN
//                  </h2>
//                   <div style={{display:'flex'}}>
//                   <Input placeholder='Enter admin key' size='large' type='text'  /><Button onClick={()=>setLogged(true)} type='primary' size='large'>Login</Button>
//                   </div>
//                   </Space>
                 
//               </Card>
//             </div>
//         }
        
//         </div>

//     );
// }
// export default AdminPage;


import { Button, Card, List ,Input} from 'antd'
import React from 'react'

const AdminPage=()=> {
    return (
        <div style={{backgroundColor:'ghostwhite',height:'100vh',width:'100vw',padding:30,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <div style={{marginBottom:'20px',backgroundColor:'white',width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:15}}>
            <span style={{fontWeight:'300'}}>
                Create Somethings
            </span>
            <Button type='primary' style={{backgroundColor:'#006B3F',border:'none'}}>
                Create
            </Button>

            </div>
            {/* <div style={{marginBottom:'20px',backgroundColor:'white',width:'100%',display:'flex',alignItems:'flex-end',justifyContent:'space-between',padding:15}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
            <label style={{fontWeight:'300'}}>
                Create Somethings
            </label>
            <Input placeholder='Enter Something' />
            </div>
            <Button type='primary' style={{backgroundColor:'#006B3F',border:'none'}}>
                Create
            </Button>

            </div> */}
            <Card style={{width:'100%'}}>
            <List/>   
            </Card>
            
        </div>
    )
}

export default AdminPage;
