import React from 'react';
import {Card , CardBody, CardTitle, ListGroup, ListGroupItem, CardImg, CardHeader, Row, Col} from "reactstrap"

const ProductCard= (product) =>{
    return(
        <>
       
            
    <Card style={{ width: 'auto', 
        textAlign: 'center', marginLeft: "auto",marginRight: "auto"}}
        className="mb-2"
         >
        <CardHeader style={{color:"white",backgroundColor: "#2B2B52"}} > <h1 className=" text-center  ml-2"><b> Hello </b> </h1></CardHeader>
        <CardBody >
        <Row>
            <Col>
    <Card border="success"  className=" mt-5" style={{ width: '30rem', padding: "15px"  }}>
    <CardImg variant="top" src={product.pic}/>
    </Card>
    
    <ListGroup className="flush" style={{width: '40rem'}} >
    <ListGroupItem color="primary">Certification : {product.certification}</ListGroupItem>
    <ListGroupItem color="primary">Voltage       : {product.voltage}</ListGroupItem>
    <ListGroupItem color="primary">Load          : {product.load}</ListGroupItem>
    <ListGroupItem color="primary">Color         : {product.color}</ListGroupItem>
    <ListGroupItem color="primary">Warranty      : {product.warranty}</ListGroupItem>
    <ListGroupItem color="primary">Battery       : {product.battery}</ListGroupItem>
    <ListGroupItem color="primary">Backup        : {product.backup}</ListGroupItem>
    </ListGroup>
    </Col>
        </Row>
    </CardBody>
    </Card>
    
  </>
    )
}

export default ProductCard;