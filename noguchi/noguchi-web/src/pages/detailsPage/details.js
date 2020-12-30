import { Layout,Card,Table, Tag, Space } from 'antd';
import React,{useState,useEffect} from 'react';
import ForumList from '../../components/forumList';
import MainHeader from '../../components/mainHeader';
import { Plot,Plot2 } from '../../controls/legend/legend';
import axios from 'axios';
import qs from 'qs'

const column2=[
  {
    title: 'Keyword',
    dataIndex: 'keyword',
    key: 'keyword',
  
  },
  {
    title: 'Data',
    dataIndex: 'data',
    key: 'data',
  
  }
]
const columns = [
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    
    },
    {
      title: 'New Cases',
      dataIndex: 'new',
      key: 'new',
    },
    {
      title: 'Active Cases',
      dataIndex: 'active',
      key: 'active',
    },
    {
      title: 'Recovered',
      key: 'recover',
      dataIndex: 'recover',
    },
    {
      title: 'Deaths',
      key: 'deaths',
      dataIndex: 'deaths',
    },
  ];
  
  const data = [
    {
      key: '1',
      year: '2020',
      new: 32,
      active: 100,
      recover: 60,
      deaths: 0,
    },
    {
        key: '2',
        year: '2019',
        new: 32,
        active: 120,
        recover: 30,
        deaths: 7,
      },
      {
        key: '3',
        year: '2018',
        new: 32,
        active: 150,
        recover: 0,
        deaths: 13,
      },
  ];

const Details=(props)=>{

  const [continents, setContinents] =useState([]);

  const [expandSurvey, setExpandSurvey] =useState();
  const [questions, setQuestions] =useState();

  useEffect(() => {
    async function fetchQuestions(){
      await axios.get('http://localhost:1337/questions')
      .then(
        res =>{
          if(res.data){
            setQuestions(res.data)
        }} )
      .catch((error) => {
        console.log(error);
      })
    }
    fetchQuestions();
   console.log(questions)
    
},[]);

  useEffect(() => {
    async function fetchSurvey(){
      await axios.get('http://localhost:1337/surveys',
      {
        params:{
          surveyUID:localStorage.getItem('expandSurvey'),
        },
        paramsSerializer:(params)=>qs.stringify(params,{arrayFormat:'repeat'})
      }
    )
      .then(
        res =>{
          if(res.data){
            setExpandSurvey(res.data)
        }} )
      .catch((error) => {
        console.log(error);
      })
    }
    fetchSurvey();
    console.log(expandSurvey)
    
},[]);

let expandeds = expandSurvey?expandSurvey[0].answers:null;
let keys=questions?questions.map(question=>question.Keyword):null
console.log(keys)
let data2=expandeds?expandeds.map(expanded=> ({keyword:keys[expanded.question-1],data:expanded.answer})):null
console.log(data2)
  const {Header}=Layout;
    return(
      <div className='profilePage' style={{maxWidth:'100vw',backgroundColor:'white',width:'100%'}}>
        <MainHeader/>
        <div style={{width:'100%',marginTop:'10vh',padding:'0px 50px 50px 50px'}}>
           
            <h1 style={{fontSize:50}}>{data2?data2[0].data:null}</h1>
              
             <Table bordered columns={column2} dataSource={data2} size='middle'/>
            <Card  style={{minHeight:'40vh',marginTop:20,borderRadius:5,marginBottom:40}}>
             <Plot2 yname='No of Cases'/>
            </Card>

            <Table bordered columns={columns} dataSource={data} size='middle'/>
            <div className='adminProfiles' style={{height:'40vh',width:'100%',overflowY:'scroll',marginTop:35}}>
           
                <ForumList/>
           
            </div>
        </div>
        </div>
    );
}
export default Details;