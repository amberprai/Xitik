import React from 'react';
import {Card , CardBody, CardTitle, ListGroup, ListGroupItem, CardImg, Row, Col} from "reactstrap"
import pic11 from "../img/11.PNG"
import pic12 from "../img/12.PNG"
const ProductCard5= () =>{
    return(
        <>
<Col sm="6">      
 <Card border="success"  className="ml-5 mt-5 mb-5" style={{ width: '25rem', padding: "20px" }}>
    <CardImg variant="top" src={pic11}/>
    <CardTitle tag="h3">SMART VIDEO DOOR BELL</CardTitle>
    <ListGroup className="flush" >
    <ListGroupItem color="success">Power : Dry Battery</ListGroupItem>
    <ListGroupItem color="success">Battery       : 2600mAH</ListGroupItem>
    <ListGroupItem color="success">Pixel Lens       : 166 Wide Angle</ListGroupItem>
    <ListGroupItem color="success">TalkBack        : Two Way Speech Intercom</ListGroupItem>
    <ListGroupItem color="success">Connectivity       : Wi-Fi</ListGroupItem>
    <ListGroupItem color="success">Voltage        : 18-24</ListGroupItem>
    <ListGroupItem color="success">Size        : 147*86*38 mm</ListGroupItem>
    <ListGroupItem color="success">Switch Rated Load      : 2200 Watt/Gang</ListGroupItem>
    <ListGroupItem color="success">Standard Current      : 400uA</ListGroupItem>
    <ListGroupItem color="success">Operating Current      : 200mA</ListGroupItem>
    <ListGroupItem color="success">Working Humidity      : 10-50 degree</ListGroupItem>
    <ListGroupItem color="success">Compatible       : Alexa /Google assistant</ListGroupItem>
    <ListGroupItem color="success">Color        : Black</ListGroupItem>
    <ListGroupItem color="success">Warranty        : 1 year</ListGroupItem>
    </ListGroup>
</Card>
</Col>
</>
    )
}

export default ProductCard5;