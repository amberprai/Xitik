import React from 'react';
import {Card , CardBody, CardTitle, ListGroup, ListGroupItem, CardImg, Row, Col} from "reactstrap"
import pic12 from "../img/12.PNG"
const ProductCard6= () =>{
    return(
        <>
        <Row>
<Col sm="6">
 <Card border="success"  className="ml-5 mt-5" style={{ width: '25rem', padding: "20px" }}>
 <CardImg variant="top" src={pic12}/>
 <CardTitle tag="h3">SMART DOOR LOCK</CardTitle>
 <ListGroup className="flush" >
 <ListGroupItem color="success">Material : Aluminium Alloy</ListGroupItem>
 <ListGroupItem color="success">Unlock Features       : Key | Mobile | FingerPrint | Card | Passcode </ListGroupItem>
 <ListGroupItem color="success">Connectivity       : Wi-Fi</ListGroupItem>
 <ListGroupItem color="success">Color        : Black Nickel</ListGroupItem>
 <ListGroupItem color="success">Warranty        : 2 years</ListGroupItem>
 </ListGroup>
</Card>
</Col>
</Row>
</>
    )
}

export default ProductCard6;