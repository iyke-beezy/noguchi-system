import React from 'react';
import OrgForm from '../../components/form';
import './styles.css'

const OrgLogin =()=>{
    const image=require('../../assets/whiteGhana.png')
    return(
        <div className='login' style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>

                 <OrgForm/>                

        </div>
    );
}
export default OrgLogin;

