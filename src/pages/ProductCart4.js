import React from 'react';
import {Card , CardBody, CardTitle, ListGroup, ListGroupItem, CardImg} from "reactstrap"

const ProductCard4= (product) =>{
    return(
        <>
        <Card border="success"  className=" mt-5" style={{ width: '20rem', padding: "15px"  }}>
        <CardImg variant="top" src={product.pic}/>
        </Card>
        <Card>
    <CardTitle tag="h3">{product.name}</CardTitle>
    <ListGroup className="flush">
    <ListGroupItem color="primary">Certification : {product.certification}</ListGroupItem>
    <ListGroupItem color="primary">Module       : {product.module}</ListGroupItem>
    <ListGroupItem color="primary">Connectivity        : {product.connectivity}</ListGroupItem>
    <ListGroupItem color="primary">Voltage        : {product.voltage}</ListGroupItem>
    <ListGroupItem color="primary">Switch Indicator        : {product.indicator}</ListGroupItem>
    <ListGroupItem color="primary"> Rated Load      : {product.rload}</ListGroupItem>
    <ListGroupItem color="primary"> Rated Current      : {product.rcurrent}</ListGroupItem>
    <ListGroupItem color="primary">Compatible       : {product.comp}</ListGroupItem>
    <ListGroupItem color="primary">Color        : {product.color}</ListGroupItem>
    <ListGroupItem color="primary">Warranty        : {product.warranty}</ListGroupItem>
    </ListGroup>
</Card>
</>
    )
}

export default ProductCard4;