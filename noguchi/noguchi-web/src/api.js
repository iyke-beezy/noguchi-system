import firebase from 'firebase'

const REACT_APP_API_URL= 'http://localhost:1337'

export const Post = async(url,body,token) => {
  const link = `${REACT_APP_API_URL}` + '/' + url;
  
  if (token){
     console.log(body)
   const response = await fetch(`${REACT_APP_API_URL}` + '/' + url, {
      method: 'POST',
      headers: {
         'Authorization':`Bearer ${token}`,
          'Content-Type': 'application/json',
      },
     body:body
   })
     
   if(response.ok){
      const data = await response.json()
      console.log(data)
      return data
  }

  const errMessage = await response.text()
  throw new Error(errMessage)

  return response; 
  }
  else{
  
   const response = await fetch(`${REACT_APP_API_URL}` + '/' + url, {
      method: 'POST',
      headers: {
           
          'Content-Type': 'application/json',
      },
     body:body
   })
     
   if(response.ok){
      const data = await response.json()
      console.log(data)
      return data
  }

  const errMessage = await response.text()
  throw new Error(errMessage)
 
  return response; 
 
  }
 




}



export const Get = async(url,token) => {
  const link = `${REACT_APP_API_URL}` + '/' + url;
  
  if (token){
    
   const response = await fetch(`${REACT_APP_API_URL}` + '/' + url, {
      method: 'GET',
      headers: {
         'Authorization':`Bearer ${token}`,
          'Content-Type': 'application/json',
      },
  
   })
     
   if(response.ok){
      const data = await response.json()
      return data
  }

  const errMessage = await response.text()
  throw new Error(errMessage)

  return response; 
  }
  else{
  
   const response = await fetch(`${REACT_APP_API_URL}` + '/' + url, {
      method: 'GET',
      headers: {
           
          'Content-Type': 'application/json',
      },
    
   })
     
   if(response.ok){
      const data = await response.json()
      return data
  }

  const errMessage = await response.text()
  throw new Error(errMessage)


  return response; 
 
  }
 




}



const firebaseConfig = {
   apiKey: "AIzaSyAmewLzrI0U6MGDV0Tn5xBjpy2ZNeou4-Y",
   authDomain: "noguchiidcs.firebaseapp.com",
   projectId: "noguchiidcs",
   storageBucket: "noguchiidcs.appspot.com",
   messagingSenderId: "823238592225",
   appId: "1:823238592225:web:8801b8d0d25394fb44d9a0"
 };

 export default firebase.initializeApp(firebaseConfig);