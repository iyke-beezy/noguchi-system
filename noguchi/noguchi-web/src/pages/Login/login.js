import React from 'react';
import OrgForm from '../../components/form';
import './styles.css'

const OrgLogin =()=>{
    const image=require('../../assets/whiteGhana.png')
    return(
        <div style={{height:'100vh',backgroundColor:'whitesmoke',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className='formwrap'>
                
                 <OrgForm/>                
            </div>

        </div>
    );
}
export default OrgLogin;

