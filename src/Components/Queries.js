import React from 'react'
import firebase from "firebase/app"
import {toast} from "react-toastify"
import { Col, Row, Container, Card, CardHeader, CardBody } from 'reactstrap'
import { MdDelete } from "react-icons/md";





const Queries = ({messages,queryKey}) => {
const deleteQuery= () =>{
  firebase
  .database()
  .ref(`messages/${queryKey}`)
  .remove()
  .then(() => {
    toast("Deleted Successfully", {type: "success"})
  })
  .catch(err => console.log(err))
}

    return (
      <>
         
       <Row>
         <Col
           md="1"
           className="d-flex justify-content-center align-items-center mt-3 "
         >
         </Col>
         <Col md="8">
          <Row>
              <div className="text-info ml-2"><h6>{messages.name}</h6></div>
          </Row>
          <Row>
              <div className="text-info ml-2"><h6> {messages.email}</h6></div>
          </Row>
        
 
          <Row>
              <div className="text-info ml-2"><h6>"{messages.message}"</h6></div>
          </Row>
         
 
          <Row>
              <div className="text-info ml-2"><h6>{messages.newTime}</h6></div>
          </Row>
          <Col md="3" className="d-flex justify-content-center align-items-center">
            <MdDelete size="25"
            onClick={() => deleteQuery()}
            color="danger"
            className="text-danger icon"/>
           </Col>
           </Col>
           </Row>
    
     </>
    
    )
}
export default  Queries;