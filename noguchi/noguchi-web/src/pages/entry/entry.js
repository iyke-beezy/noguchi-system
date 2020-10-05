import {Row, Col,Modal,Popover, Avatar, Button, Card ,List, Progress} from "antd";
import React,{useState} from "react";
import {UserOutlined,ExportOutlined} from '@ant-design/icons';
import SurveyCard from "../../components/surveyCard";
const MiniCard=(props)=>{
    const data = [
        'What is the name of the community',
        'Where is the community located',
       ' What is the population of the community',
        'What is the population of men',
        'What is the population of women',
        'what is the population of children',
        'What is the main occupation of the people in the community',
       ' what is the age distribution of the community',
       ' What is the general schistosomiasis prevalence',
        'What is the urinary schistosomiasis prevalence',
        'What is the Intestinal schistosomiasis prevalence',
        'What is the female genital schistosomiasis prevalence', 
        'What is the male genital schistosomiasis prevalence' ,
        'What is the schistosoma haematobium prevalence' ,
       ' What is the schistosoma mansoni prevalence ',
        'What is the schistosoma haematobium intensity',
        'What is the schistosoma mansoni intensity',
        'Are there water bodies near the community',
        '*What is the quality of the water',
        'How do the inhabitants of the community access water',
       ' How is the sanitaion of the community',
        '*Are there any weeds in the water sites',
        'how is the climate of the community like',
        'What snail species are at the water sites',
        'What approaches are in place to put a check on the disease',
        'are there any stakeholders',
        'List the stakeholders',
        
        
      ];
    const [modalState,setModalState]=useState(false);
  
    return(
        <div>
        <Card style={{height:130,width:230,margin:10,display:'flex',alignItems:'center',justifyContent:'center'}} onClick={() => setModalState(true)}>
            <h3 style={{fontSize:20}}>{props.text}</h3>
        </Card>
        <Modal
        title={props.text}
        style={{ top: 20 }}
        width={800}
        visible={modalState}
        onOk={() => setModalState(false)}
        onCancel={() => setModalState(false)}
      >
       <List
                    size='medium'
                    style={{height:'50vh',overflowY:'scroll'}}
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />

      </Modal>
      </div>
    );
}
const Entry=()=>{
    const content = (
        <div style={{display:'flex',flexDirection:'column'}}>
          <Button type='link' size='large' onClick={()=>{window.location.href='/profile'}}><UserOutlined/>Profile</Button>
          <Button type='link' size='large' danger onClick={()=>{window.location.href='/'}}><ExportOutlined/>Logout</Button>
        </div>
      );
      const [preview,setPreview]=useState(true);
    return(
        <div className='entry'>
            <div className='entryPoint'>
                <div className='links'>
                <Popover content={content} trigger="click">
                    <Avatar size={70} icon={<UserOutlined/>} style={{marginTop:30,marginBottom:20}}/>
                </Popover>
                    <Button block  size='large' style={{height:60,border:'none',borderBottom:'1px solid #00000030',textAlign:'left'}} onClick={()=>{setPreview(true)}}>Preview</Button>
                    <Button  block size='large' style={{height:60,border:'none',borderBottom:'1px solid #00000030',textAlign:'left'}} onClick={()=>{setPreview(false)}}>Take A Survey</Button>
                </div>
                <div className='entryContent'>
                    {
                        preview?
                        <div>
                        <h1 style={{fontSize:30,color:'gray',textAlign:'left',marginBottom:40}}>Click A Disease to Preview</h1>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',flexWrap:'wrap'}}>
                        {
                            ['Schistosomiasis', 'Malaria','Cholera','Dysentry','Kwashiorkor','Marasmus'].map(
                                (value,index)=><MiniCard key={index} text={value}/>
                                
                            )
                        }

                        </div>
                        
                        
                    </div>
                    :
                    <div style={{alignItems: 'center',display:'flex',flexDirection:'column'}}>
                        <h1 style={{fontSize:35,/* textShadow:'0 0 2px #000000, 0 0 2px #000000', */ marginBottom:20,color:'#40404080'}}>SCHISTOSOMIASIS</h1>
                        <SurveyCard/>
                        <Progress type="circle" percent={75} width={30} style={{padding:20,marginBottom:20,boxShadow:'3px 3px 5px #00000020',borderRadius:'60px',backgroundColor:'#ffffff'}}/>
            
                    </div>
                    }
                    
                </div>
            </div>
        </div>
    );
};


export default Entry;