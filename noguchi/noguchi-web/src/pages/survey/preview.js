import React, {useState} from 'react';
import { Input, Card, List, Button ,Avatar,Progress} from 'antd';
import "antd/dist/antd.css";
import {CloseOutlined } from '@ant-design/icons';
import MiniHeader from '../../components/miniheader';

const { Meta } = Card;


const Preview=()=>{
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
    const [preview,setPreview]=useState(false);
    const text='SCHISTOSOMIASIS'
    return(
        <div className='surveyPage' style={{backgroundColor:'#f5f5f5'}}>
                <MiniHeader/>
                {
                    preview?
                    <>
                    <Avatar icon={<CloseOutlined style={{color:'grey'}}/>} style={{backgroundColor:'white',boxShadow:'3px 3px 5px #00000030'}} size={40} onClick={()=>{setPreview(false)}} />
                <Card title={<h3>{text} SURVEY QUESTIONS</h3>} style={{width:'70%',height:'70vh',marginTop:2,/* overflowY:'scroll' */}} >
                <List
                    size="large"
                    style={{height:'50vh',overflowY:'scroll'}}
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
                    </Card>                   
                     </>:
             <div className='previewPage'>
                <Card
                    hoverable
                    style={{ flex:0.3,minWidth:250,margin:20,height:'auto'}}
                    onClick={()=>{setPreview(true)}}
                    cover={<img alt="example" src={require('../../assets/frame2.png')} />}
                    >
                    <Meta title="Preview Survey Questions" description="Click to see all the survey questions" />
                </Card>
                <Card
                    hoverable
                    style={{ flex:0.3,minWidth:250,margin:20,height:'auto'}}
                    onClick={()=>{window.location.href='/survey'}}
                    cover={<img alt="example" src={require('../../assets/Frame3.png')} />}
                    >
                    <Meta title="Fill Survey Form" description="Start filling the survey form " />
                </Card>                    
                    </div>
                }

            <Button type='link' onClick={()=>{window.location.href='/profile'}} ><span style={{fontSize:15,color:'grey',textDecorationLine:'underline',textDecorationStyle:'solid'}}>...Return to Profile</span></Button>

        </div>
    );
}
export default Preview;