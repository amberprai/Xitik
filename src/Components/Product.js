import React from 'react';
import ProductCard from '../pages/ProductCard';
import led from "../img/Capture.PNG"
import pic1 from "../img/product2.PNG"
import pic2 from "../img/product1.PNG"
import pic3 from "../img/product8.PNG"
import pic7 from "../img/product3.PNG"
import pic8 from "../img/product4.PNG"
import pic9 from "../img/product5.PNG"
import pic10 from "../img/product6.PNG"
import pic11 from "../img/product7.PNG"

import { Col,Row, CardHeader, Card, CardBody, CardText, Container, CardImg, CardFooter, Button } from 'reactstrap';
import ProductCard2 from '../pages/ProductCard2';
import ProductCard3 from '../pages/ProductCard3';
import ProductCard4 from '../pages/ProductCart4';
import PicSlideShow from './PicSlideShow';
import NewProductPage from './NewProductPage';


const Product = () =>{

    return(
        <>
        <br/>
        <br/>
        <br/>
        <br/>        
        <PicSlideShow />
        <Card style={{ width: 'auto', 
        textAlign: 'center', marginLeft: "auto",marginRight: "auto"}}
        className="mb-2"
         >
        <CardHeader style={{color:"white",backgroundColor: "#2B2B52"}} > <h1 className=" text-center  ml-2" style={{color:"white"}}><b> Product Listing </b> </h1></CardHeader>
        <CardBody style={{backgroundColor: "#2B2B52"}}>
          <NewProductPage/>
        </CardBody>
</Card>
<Card
    style={{ width: 'auto', 
    textAlign: 'center' }}
    className="mb-2"
    color="warning" 
    className="ml-1 mr-1 mb-3"
  >
  <CardHeader style={{color:"white"}}> *Note*</CardHeader>
    <CardBody >
      <CardText style={{color:"white"}} >
        Prices are not mentioned on the website as it varies according to quantity. Please Submit the query on Query page or simply drop an mail to "technoism2018@gmail.com".
      </CardText>
    </CardBody>

  </Card>
    </>
    )



}

export default Product