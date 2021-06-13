import React from 'react'
import { Redirect, Route } from 'react-router'

const ProtectedUserRoutes = ({component:Component,...rest}) => {
    const user=localStorage.getItem('currentUser')
    if(!user){
        return <Redirect to = "/login"/>
    }
    return <Route {...rest} render = {props=><Component {...props} {...rest} />}/> 
}

export default ProtectedUserRoutes