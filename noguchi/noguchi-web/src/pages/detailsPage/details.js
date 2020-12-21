import { Layout,Card,Table, Tag, Space } from 'antd';
import React,{useState} from 'react';
import ForumList from '../../components/forumList';
import MainHeader from '../../components/mainHeader';
import { Plot,Plot2 } from '../../controls/legend/legend';

const DetailsCard=()=>{
    return(
        <Card style={{minHeight:'min(10em,150px)',margin:10,borderRadius:15
        }}>

        </Card>
    );
}

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

const Details=()=>{



  
  const {Header}=Layout;
    return(
      <div style={{maxWidth:'100vw',width:'100%'}}>
        <MainHeader/>
        <div style={{padding:'0px 80px 80px 80px'}}>
           
            <h1 style={{fontSize:50}}>ACCRA</h1>
            <p>Pariatur Lorem aliqua pariatur irure ea occaecat cupidatat. Voluptate labore aliqua consectetur officia ullamco deserunt dolore exercitation magna. Cillum mollit do minim veniam aliqua aute enim incididunt ad.</p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',marginBottom:20}}>
                <DetailsCard/>
                <DetailsCard/>
                <DetailsCard/>
                <DetailsCard/>
                <DetailsCard/>
                <DetailsCard/>
                <DetailsCard/>
                <DetailsCard/>
                <DetailsCard/>
                <DetailsCard/>
            </div>
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