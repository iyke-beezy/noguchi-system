import React, {useState} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Button, Card, Input, Modal, Select, Tabs ,Avatar,Layout, Empty,Form,Result} from 'antd';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Legend, { Plot } from '../../controls/legend/legend';
import {EditFilled ,UserOutlined,ExportOutlined,UserAddOutlined} from '@ant-design/icons';
import MainHeader from '../../components/mainHeader';
import {Request} from '../request/request'
import {Survey} from '../survey/survey'
import Axios from 'axios';

const {TabPane}=Tabs;
const {Option}=Select;
const {Header}=Layout;

const Box=(props)=>{
    const [modalState,setModalState]=useState(false);
    const [profileName,setProfileName]=useState(props.data.username)
    const [profileKey,setProfileKey]=useState(props.data.key)
    console.log(props.data.key)
    return(
        <>
        <div style={{height:160,border:'2px solid #adadad',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin:20,cursor:'pointer'}} onClick={() => setModalState(true)}>
          <span style={{fontSize:50,color:'lightslategray'}}>AD</span>
        </div>
        <Modal
        title='Edit Profile'
        style={{ top: 100 }}
        width={500}
        visible={modalState}
        onOk={() => setModalState(false)}
        onCancel={() => setModalState(false)}
        footer={[
            <Button key="back" danger type='default' onClick={() => setModalState(false)}>
              Delete
            </Button>,
            <Button key="submit" type="default"  onClick={() => setModalState(false)}>
              Revert
            </Button>,
            <Button key="submit" type="primary"  onClick={() => setModalState(false)}>
            Save
          </Button>
          ]}
      >
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <label >Profile Name</label>
                        <Input
                        type='text'
                        value={profileName}
                        onChange={(e)=>setProfileName(e.target.value)}
                        size='large'
                        style={{width:'50%',minWidth:330,marginTop:5}}
                        />  
                        <label style={{marginTop:8}}>Profile Key</label>
                        <Input
                        type='text'
                        value={profileKey}
                        onChange={(e)=>setProfileKey(e.target.value)}
                        size='large'
                        style={{width:'45%',minWidth:300,marginTop:5}}
                        />  
                        </div>

      </Modal>
        
        </>
    );
}
const Activity=()=>{
    return(
        <div style={{height:220,border:'1px solid #adadad',margin:20}}>

        </div>
    );
}


const OrgAdminPage =()=>{
    function createData(time, amount) {
        return { time, amount };
      }
      
  /*     const data = [
        createData('00:00', 0),
        createData('03:00', 300),
        createData('06:00', 600),
        createData('09:00', 800),
        createData('12:00', 1500),
        createData('15:00', 2000),
        createData('18:00', 2400),
        createData('21:00', 2400),
        createData('24:00', undefined),
      ] */
    
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const theme = useTheme();
    const selectedOrg=JSON.parse(localStorage.getItem('selectedOrg'))[0];
<<<<<<< HEAD
    let selectedAccounts=selectedOrg.org_users;
  
  
=======
    let selectedAccounts=selectedOrg.org_users

    const createOrgUser=()=>{
      Axios.post('http://localhost:1337/org-users', 
      {
        username: username,
        key: password,
        organization:JSON.parse(localStorage.getItem('selectedOrg'))[0].id
      }
      )
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
    let me=localStorage.getItem('org_admin')
>>>>>>> d8cf25a233ecb6bc910363ba933d9a6c265183c4
    return(
      <div className='profilePage' style={{backgroundColor:'white'}}>
       <MainHeader/>

       {
                me?
                <>
        <div style={{display:'flex',marginTop:'10vh',width:'100%',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h1 style={{fontSize:'max(3vw,25px)',width:'80%',color:'grey'}}>username ADMIN DASHBOARD</h1>
        <div style={{width:'80%'}}>
            <Tabs  tabPosition='top' defaultActiveKey='1' size='small' style={{height:'auto'}}>
                    <TabPane tab="Manage Profiles" key="1" >
                        <div className='adminProfiles' style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',height:'55vh'}}>
                           {
                             selectedAccounts?
                              <>
                                {
                                selectedAccounts.map((selectedAccount,index)=><Box   key={selectedAccount} data={selectedAccount}/>)
                               }
                              </>
                             :
                             <Empty/>
                           }  
                          

                        </div>
                        
                    </TabPane>
                    
                    <TabPane tab="Profile Activities" key="2"  >
                        
                        <div style={{display:'flex',flexDirection:'column',height:'55vh'}}>
                         <Select defaultValue='kofi' size='large' style={{maxWidth:'max(20%,100px)'}}>
                           <Option value='kofi'>Kofi</Option> 
                           <Option value='ama'>Ama</Option> 
                           <Option value='tetteh'>Tetteh</Option> 
                           <Option value='kookor'>Kookor</Option> 
                           <Option value='baba'>Baba</Option> 
                           <Option value='timo'>Timo</Option> 
                           <Option value='man'>Manoo</Option>  
                         </Select>
                         <Card  style={{minHeight:'40vh',marginTop:20,borderRadius:5}}>
                            <Plot yname='No of Entries'/>
                         </Card>
                          
                        </div>
                        
                        
                        
                        
                    </TabPane>
                    <TabPane tab="New Profile" key="3" >
                    <Form layout='vertical' onFinish={createOrgUser} style={{display:'flex',flexDirection:'column',height:'55vh',alignItems:'flex-start'}}>

                        <h1 style={{fontSize:'min(35px,8vw)',color:'lightslategray'}}>New Profile</h1> 

                        
                        <Avatar shape='square' size='large' icon={<UserAddOutlined/>} />
                        <label style={{marginTop:10,color:'lightgray'}}>Profile Name</label>
                        <Form.Item
                          name="username"
                          rules={[{ required: true, message: 'Please input profile name!' }]}
                        >
                        <Input
                        type='text'
                        placeholder='Enter profile name'
                        size='large'
                        value={username}
                        style={{width:'max(50%,55vw)',margin:5}}
                        onChange={(e)=>setUsername(e.target.value)}
                        />  
                        </Form.Item>
                        <label style={{marginTop:15,color:'lightgray'}}>Profile Key</label>
                        <Form.Item
                        
                          name="password"
                          rules={[{ required: true, message: 'Please input profile key!' }]}
                        >
                        <Input
                        type='text'
                        placeholder='Enter profile key'
                        size='large'
                        value={password}
                        style={{width:'max(45%,50vw)',margin:5}}
                        onChange={(e)=>setPassword(e.target.value)}
                        /> 
                        </Form.Item> 
                       <Button type='primary' htmlType='submit' style={{alignSelf:'flex-end',height:45,marginTop:30,backgroundColor:'lightslategray',borderColor:'lightslategray'}}>Create Profile</Button>
                    </Form>
                        
                    </TabPane>

                  
                    </Tabs>
                  
        </div>
        </div>
        </>
                :
                <>
                <Result
                    style={{marginTop:'8vh'}}
                    status="403"
                    title="Unauthorized Access"
                    subTitle="Sorry, you are not authorized to access this page."
                    extra={<Button size='large' onClick={()=>window.location.href='/home'} type="primary">Back to Home</Button>}
                />
                </>
                
            }
        </div>

    );
}
export default OrgAdminPage;