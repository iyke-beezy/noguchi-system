import {message,Tabs,Row, Col,Modal,Input, Avatar, Button, Form ,List, Result, Empty, Select} from "antd";
import React,{useState,useEffect} from "react";
import {UserOutlined,ExportOutlined} from '@ant-design/icons';
import SurveyCard from "../../components/surveyCard";
import MainHeader from '../../components/mainHeader';
import axios from 'axios';

const {Option}=Select;
const MiniCard=(props)=>{

    const [modalState,setModalState]=useState(false);
    const [questions,setQuestions]=useState([])
    
        useEffect(() => {
            axios.get('http://localhost:1337/questions')
            .then(
              res =>{
                if(res.data){
                  console.log(res.data)
                  setQuestions(res.data)
              }} )
            .catch((error) => {
              console.log(error);
            })
        },[]);
    
    

      let filtered=questions.filter(question=>question.disease?.name===props.text)
      
 
    return(
      
        <>
        <Button className='diseaseButton' style={{height:50,margin:10,borderRadius:20,fontWeight:'500'}} onClick={() => setModalState(true)}>
            {props.text}
        </Button>
        <Modal
        title={props.text}
        centered
        style={{ top: '20%'}}
        width={920}
        visible={modalState}
        onOk={() => setModalState(false)}
        onCancel={() => setModalState(false)}
      >
        {
            filtered?
            <List
            className='adminProfiles'
                    size='medium'
                    style={{height:'35vh',overflowY:'scroll'}}
                    dataSource={filtered}
                    renderItem={item => <List.Item>{item.question}</List.Item>}
                />
                :
                <List/>

        }
       
      </Modal>
      </>
    );
}
const Entry=()=>{
    const {TabPane} = Tabs;

    const [surveyUID,setSurveyUID]=useState('')
    const [selectedCommunity,setSelectedCommunity]=useState();
    const [asDate,setAsDate]=useState('')

    const [start,setStart]=useState(false)
    const [step,setStep]=useState(false)
    const [diseases,setDiseases]=useState([])
    const [communities,setCommunities]=useState([])
    useEffect(() => {
        axios.get('http://localhost:1337/diseases')
        .then(
          res =>{
            if(res.data){
              console.log(res.data)
              setDiseases(res.data)
          }} )
        .catch((error) => {
          console.log(error);
        })
    },[]);

    useEffect(() => {
        axios.get('http://localhost:1337/communities')
        .then(
          res =>{
            if(res.data){
              console.log(res.data)
              setCommunities(res.data)
          }} )
        .catch((error) => {
          console.log(error);
        })
    },[]);

    const error = () => {
        message.error('This is an error message');
      };

    const content = (
        <div style={{display:'flex',flexDirection:'column'}}>
          <Button type='link' size='large' onClick={()=>{window.location.href='/profile'}}><UserOutlined/>Profile</Button>
          <Button type='link' size='large' danger onClick={()=>{window.location.href='/'}}><ExportOutlined/>Logout</Button>
        </div>
      );
      const [preview,setPreview]=useState(true);
      const mee=localStorage.getItem('current_user')
      let style=mee?{}:{minHeight:'100vh',height:'auto',width:'100%',display:'flex',backgroundColor:'#4e54c8', flexDirection:'column',alignItems:'center'}
    return(
        
        <div style={style}>
            <MainHeader/>
            {
                mee?
                <>
            <Row  sm={24} >
           
            <Row className='entryPoint'>
                <Col md={start?0:4}  className='links' style={{backgroundColor:'#f5f5f580'}}>
                {/* <Popover content={content} trigger="click">
                    <Avatar size={70} icon={<UserOutlined/>} style={{marginTop:30,marginBottom:20}}/>
                </Popover> */}
                    <Button block  size='large' style={{height:60,border:'none',borderBottom:'1px solid #f5f5f5',textAlign:'left',backgroundColor:'transparent',fontSize:17,color:'lightslategray'}} onClick={()=>{setPreview(true)}}>Preview</Button>
                    <Button  block size='large' style={{height:60,border:'none',borderBottom:'1px solid #f5f5f5',textAlign:'left',backgroundColor:'transparent',fontSize:17,color:'lightslategray'}} onClick={()=>{setPreview(false)}}>Take A Survey</Button>
                </Col>
                <Col md={start?24:20} className='entryContent'>
                    {
                        preview?
                        <div style={{padding:35}}>
                        <h1 style={{fontSize:40,color:'white',textAlign:'left',marginBottom:40}}>Click A Disease to Preview</h1>
                        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))'}}>
                        {
                            diseases.map(
                                (disease)=><MiniCard key={disease.id} text={disease.name}/>
                                
                            )
                        }

                        </div>
                        
                        
                    </div>
                    :
                    <div className='selectDisease'>
                        <Row style={{width:'100%',height:'100%'}}>
                            
                            
                            <Col md={12} className='svgee' >


                            </Col>
                            <Col md={12} flex='auto' style={{backgroundColor:'#4e54c8'}}>
                                {
                                    !step?
                                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%'}}>
                                    <h1 style={{color:'white',textTransform:'uppercase',fontSize:'max(20px,2.5vw)'}}>Select A Disease to Start</h1>
                                    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',flexWrap:'wrap',}} >
                                    {
                                        diseases.map(
                                            (disease)=><Button onClick={()=>{
                                                setStep(disease.questions.length>0?true:false)
                                                if(!disease.questions.length>0)message.error('There is no survey under this disease yet')
                                            }} className='diseaseButton' style={{height:'8vh',fontSize:18,width:'auto',fontWeight:'500',margin:6,borderRadius:20}}  key={disease.id} >{disease.name}</Button>
                                            
                                        )
                                    }
                                    </div>
                                    </div>
                                    
                                    :
                                    <>
                                        {
                                    start?
                                    <div style={{alignItems: 'center',display:'flex',flexDirection:'column'}}>
                                    <h1 style={{width:'100%',fontSize:'20px',textAlign:'left',padding:10, marginBottom:20,color:'lightgray'}}>Schistosomiasis</h1>    
                                    
                                    <Row style={{width:'100%'}}>
                                        <Col style={{width:'100%',height:'60vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                        <SurveyCard surveyUID={surveyUID} asDate={asDate} community={selectedCommunity}/>
                                        </Col>
                                    </Row>          
                                    
                                </div> 
                                    :
                                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%'}}>
                                    <h1 style={{color:'white',fontSize:'max(20px,2.5vw)'}}>Enter Survey Details</h1>
                                    <div  style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <Form
                                        layout='vertical'  
                                        onFinish={()=>setStart(true)}
                                        
                                    >
                                        
                                        <Form.Item name="surveyUID" label="SurveyUID" rules={[{ required: true, message: 'Please input a surveyUID!' }]}>
                                        <Input className='formInput' placeholder="Enter Survey Identifier" size='large' onChange={(e)=>setSurveyUID(e.target.value)} value={surveyUID} style={{width:300}}/>
                                        </Form.Item>
                                        <Form.Item name="ActualSurveyDate" label="Actual Survey Date" rules={[{ required: true, message: 'Please enter the actual survey date!' }]}>
                                        <Input className='formInput' type='date' placeholder="Enter Actual Survey Date" size='large' onChange={(e)=>setAsDate(e.target.value)} value={asDate} style={{width:300}}/>
                                        </Form.Item>
                                        <Form.Item name="community" label="Community" rules={[{ required: true, message: 'Please select a community' }]}>
                                        <Select className='formInput' value={selectedCommunity} onChange={(value)=>setSelectedCommunity(value)} style={{width:300}} size='large'>
                                            {
                                                communities?
                                                communities.map(
                                                    (community,index)=><Option key={index} value={community.id}>{community.Community}</Option>
                                                )
                                                :
                                                null
                                                
                                            }
                                        </Select>
                                        </Form.Item>
                                        <Form.Item >
                                        <Button type="primary" block size='large' htmlType='submit' >Next</Button>
                                        </Form.Item> 
                                    </Form>
                                    </div>
                                    
                                    </div>
                                }
                                    </>
                                }
                                
                                
                                

                            </Col>
                        </Row>


                    </div>
                    }
                    
                </Col>
            </Row>
                 
            </Row>
            {//Code for mobile version
            }
            {/* <Row className="entryMobile">
                <div style={{height:'92vh',marginTop:'8vh',width:'100%'}}>
                <Col style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:'10vh'}}  xs={24} md={0}>
                    <h5 style={{width:'50%'}}>Survey And Preview</h5>
                </Col>
               
               
                <Tabs style={{width:'100%'}} centered defaultActiveKey="1" >
                    <TabPane tab="Preview" key="1">
                    <div className='adminProfiles' style={{padding:35,height:'80vh'}}>
                        <h6 style={{fontSize:15,color:'gray',textAlign:'center',marginBottom:40}}>Click A Disease to Preview</h6>
                        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))'}}>
                        {
                            diseases.map(
                                (disease)=><MiniCard key={disease.id} text={disease.name}/>
                                
                            )
                        }

                        </div>
                        
                        
                    </div>
                    </TabPane>
                    <TabPane tab="Take Survey" key="2">
                    <div className='adminProfiles' style={{display:'flex',flexDirection:'column',alignItems:'center',height:'80vh'}}>
                    {
                                    !step?
                                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%'}}>
                                    <h1 style={{color:'white',fontSize:'max(20px,2.5vw)'}}>Enter Survey Details</h1>
                                    <div  style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <Form
                                        layout='vertical'   
                                    >
                                        
                                        <Form.Item label="SurveyUID">
                                        <Input placeholder="Enter Survey Identifier" size='large' onChange={(e)=>setSurveyUID(e.target.value)} value={surveyUID} style={{width:300}}/>
                                        </Form.Item>
                                        <Form.Item label="Community">
                                        <Select value={selectedCommunity} onChange={(value)=>setSelectedCommunity(value)} style={{width:300}} size='large'>
                                            {
                                                communities?
                                                communities.map(
                                                    (community,index)=><Option key={index} value={community.id}>{community.Community}</Option>
                                                )
                                                :
                                                null
                                                
                                            }
                                        </Select>
                                        </Form.Item>
                                        <Form.Item >
                                        <Button type="primary" block size='large' 
                                        onClick={()=>{
                                            setStep(true)
                                        }} >Next</Button>
                                        </Form.Item> 
                                    </Form>
                                    </div>
                                    
                                    </div>
                                    :
                                    <>
                                        {
                                    start?
                                    <div style={{alignItems: 'center',display:'flex',flexDirection:'column'}}>
                                    <h1 style={{width:'100%',fontSize:'20px',textAlign:'left',padding:10, marginBottom:20,color:'lightgray'}}>Schistosomiasis</h1>    
                                    
                                    <Row style={{width:'100%'}}>
                                        <Col style={{width:'100%',height:'60vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                        <SurveyCard surveyUID={surveyUID} community={selectedCommunity}/>
                                        </Col>
                                    </Row>          
                                    
                                </div> 
                                    :
                                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%'}}>
                                <h1 style={{color:'white',textTransform:'uppercase',fontSize:'max(20px,2.5vw)'}}>Select A Disease to Start</h1>
                                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',flexWrap:'wrap',}} >
                                {
                                    diseases.map(
                                        (disease)=><Button onClick={()=>{
                                            setStart(disease.questions.length>0?true:false)
                                            if(!disease.questions.length>0)message.error('There is no survey under this disease yet')
                                        }} className='diseaseButton' style={{height:'8vh',fontSize:18,width:'auto',fontWeight:'500',margin:6,borderRadius:20}}  key={disease.id} >{disease.name}</Button>
                                        
                                    )
                                }
                                </div>
                                </div>
                                }
                                    </>
                                }
                                
                    </div>
                    </TabPane>
                   
                </Tabs>
                </div>
             
            </Row> */}
            </>
                :
                <>
                <Result
                    style={{marginTop:'8vh',color:'white'}}
                    status="403"
                    
                    title={<span style={{color:'white'}}>403</span>}
                
                    subTitle={<span style={{color:'white'}}>Sorry, you are not authorized to access this page.</span>}
                    extra={<Button size='large' onClick={()=>window.location.href='/login'} type="primary">Go to Login</Button>}
                />
                </>
                
            }
        </div>
    );
};


export default Entry;

