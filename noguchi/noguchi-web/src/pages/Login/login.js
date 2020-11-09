import React, {useState} from 'react';
import OrgForm from '../../components/form';
import SignUpCard from '../../components/signUpCard';
import './styles.css'

const OrgLogin =()=>{
    const image=require('../../assets/whiteGhana.png')
    const [login,setLogin]=useState(true);
    return(
        <div className='login' style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
                {
                    login?
                    <OrgForm onClick={() =>{setLogin(false)}}/> 
                    :
                    <SignUpCard onClick={() =>{setLogin(true)}}/> 
                }
                
                              

        </div>
    );
}
export default OrgLogin;

