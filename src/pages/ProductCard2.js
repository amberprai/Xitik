import React from 'react';
import {Card , CardBody, CardTitle, ListGroup, ListGroupItem, CardImg} from "reactstrap"

const ProductCard2= (product) =>{
    return(
 <Card border="success"  className="ml-5 mt-5" style={{ width: '25rem', padding: "20px" }}>
    <CardImg variant="top" src={product.pic}/>
    <CardTitle tag="h3">{product.name}</CardTitle>
    <ListGroup className="flush" >
    <ListGroupItem color="success">Certification : {product.certification}</ListGroupItem>
    <ListGroupItem color="success">Switches       : {product.switches}</ListGroupItem>
    <ListGroupItem color="success">Connectivity        : {product.connectivity}</ListGroupItem>
    <ListGroupItem color="success">Panel Material        : {product.panel}</ListGroupItem>
    <ListGroupItem color="success">Voltage        : {product.voltage}</ListGroupItem>
    <ListGroupItem color="success">Switch Indicator        : {product.indicator}</ListGroupItem>
    <ListGroupItem color="success">Size        : {product.size}</ListGroupItem>
    <ListGroupItem color="success">Switch Rated Load      : {product.load}</ListGroupItem>
    <ListGroupItem color="success">Compatible       : {product.compatible}</ListGroupItem>
    <ListGroupItem color="success">Color        : {product.color}</ListGroupItem>
    <ListGroupItem color="success">Warranty        : {product.warranty}</ListGroupItem>
    </ListGroup>
</Card>
    )
}

export default ProductCard2;