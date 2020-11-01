import { Button, Card, Tabs } from 'antd';
import React,{useState} from 'react';

const {TabPane}=Tabs;

const Forum=()=>{
   const [activTab,setActiveTab]=useState(1);
    return(
        
        <>
   <div className='context'>
            <Card  title={<h1 style={{fontSize:20,color:'black',margin:0,textAlign:'left',padding:5}}>Forums</h1>} style={{minHeight:'90vh',width:'90%',borderRadius:15}}>
                    <Tabs tabPosition='left' style={{zIndex:'5000000'}}>
                    <TabPane tab="All Forums" key="1">
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                    </TabPane>
                    <TabPane tab="Disease Tags" key="2">
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                    </TabPane>
                    <TabPane tab="Community Tags" key="3">
                        <p>Content of Tab Pane 3</p>
                        <p>Content of Tab Pane 3</p>
                        <p>Content of Tab Pane 3</p>
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
        </>

    );
}
export default Forum;
{/* <div style={{minHeight:'100vh',width:'100%',display:'flex',flex:'row',justifyContent:'center',alignItems:'center',backgroundColor:'lightskyblue'}}>
            <Card title={<h1 style={{fontSize:25,margin:0,textAlign:'left',padding:5}}>Forums</h1>} style={{minHeight:'90vh',width:'90%',borderRadius:15}}>
                
            </Card>
        </div> */}