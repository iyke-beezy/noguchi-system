import {Tabs,Row, Col,Modal,Popover, Avatar, Button, Card ,List, Progress} from "antd";
import React,{useState} from "react";
import {UserOutlined,ExportOutlined} from '@ant-design/icons';
import SurveyCard from "../../components/surveyCard";
import MainHeader from '../../components/mainHeader';


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
        'List the water bodies the community',
        'List the water bodies near the community',
        'What is the quality of the water for each body',
        'How do the inhabitants of the community access water',
        'List the water contact sites in the community',
        'Indicate the schistosomiasis control activity at each water contact site',
        'Are there any weeds in the water sites (for each site)',
        'What snail species are at the water sites (for each site)',
        'Which schistosomiasis control approaches are in place to put a check on the disease in the community',
        'List the stakeholders',
        'Indicate the activities that each stakeholder is conducting',
        ' How is the sanitaion of the community',
        'Are there sanitation facilities in the community',
        'Are the sanitation facilities in the community adequate',
        'Are there indications of climate change in the community',
        'Indicate the climate change factors important in the community',
  
      ];
    const [modalState,setModalState]=useState(false);
   
 
    return(
      
        <>
        <Button className='diseaseButton' style={{height:50,margin:10,borderRadius:20,fontWeight:'500'}} onClick={() => setModalState(true)}>
            {props.text}
        </Button>
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
      </>
    );
}
const Entry=()=>{
    const {TabPane} = Tabs;
    const content = (
        <div style={{display:'flex',flexDirection:'column'}}>
          <Button type='link' size='large' onClick={()=>{window.location.href='/profile'}}><UserOutlined/>Profile</Button>
          <Button type='link' size='large' danger onClick={()=>{window.location.href='/'}}><ExportOutlined/>Logout</Button>
        </div>
      );
      const [preview,setPreview]=useState(true);
    return(
        
        <div>
            <MainHeader/>
            <Row className={"entryDesktop"} xs={0} sm={24} >
           
            <div className='entryPoint'>
                <div className='links' style={{backgroundColor:'#f5f5f580'}}>
                {/* <Popover content={content} trigger="click">
                    <Avatar size={70} icon={<UserOutlined/>} style={{marginTop:30,marginBottom:20}}/>
                </Popover> */}
                    <Button block  size='large' style={{height:60,border:'none',borderBottom:'1px solid #f5f5f5',textAlign:'left',backgroundColor:'transparent',fontSize:17,color:'lightslategray'}} onClick={()=>{setPreview(true)}}>Preview</Button>
                    <Button  block size='large' style={{height:60,border:'none',borderBottom:'1px solid #f5f5f5',textAlign:'left',backgroundColor:'transparent',fontSize:17,color:'lightslategray'}} onClick={()=>{setPreview(false)}}>Take A Survey</Button>
                </div>
                <div className='entryContent'>
                    {
                        preview?
                        <div style={{padding:35}}>
                        <h1 style={{fontSize:40,color:'white',textAlign:'left',marginBottom:40}}>Click A Disease to Preview</h1>
                        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))'}}>
                        {
                            ['Schistosomiasis', 'Malaria','Cholera','Dysentry','Kwashiorkor','Marasmus'].map(
                                (value,index)=><MiniCard key={index} text={value}/>
                                
                            )
                        }

                        </div>
                        
                        
                    </div>
                    :
                    
                    <div className='selectDisease'>
                         <div style={{padding:35,display:'flex',flexDirection:'row',flexWrap:'wrap',height:'70%'}} >
                        <div style={{flex:0.5,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',minWidth:'min(95vw,280px)'}}>
                         <h1 style={{fontSize:'min(100px,7vw)',lineHeight:1.4,color:'lightgrey',opacity:0.6,fontWeight:'bolder',textAlign:'left'}}>Select A Disease to Start </h1>
                         </div>
                        
                        <div style={{flex:0.5,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',flexWrap:'wrap',minWidth:'min(95vw,280px)'}} >
                        {
                            ['Schistosomiasis', 'Malaria','Cholera','Dysentry','Kwashiorkor','Marasmus'].map(
                                (value,index)=><Button className='diseaseButton' style={{height:'8vh',fontSize:18,width:'auto',fontWeight:'500',margin:6,borderRadius:20}}  key={index} >{value}</Button>
                                
                            )
                        }
                        </div>
                        </div>
                        
                        
                    </div>
                    </div>
                    }
                    
                </div>
            </div>
                 
            </Row>
            {//Code for mobile version
            }
            <Row className="entryMobile">
                <div style={{height:'92vh',marginTop:'8vh',width:'100%'}}>
                <Col style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:'10vh'}}  xs={24} md={0}>
                    <h5 style={{width:'50%'}}>Survey And Preview</h5>
                </Col>
               
               
                <Tabs style={{width:'100%'}} centered defaultActiveKey="1" >
                    <TabPane tab="Preview" key="1">
                    <div className='adminProfiles' style={{padding:35,height:'70vh'}}>
                        <h6 style={{fontSize:15,color:'gray',textAlign:'center',marginBottom:40}}>Click A Disease to Preview</h6>
                        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))'}}>
                        {
                            ['Schistosomiasis', 'Malaria','Cholera','Dysentry','Kwashiorkor','Marasmus'].map(
                                (value,index)=><MiniCard key={index} text={value}/>
                                
                            )
                        }

                        </div>
                        
                        
                    </div>
                    </TabPane>
                    <TabPane tab="Take Survey" key="2">
                    <div className='adminProfiles' style={{display:'flex',flexDirection:'column',alignItems:'center',height:'55vh'}}>
                        <h4 style={{fontSize:'15',padding:10,/* textShadow:'0 0 2px #000000, 0 0 2px #000000', */ marginBottom:20,color:'lightgray'}}>SCHISTOSOMIASIS</h4>    
                       <SurveyCard/>
                    </div>
                    </TabPane>
                   
                </Tabs>
                </div>
             
            </Row>

        </div>
    );
};


export default Entry;

{/* <div style={{alignItems: 'center',display:'flex',flexDirection:'column'}}>
                        <h1 style={{width:'100%',fontSize:'20px',textAlign:'left',padding:10, marginBottom:20,color:'lightgray'}}>Schistosomiasis</h1>    
                        
                        <Row style={{width:'100%'}}>
                            <Col style={{width:'100%',height:'60vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                            <h1 style={{fontSize:'14em',lineHeight:0.4,color:'lightgrey',opacity:0.2,fontWeight:'bolder'}}>
                                01
                            </h1>
                            <SurveyCard/>
                            </Col>
                        </Row>
                        
                        
                    </div> */}