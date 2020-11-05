import React, {useState} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Button, Card, Input, Modal, Select, Tabs ,Avatar} from 'antd';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Legend, { Plot } from '../../controls/legend/legend';
import {EditFilled ,UserOutlined,ExportOutlined} from '@ant-design/icons';
const {TabPane}=Tabs;
const {Option}=Select;
const Box=()=>{
    const [modalState,setModalState]=useState(false);
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
                        value='Abu DaTeef'
                        size='large'
                        style={{width:'50%',minWidth:330,marginTop:5}}
                        />  
                        <label style={{marginTop:8}}>Profile Key</label>
                        <Input
                        type='text'
                        value='********'
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
      
      const data = [
        createData('00:00', 0),
        createData('03:00', 300),
        createData('06:00', 600),
        createData('09:00', 800),
        createData('12:00', 1500),
        createData('15:00', 2000),
        createData('18:00', 2400),
        createData('21:00', 2400),
        createData('24:00', undefined),
      ]
    
    const theme = useTheme();
    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'100vh',height:'auto'}}>
        <div style={{width:'80%'}}>
            <Tabs  tabPosition='top' defaultActiveKey='1' size='small' style={{height:'auto'}}>
                    <TabPane tab="Manage Profiles" key="1" >
                        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',height:'55vh'}}>
                            
                            <Box/>
                            <Box/>
                            <Box/>
                            <Box/>
                            <Box/>
                        

                        </div>
                        
                    </TabPane>
                    
                    <TabPane tab="Profile Activities" key="2"  >
                        
                        <div style={{display:'flex',flexDirection:'column',height:'55vh'}}>
                         <Select defaultValue='kofi' size='large' style={{maxWidth:'20%'}}>
                           <Option value='kofi'>Kofi</Option> 
                           <Option value='ama'>Ama</Option> 
                           <Option value='tetteh'>Tetteh</Option> 
                           <Option value='kookor'>Kookor</Option> 
                           <Option value='baba'>Baba</Option> 
                           <Option value='timo'>Timo</Option> 
                           <Option value='man'>Manoo</Option>  
                         </Select>
                         <Card  style={{minHeight:'40vh',marginTop:20,borderRadius:5}}>
                            <Plot/>
                         </Card>
                          
                        </div>
                        
                        
                        
                        
                    </TabPane>
                    <TabPane tab="New Profile" key="3" >
                    <div style={{display:'flex',flexDirection:'column',height:'55vh',alignItems:'flex-start'}}>

                        <h1 style={{fontSize:35,color:'lightslategray'}}>New Profile</h1> 

                        
                        <Avatar shape='square' size={90} icon={<UserOutlined/>} />
                        <label style={{marginTop:10,color:'lightgray'}}>Profile Name</label>
                        <Input
                        type='text'
                        placeholder='Enter profile name'
                        size='large'
                        style={{width:'50%',minWidth:330,margin:5}}
                        />  
                        <label style={{marginTop:15,color:'lightgray'}}>Profile Key</label>
                        <Input
                        type='text'
                        placeholder='Enter profile key'
                        size='large'
                        style={{width:'45%',minWidth:300,margin:5}}
                        />  
                       <Button type='primary' style={{alignSelf:'flex-end',height:45,marginTop:30,backgroundColor:'lightslategray',borderColor:'lightslategray'}}>Create Profile</Button>
                    </div>
                        
                    </TabPane>
                    </Tabs>
                  
        </div>
        </div>

    );
}
export default OrgAdminPage;