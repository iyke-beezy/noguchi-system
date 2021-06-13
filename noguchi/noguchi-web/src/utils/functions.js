import { message } from 'antd'
import firebase from './api'
import {useHistory} from 'react-router-dom'

export const userSignUp=(email,password,name)=>{
    firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
        
        localStorage.setItem('currentUser',JSON.stringify(firebase.auth().currentUser))

        message.success('User Created Successfully')

        firebase.firestore().collection('endUsers').add({

            userID:firebase.auth().currentUser.uid,
            name:name,
        }).then(
            ()=>window.location.href='/userprofile'

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
        }).then(()=>{
            window.location.href='/orgAccounts'
        })
    }).catch((error)=>{
        message.error(error.message)
    })
}


export const UserLogin= async (email,password)=>{
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        let result=firebase.firestore().collection('endUsers').where('userID','==',firebase.auth().currentUser.uid)
        
        if(result){
            message.success('Successfully Logged In')
            localStorage.setItem('currentUser',JSON.stringify(firebase.auth().currentUser))
            window.location.href='/userprofile'
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
        let mainUser=[];
        result.onSnapshot(
            snapshot=>{
                snapshot.docs.map(
                    (d)=>{
                        console.log(d.id)
                        mainUser.push(d.id)
                        
                    }
                )
                console.log(mainUser)
                if(result){
                    let main1=mainUser[0]
                    message.success('Successfully Logged In')
                    console.log(main1)
                    localStorage.setItem('current_user',JSON.stringify(main1));
                    window.location.href='/entry'
                }
                else{
                    message.error('Wrong Credentials')
                }
                    }
                )
        
    }).catch((error)=>{
        message.error(error.message)

    })
}


// Create A Forum

export const createForum=(params)=>{
    firebase.firestore().collection('forums').add({
        author:params.author,
        community:params.community,
        content:params.content,
        description:params.description,
        disease:params.disease,
        replies:[],
        title:params.title,
    })
}

