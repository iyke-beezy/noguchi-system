import React, {useState} from 'react';
import { UserForm } from '../../components/form';
import SignUpCard from '../../components/signUpCard';
import './styles.css'

const UserLoginForm =()=>{
    const image=require('../../assets/whiteGhana.png')
    const [login,setLogin]=useState(true);
    return(
        <div className='login' style={{minHeight:'100vh',height:'auto',display:'flex',justifyContent:'center',alignItems:'center'}}>
                {
                    login?
                    <UserForm onClick={() =>{setLogin(false)}}/> 
                    :
                    <SignUpCard onClick={() =>{setLogin(true)}}/> 
                }
                
                              

        </div>
    );
}
export default UserLoginForm;
