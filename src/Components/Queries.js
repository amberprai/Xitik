import React from 'react'
import firebase from "firebase/app"
import {toast} from "react-toastify"
import { Col, Row, Container } from 'reactstrap'
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
      <Container>
        <div className="mt-5 ml-5 mb-5">
        <Row>
            <Col md="10" className="d-flex justify-content-center align-items-center ">
    
    <div className="text-primary pl-1">{messages.name}</div>
    
    <div className="text-secondary pl-2">{messages.email}</div>
    <div className="text-info pl-2">{messages.message}</div>
    </Col>
    <Col md="2" className="d-flex justify-content-center align-items-center">
            <MdDelete
            onClick={() => deleteQuery()}
            color="danger"
            className="text-danger icon"
          />
    <Col >
    <Row md="4">
    <h6 className="text-info pl-5">{messages.newTime} IST</h6>
    </Row>
    </Col>
            
          </Col>
        </Row>

        </div>
        </Container>
    
    )
}
export default  Queries;