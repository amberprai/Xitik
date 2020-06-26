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

import { Col,Row, CardHeader, Card, CardBody, CardText, Container } from 'reactstrap';
import ProductCard2 from '../pages/ProductCard2';
import ProductCard3 from '../pages/ProductCard3';
import ProductCard4 from '../pages/ProductCart4';
import PicSlideShow from './PicSlideShow';


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
        <CardHeader style={{color:"white",backgroundColor: "#2B2B52"}} > <h1 className=" text-center  ml-2"><b> Product Gallery </b> </h1></CardHeader>
        <CardBody >
        <Container>
        <Row>
        <Col xs="auto"  lg={true} className="mr-4">
        <ProductCard pic={led} name="LED BULB" certification="BIS" voltage="110-240 V"  load="9/15/18 watt" color="Pearl White" warranty="2 years"
        backup="---" battery= "---"
        />
        </Col>
        <Col xs="auto" lg={true} className="mr-4">
        <ProductCard pic={led} name="INVERTER LED BULB" certification="BIS" voltage="110-240 V"  load="9/12 watt" color="Pearl White" warranty="2 years"
        backup="3-4 hrs" battery= "2600 mAh"
        />
        </Col>
        </Row>
        <br/>
        <Row >
        <Col xs="auto" lg={true} className=" ">
        <ProductCard2 pic={pic1} name="TOUCH WIFI ON/OFF + WI-FI FAN + DIMMER" certification="ROHS | FCC | SAA | CE " switches="4 (Normal)+ 1 (Fan)" connectivity="Wi-Fi" panel="Tempered Glass material"
        voltage="110-240 V" indicator="Available" size="146*86*38 mm" load="1000 Watt/Gang (Normal)+ 600 Watt (Fan)" 
        compatible="Alexa /Google Assistant" color="White/Black" warranty="1 year"
        />
        </Col>
        
        <Col xs="auto" lg={true} className="" >
        <ProductCard2 pic={pic2} name="TOUCH WIFI ON/OFF 8G" certification="ROHS | FCC | SAA | CE " switches="8" connectivity="Wi-Fi" panel="Tempered Glass material"
        voltage="110-240 V" indicator="Available" size="146*86*38 mm" load="600 Watt/Gang" 
        compatible="Alexa /Google Assistant" color="White/Black" warranty="1 year"
        />
        </Col>
        <Col xs="auto" lg={true} className="" >
        <ProductCard3 pic={pic3} name="TOUCH WIFI ON/OFF SOCKET+SWITCH" certification="ROHS | FCC | SAA | CE " switches="4" socket ="1" connectivity="Wi-Fi" panel="Tempered Glass material"
        voltage="110-240 V" indicator="Available" size="147*86*38 mm" sload="600 Watt/Gang" soload="16A"
        compatible="Alexa /Google Assistant" color="White/Black" warranty="1 year"
        />
        </Col>
        </Row>
        <br/>
        
        <Row>
        <Col  xs="auto" lg={true} className="">
        <ProductCard4 pic={pic8} name="WI-FI ON/OFF SWITCH MODULE+CONTROLLER" certification="ROHS | FCC |CE " module="1G/2G/3G/4G/6G" connectivity="Wi-Fi"
        voltage="110-240 V" indicator="Available"  rload="600 W" rcurrent="10 A"
         color="White" warranty="1 year" comp="Alexa /Google assistant"
        />
        </Col>
        <Col  xs="auto" lg={true} className="">
        <ProductCard4 pic={pic7} name="WI-FI ON/OFF MCB" certification="ROHS | FCC |CE " module="1P/2P/3P/4P" connectivity="Wi-Fi"
        voltage="110-240 V" indicator="Available"  rload="3000 W" rcurrent="30 A"
         color="White" warranty="1 year" comp="Alexa /Google assistant"
        />
        </Col>
        
        <Col  xs="auto" lg={true} className="">
        <ProductCard4 pic={pic9} name="WI-FI ON/OFF SWITCH MODULE" certification="ROHS | FCC |CE " module="1G/2G/3G/4G" connectivity="Wi-Fi"
        voltage="110-240 V" indicator="Available"  rload="2300 W" rcurrent="10 A"
         color="White" warranty="1 year" comp="Alexa /Google assistant"
        />
        </Col>
        </Row>
        <br/>
        <Row>
        <Col xs="auto" lg={true} className="">
        <ProductCard4 pic={pic10} name="DIAMOND SHAPE TOUCH WI-FI ON/OFF SWITCH" certification="ROHS | FCC |CE " module="1G/2G/3G" connectivity="Wi-Fi"
        voltage="110-240 V" indicator="Available"  rload="2200 Watt/Gang" rcurrent="---"
         color="White/Black" warranty="1 year"
        />
        </Col>
        <Col xs="auto" lg={true} className="">
        <ProductCard4 pic={pic11} name="REMOTE CONTROL SWITCH" certification="BIS" module="---" connectivity="RF"
        voltage="110-240 V" indicator="No"  rload="2200 Watt/Gang" rcurrent="10 A"
         color="White" warranty="1 year" comp="---"
        />
        </Col>
        </Row>
        </Container>
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