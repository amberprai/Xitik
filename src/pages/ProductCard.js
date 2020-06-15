import React from 'react';
import {Card , CardBody, CardTitle, ListGroup, ListGroupItem, CardImg} from "reactstrap"

const ProductCard= (product) =>{
    return(
 <Card border="success"  className="ml-5 mt-5 mr-5" style={{ width: '25rem', padding: "20px" }}>
    <CardImg variant="top" src={product.pic}/>
    <CardTitle tag="h3">{product.name}</CardTitle>
    <ListGroup className="flush" >
    <ListGroupItem color="success">Certification : {product.certification}</ListGroupItem>
    <ListGroupItem color="success">Voltage       : {product.voltage}</ListGroupItem>
    <ListGroupItem color="success">Load          : {product.load}</ListGroupItem>
    <ListGroupItem color="success">Color         : {product.color}</ListGroupItem>
    <ListGroupItem color="success">Warranty      : {product.warranty}</ListGroupItem>
    <ListGroupItem color="success">Battery       : {product.battery}</ListGroupItem>
    <ListGroupItem color="success">Backup        : {product.backup}</ListGroupItem>
    </ListGroup>
</Card>
    )
}

export default ProductCard;