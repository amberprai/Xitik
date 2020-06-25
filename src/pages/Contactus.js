import React from 'react'
import{FcContacts} from "react-icons/fc"
import{FaGripLinesVertical} from "react-icons/fa"
import{BsBuilding} from "react-icons/bs"
import{GoDeviceMobile} from "react-icons/go"
import{GiWorld} from "react-icons/gi"
import{MdEmail} from "react-icons/md"
import { Row, Col, Container, Card, CardBody, CardHeader } from 'reactstrap'


const Contactus =() => {
    return (
        <>
    
         <Container>
        <Card style={{ width: 'auto', 
        textAlign: 'center', marginLeft: "auto",marginRight: "auto" }}
        className="mb-2 mt-5 pt-5"
         >
        <CardHeader style={{color:"white",backgroundColor: "#2B2B52",position: "center" }} >
            <Row >
             <FcContacts size="70" className="ml-2"/>
             <h1 className="ml-2 mt-3"><b> Quick Contact </b> </h1>
             </Row>
             </CardHeader>
     
        <CardBody >
    <hr/>
      <Row>
        <Col
          md="1"
          className="d-flex justify-content-center align-items-center"
        >
        </Col>
        <Col md="8">
         <Row>
             <BsBuilding style={{color: 'purple'}} size="25" />
             <div className="text-info ml-2"><h5>Xitik Technoism Private Limited</h5></div>
         </Row>
         <br/>
         <Row>
             <GoDeviceMobile style={{color: 'purple'}} size="25" />
             <div className="text-info ml-2"><h5>+91-7569198964 ,+91-7989246115</h5></div>
         </Row>
         <br/>

         <Row>
             <GiWorld style={{color: 'purple'}} size="25" />
             <div className="text-info ml-2"><h5>H.No. 6-113 Maisammaguda, RangaReddy ,<br/>Hyderabad, Telangana ,India - 500100</h5></div>
         </Row>
         <br/>

         <Row>
             <MdEmail style={{color: 'purple'}} size="25" />
             <div className="text-info ml-2"><h5>technoism2018@gmail.com</h5></div>
         </Row>
          </Col>
          </Row>
          <hr/>
    </CardBody>
    </Card>
    </Container>
   <br/>
   <br/>
   
    </>
    )
}

export default Contactus;