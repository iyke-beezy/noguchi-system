//functions for API calls to the server
//login requires username, and password

const REACT_APP_API_URL= 'http://localhost:1337'
//const REACT_APP_API_URL= 'https://hostelwiz.herokuapp.com'
//const REACT_APP_FIREBASE_API_KEY= AIzaSyCUcV5erWI5t4vvDNVYs_RdG7s-WtzUDxc
//const REACT_APP_FIREBASE_AUTH_DOMAIN= hostelwiz.firebaseapp.com
//const REACT_APP_FIREBASE_DATABASE_URL= https://hostelwiz.firebaseio.com

export const get = (name) => {
    const response = await fetch(`${REACT_APP_API_URL}/${name}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    if(response.ok){
        const data = await response.json()
        return data
    }
    const errMessage = await response.text()
    throw new Error(errMessage)
}

export const searchProperty = async(loca) => {
 
     const response = await fetch(`${REACT_APP_API_URL}/hostelwiz/properties/search_property/`, {
        method: 'POST',
        headers: {
             
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location:loca })
     })
       
     if(response.ok){
        const data = await response.json()
        return data
    }

    const errMessage = await response.text()
    throw new Error(errMessage)
 }


 export const filterProperty = async(loca) => {
 
    const response = await fetch(`${REACT_APP_API_URL}/hostelwiz/properties/filter_property/`, {
       method: 'POST',
       headers: {
            
           'Content-Type': 'application/json',
       },
       body: JSON.stringify({ hostel_type:loca })
    })
      
    if(response.ok){
       const data = await response.json()
       return data
   }

   const errMessage = await response.text()
   throw new Error(errMessage)
}






