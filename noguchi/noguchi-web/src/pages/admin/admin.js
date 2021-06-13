import React, {useState} from 'react';
import { Button, Card, Input, Tabs, Space} from 'antd';
import {Request} from '../request/request'
import {Survey} from '../survey/survey'
const {TabPane}=Tabs;
const AdminPage =()=>{
  const [logged,setLogged]=useState(false)
    return(
      <div className='profilePage'>
        {
          logged?
          
          <div style={{display:'flex',width:'100%',height:'100vh',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
              <h1 style={{fontSize:'max(3vw,25px)',width:'80%',color:'grey'}}>ADMIN</h1>
              <div style={{width:'80%'}}>
                  <Tabs  tabPosition='top' defaultActiveKey='1' size='small' style={{height:'auto',backgroundColor:'white',padding:30,}}>
                  <TabPane tab="Build Survey " key="1" >
                        
                        <Survey />
                        
                            
                        </TabPane>
                        
                          <TabPane tab="Manage requests" key="2" >
                        <Request/>   
                          </TabPane>
                        
                          </Tabs>
                        
              </div>
        </div>
          
          :
          <div style={{display:'flex',width:'100%',height:'100vh',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

              <Card  style={{height:200,width:400,borderRadius:25}}>
                <Space size='middle' direction='vertical'>
                 <h2> 
                   ADMIN LOGIN
                 </h2>
                  <div style={{display:'flex'}}>
                  <Input placeholder='Enter admin key' size='large' type='text'  /><Button onClick={()=>setLogged(true)} type='primary' size='large'>Login</Button>
                  </div>
                  </Space>
                 
              </Card>
            </div>
        }
        
        </div>

    );
}
export default AdminPage;