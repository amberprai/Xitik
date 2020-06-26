import React from 'react';
import {Card , CardBody, CardTitle, ListGroup, ListGroupItem, CardImg} from "reactstrap"

const ProductCard= (product) =>{
    return(
 <Card border="success"  className=" mt-5" style={{ width: '20rem', padding: "15px"  }}>
    <CardImg variant="top" src={product.pic}/>
    <CardTitle tag="h3">{product.name}</CardTitle>
    <ListGroup className="flush" >
    <ListGroupItem color="primary">Certification : {product.certification}</ListGroupItem>
    <ListGroupItem color="primary">Voltage       : {product.voltage}</ListGroupItem>
    <ListGroupItem color="primary">Load          : {product.load}</ListGroupItem>
    <ListGroupItem color="primary">Color         : {product.color}</ListGroupItem>
    <ListGroupItem color="primary">Warranty      : {product.warranty}</ListGroupItem>
    <ListGroupItem color="primary">Battery       : {product.battery}</ListGroupItem>
    <ListGroupItem color="primary">Backup        : {product.backup}</ListGroupItem>
    </ListGroup>
</Card>
    )
}

export default ProductCard;