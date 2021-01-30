import React,{useState} from 'react'
import {Row,Col,Button} from 'antd'
import {SurveyForm} from './surveyForm'
import {CommunityForm} from './communityForm'
import {DiseaseForm} from './diseaseForm'
export const Survey = () =>{
  
  const [page,setPage] = useState('three');
  function Displays() {
    if (page ==='one'){
        return(<SurveyForm />)
    }
    else if(page === 'two'){
        return(<CommunityForm />)
    }
    else if(page === 'three'){
        return(<DiseaseForm />)
        }
  }

    return(
       <React.Fragment>
            <Row  className="requestBody">
               <Col style={{display:"flex",flexDirection:"column",backgroundColor:"white",justifyContent:"space-around",height:"300px",padding:"0px 10px",marginRight:"10px"}} xs={24} md={6}>
                    <Col style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
                        <Button onClick={()=>{setPage('three')}}  className="addbtn">
                            +
                        </Button>
                        <text style={{paddingLeft:"5px"}}>
                            Add Disease
                        </text>
                    </Col>
                    <Col style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
                        <Button onClick={()=>{setPage('two')}} className="addbtn">
                            +
                        </Button>
                        <text style={{paddingLeft:"5px"}}>
                            Add community 
                        </text>
                    </Col>
                    <Col style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
                        <Button onClick={()=>{setPage('one')}} className="addbtn">
                            +
                        </Button>
                        <text style={{paddingLeft:"5px"}}>
                            Add questions to disease
                        </text>
                    </Col>
               </Col>

               <Col style={{backgroundColor:"white" ,padding:"30px 10px"}} xs={24} md={17}>
                <Displays />
               </Col>
           </Row>
       </React.Fragment>
    )

    
  
}

