import { Layout,Card,Table, Select } from 'antd';
import React,{useState,useEffect} from 'react';
import ForumList from '../../components/forumList';
import MainHeader from '../../components/mainHeader';
import { Plot2 } from '../../controls/legend/legend';
import axios from 'axios';
import qs from 'qs';

const {Option}=Select

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
    render:data=><div>
      {
          typeof(data)==='object'?
          typeof(data[0])==='object'?
          data.map(dat=>Object.values(dat)).join(' | ')
          :
          data.join(',')
          :
          data
      }
    </div>
  
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

  const [current, setCurrent] =useState([]);
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
          community:localStorage.getItem('expandedCommunity'),
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

let selectedYear=localStorage.getItem('selectedYear');
let expandeds;
if(selectedYear){
let filterByYearSelection=expandSurvey?expandSurvey.filter(exsurvey=>exsurvey.ActualSurveyDate===selectedYear):null;
console.log(filterByYearSelection)
expandeds = filterByYearSelection?filterByYearSelection[0].answers:null;
}else{
  expandeds = expandSurvey?expandSurvey[0].answers:null;
}

let years=expandSurvey?expandSurvey.map(exs=> exs.ActualSurveyDate):null
console.log(expandSurvey)
let data2=expandeds?expandeds.map(expanded=> ({keyword:expanded.question.Keyword,data:expanded.answer})):null
console.log(data2)
  const {Header}=Layout;

 const handleChange=(value)=>{
  let selectedSurvey=expandSurvey.filter(exs=>exs.ActualSurveyDate===value);
  let ssanswers=selectedSurvey[0]?.answers
  
  let tableFormat=ssanswers?ssanswers.map(ssanswer=> ({keyword:ssanswer.question.Keyword,data:ssanswer.answer.toString()})):null
  console.log(tableFormat)
  setCurrent(tableFormat)
 }

  return(
      <div className='profilePage' style={{maxWidth:'100vw',backgroundColor:'white',width:'100%'}}>
        <MainHeader/>
        <div style={{width:'100%',marginTop:'10vh',padding:'0px 50px 50px 50px'}}>
           <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
           <h1 style={{fontSize:50}}>{expandSurvey?expandSurvey[0].community.Community:null}</h1>
          <Select placeholder='Change Year' style={{width:150}}  onChange={(value)=>{handleChange(value)}}>
          
            
            {
              years?
                years.map(year=><Option key={year}>{year.slice(0,4)}</Option>)
              :
              null
            }
          </Select>
           </div>
            <h3 style={{textAlign:'left',color:'brown'}}>
              Current Disease: Schistosomiasis
            </h3>
             {
               current.length>0?
               <Table bordered columns={column2} dataSource={current} size='middle'/>
               :
               <Table bordered columns={column2} dataSource={data2} size='middle'/>
               
               }
            <Card  style={{minHeight:'40vh',marginTop:20,borderRadius:5,marginBottom:40}}>
             <Plot2 yname='Prevalence(%)'/>
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