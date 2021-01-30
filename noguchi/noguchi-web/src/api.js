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