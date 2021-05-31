import { message } from 'antd'
import firebase from './api'


export const userSignUp=(email,password,name)=>{
    firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
        
        localStorage.setItem('currentUser',JSON.stringify(firebase.auth().currentUser))

        message.success('User Created Successfully')

        firebase.firestore().collection('endUsers').add({

            userID:firebase.auth().currentUser.uid,
            name:name,
        }).then(
            ()=>window.location.href='/other'

        )
    }).catch((error)=>{
        message.error(error.message)
    })
}

export const orgSignUp=(email,password,name)=>{
    firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
        localStorage.setItem('selectedOrg',JSON.stringify(firebase.auth().currentUser))
        message.success('Org Created Successfully')
        firebase.firestore().collection('organisations').add({
            organisationId:firebase.auth().currentUser.uid,
            organisationName:name,
        })
    }).catch((error)=>{
        message.error(error.message)
    })
}


export const UserLogin=(email,password)=>{
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        let result=firebase.firestore().collection('endUsers').where('userID','==',firebase.auth().currentUser.uid)
        if(result){
            message.success('Successfully Logged In')
        }
        else{
            message.error('Wrong Credentials')
        }
    }).catch((error)=>{
        message.error(error.message)

    })
}


export const OrgLogin=(email,password)=>{
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        let result=firebase.firestore().collection('organisations').where('organisationId','==',firebase.auth().currentUser.uid)
        if(result){
            message.success('Successfully Logged In')
        }
        else{
            message.error('Wrong Credentials')
        }
    }).catch((error)=>{
        message.error(error.message)

    })
}