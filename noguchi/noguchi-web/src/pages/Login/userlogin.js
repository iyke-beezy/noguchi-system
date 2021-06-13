import React, {useState} from 'react';
import { UserForm } from '../../components/form';
import SignUpCard from '../../components/signUpCard';
import './styles.css'

<<<<<<< HEAD:noguchi/noguchi-web/src/pages/Login/userlogin.js
const UserLoginForm =()=>{
    const image=require('../../assets/whiteGhana.png')
=======
const OrgLogin =()=>{
>>>>>>> parent of 5b2abbb (reverted):noguchi/noguchi-web/src/pages/Login/login.js
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
