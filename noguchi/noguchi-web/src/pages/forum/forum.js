import { Button, Card, Tabs } from 'antd';
import React,{useState} from 'react';
import ForumList from '../../components/forumList';
import MainHeader from '../../components/mainHeader';
import TagSet from '../../components/tagSet';

const {TabPane}=Tabs;

const Forum=()=>{
   const [activTab,setActiveTab]=useState(1);
    return(
        
   <div >
    <MainHeader style={{zIndex:100000000000000}}/>
   <div className='context'>
            <Card title={<h1 style={{fontSize:20,textAlign:'left',padding:5}}>Forums</h1>}  style={{minHeight:'70vh',width:'90%',borderRadius:15}}>
                    <Tabs tabPosition='left' style={{zIndex:5000000}}>
                    <TabPane tab="All Forums" key="1">
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center',overflowY:'scroll',height:'63vh'}}>
                        <ForumList/>

                        </div>
                    </TabPane>
                    <TabPane tab="Disease Tags" key="2">
                    <div style={{height:'63vh',overflowY:'scroll'}}>
                            <TagSet/> 
                        </div>
                    </TabPane>
                    <TabPane tab="Community Tags" key="3">
                    <div style={{height:'63vh',overflowY:'scroll'}}>
                            <TagSet disease/> 
                        </div>
                    </TabPane>
                    </Tabs>
                  
            </Card>
            
        </div>


<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
        </div>

    );
}
export default Forum;
{/* <div style={{minHeight:'100vh',width:'100%',display:'flex',flex:'row',justifyContent:'center',alignItems:'center',backgroundColor:'lightskyblue'}}>
            <Card title={<h1 style={{fontSize:25,margin:0,textAlign:'left',padding:5}}>Forums</h1>} style={{minHeight:'90vh',width:'90%',borderRadius:15}}>
                
            </Card>
        </div> */}