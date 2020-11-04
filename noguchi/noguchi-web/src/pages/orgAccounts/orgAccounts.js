import React,{useState} from 'react';
import { Button, Card, Tabs,Row,Col,Divider,Modal } from 'antd';
import FormInput from '../../components/input'
import  '../../components/components.css';
import TagBox from '../../components/tagBox';
import ForumCard from '../../components/forumCard';
const {TabPane}=Tabs;
const style = { background: '#0092ff', padding: '8px 0',height:'180px', marginBottom:'10px',
color:'white',display:'flex',flexDirection:'Column',alignItems:'flex-start',fontSize:'15px' };
const adminStyle = { background: '#0092ff', padding: '8px 0',height:'180px' };
const showModal = {

}
const loginStyle={
    backgroundColor:"red"
}
const image=require('../../assets/whiteGhana.png');
class OrgAccounts extends React.Component {
    state = { visible: false,
                theKey:'',
                isKey:true,
                error:'wrong key'
     };

    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = e => {
      console.log(this.state.theKey);

      this.setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };

    handleChange = event => {
        this.setState({ theKey: event.target.value });
       
      };
  render(){
    return(
        <div className='accountCard' style={{maxHeight:'100vh',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'50px'}}>
            <Card  title={<h1 style={{fontSize:20,textAlign:'left',padding:5}}>Organization Name</h1>} style={{height:'auto',width:'80%',borderRadius:15}}>
            <Divider orientation="left">Admin</Divider>
                <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <div style={adminStyle}></div>
                    <div>Admin 1</div>
                </Col>
                <Col className="gutter-row" span={6}>
                <div style={adminStyle}></div>
                    <div>Admin 2</div>
                </Col>
                
                </Row>
                <Divider orientation="left">Others</Divider>
                <Row gutter={16}>
                <Col className="gutter-row"  span={6}>
                    <div style={style}>
                        <p>Name :Issah</p>
                        <p>Role : ...</p>
                        <p><Button  style={loginStyle,{marginTop:'40px',marginLeft:'5px',alignSelf:'flex-end'}} onClick={this.showModal} >Login </Button></p>
                        </div>
                        <div style={{marginBottom:'20px'}}>Issah</div>
                  
                </Col>
                                <Modal
                                    title="Enter Your Key"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                    >
                                   <FormInput
                                         
                                          name="key"
                                          type="text"
                                          value={this.state.theKey}
                                          onChange={this.handleChange}
                                          placeholder="Enter Key"
                                          error ={this.state.isKey ? "" : this.state.error}
                                          required
                                          className="formInput"
                                   />
                                   
                              </Modal>
                </Row>
            </Card>
                                

        </div>
    );
  }
}
export default OrgAccounts;