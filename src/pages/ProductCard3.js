import React from 'react';
import {Card , CardBody, CardTitle, ListGroup, ListGroupItem, CardImg} from "reactstrap"

const ProductCard3= (product) =>{
    return(
 <Card border="success"  className="mt-5" style={{ width: '20rem', padding: "15px" }}>
    <CardImg variant="top" src={product.pic}/>
    <CardTitle tag="h3">{product.name}</CardTitle>
    <ListGroup className="flush" >
    <ListGroupItem color="primary">Certification : {product.certification}</ListGroupItem>
    <ListGroupItem color="primary">Switches       : {product.switches}</ListGroupItem>
    <ListGroupItem color="primary">Socket       : {product.socket}</ListGroupItem>
    <ListGroupItem color="primary">Connectivity        : {product.connectivity}</ListGroupItem>
    <ListGroupItem color="primary">Panel Material        : {product.panel}</ListGroupItem>
    <ListGroupItem color="primary">Voltage        : {product.voltage}</ListGroupItem>
    <ListGroupItem color="primary">Switch Indicator        : {product.indicator}</ListGroupItem>
    <ListGroupItem color="primary">Size        : {product.size}</ListGroupItem>
    <ListGroupItem color="primary">Switch Rated Load      : {product.sload}</ListGroupItem>
    <ListGroupItem color="primary">Socket Rated Load      : {product.soload}</ListGroupItem>
    <ListGroupItem color="primary">Compatible       : {product.compatible}</ListGroupItem>
    <ListGroupItem color="primary">Color        : {product.color}</ListGroupItem>
    <ListGroupItem color="primary">Warranty        : {product.warranty}</ListGroupItem>
    </ListGroup>
</Card>
    )
}

export default ProductCard3;