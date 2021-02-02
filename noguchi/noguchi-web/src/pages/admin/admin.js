import React, {useState} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Button, Card, Input, Modal, Select, Tabs ,Avatar,Layout, Empty} from 'antd';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Legend, { Plot } from '../../controls/legend/legend';
import {EditFilled ,UserOutlined,ExportOutlined,UserAddOutlined} from '@ant-design/icons';
import MainHeader from '../../components/mainHeader';
import {Request} from '../request/request'
import {Survey} from '../survey/survey'
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


const AdminPage =()=>{
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
    
    const theme = useTheme();
   // const selectedOrg=JSON.parse(localStorage.getItem('selectedOrg'))[0];
   // let selectedAccounts=selectedOrg.org_users;
   const data ={
    username:"james",
    id:1
  }
   let selectedAccounts= [data]
    return(
      <div className='profilePage' style={{backgroundColor:'white'}}>
       <MainHeader/>
        <div style={{display:'flex',marginTop:'10vh',width:'100%',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h1 style={{fontSize:'max(3vw,25px)',width:'80%',color:'grey'}}>username ADMIN DASHBOARD</h1>
        <div style={{width:'80%'}}>
            <Tabs  tabPosition='top' defaultActiveKey='1' size='small' style={{height:'auto'}}>
            <TabPane tab="Build Survey " key="1" >
                  
                  <Survey />
                  
                       
                   </TabPane>
                  
                    <TabPane tab="Manage requests (5)" key="2" >
                   <Request/>   
                    </TabPane>
                   
                    </Tabs>
                  
        </div>
        </div>
        </div>

    );
}
export default AdminPage;