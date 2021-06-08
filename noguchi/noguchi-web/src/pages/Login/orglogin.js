import React, {useState} from 'react';
import OrgForm from '../../components/form';
import { OrgSignUpCard } from '../../components/signUpCard';
import './styles.css'

const OrgLogin =()=>{
    const image=require('../../assets/whiteGhana.png')
    const [login,setLogin]=useState(true);
    return(
        <div className='login' style={{minHeight:'100vh',height:'auto',display:'flex',justifyContent:'center',alignItems:'center'}}>
                {
                    login?
                    <OrgForm onClick={() =>{setLogin(false)}}/> 
                    :
                    <OrgSignUpCard onClick={() =>{setLogin(true)}}/> 
                }
                
                              

        </div>
    );
}
export default OrgLogin;
