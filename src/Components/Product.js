import React from 'react';
import ProductCard from '../pages/ProductCard';
import led from "../img/Capture.PNG"
import pic1 from "../img/1.PNG"
import pic2 from "../img/2.PNG"
import pic3 from "../img/3.PNG"
import pic4 from "../img/4.PNG"
import pic5 from "../img/5.PNG"
import pic6 from "../img/6.PNG"
import pic7 from "../img/7.PNG"
import pic8 from "../img/8.PNG"
import pic9 from "../img/9.PNG"
import pic10 from "../img/10.PNG"

import { Col,Row, CardHeader, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import ProductCard2 from '../pages/ProductCard2';
import ProductCard3 from '../pages/ProductCard3';
import ProductCard4 from '../pages/ProductCart4';
import ProductCard5 from '../pages/ProductCart5';
import ProductCard6 from '../pages/ProductCard6';
import { toast } from 'react-toastify';


const Product = () =>{

    return(
        <>
        <h1>Hello </h1>
        <h1 className="pt-5 text-center mt-5"> Checkout Our Smart Products Here !! </h1>
        <Row>
        <Col sm="6">
        <ProductCard pic={led} name="LED BULB" certification="BIS" voltage="110-240 V"  load="9/15/18 watt" color="Pearl White" warranty="2 years"
        backup="---" battery= "---"
        />
        </Col>
        <Col sm="6">
        <ProductCard pic={led} name="INVERTER LED BULB" certification="BIS" voltage="110-240 V"  load="9/12 watt" color="Pearl White" warranty="2 years"
        backup="3-4 hrs" battery= "2600 mAh"
        />
        </Col>
        </Row>
        <br/>
        <Row>
        <Col sm="4">
        <ProductCard2 pic={pic1} name="TOUCH WIFI ON/OFF + WI-FI FAN + DIMMER" certification="ROHS | FCC | SAA | CE " switches="4 (Normal)+ 1 (Fan)" connectivity="Wi-Fi" panel="Tempered Glass material"
        voltage="110-240 V" indicator="Available" size="146*86*38 mm" load="1000 Watt/Gang (Normal)+ 600 Watt (Fan)" 
        compatible="Alexa /Google Assistant" color="White/Black" warranty="1 year"
        />
        </Col>
        
        <Col sm="4">
        <ProductCard2 pic={pic2} name="TOUCH WIFI ON/OFF 8G" certification="ROHS | FCC | SAA | CE " switches="8" connectivity="Wi-Fi" panel="Tempered Glass material"
        voltage="110-240 V" indicator="Available" size="146*86*38 mm" load="600 Watt/Gang" 
        compatible="Alexa /Google Assistant" color="White/Black" warranty="1 year"
        />
        </Col>
        <Col sm="4">
        <ProductCard3 pic={pic3} name="TOUCH WIFI ON/OFF SOCKET+SWITCH" certification="ROHS | FCC | SAA | CE " switches="4" socket ="1" connectivity="Wi-Fi" panel="Tempered Glass material"
        voltage="110-240 V" indicator="Available" size="147*86*38 mm" sload="600 Watt/Gang" soload="16A"
        compatible="Alexa /Google Assistant" color="White/Black" warranty="1 year"
        />
        </Col>
        </Row>
        <br/>
        <Row>
        <Col sm="4">
        <ProductCard3 pic={pic4} name="TOUCH WI-FI ON/OFF SOCKET" certification="ROHS | FCC | SAA | CE " switches="---" socket ="1" connectivity="Wi-Fi" panel="Tempered Glass material"
        voltage="110-240 V" indicator="Available" size="147*86*38 mm" sload="---" soload="<15A"
        compatible="Alexa /Google Assistant" color="White/Black" warranty="1 year"
        />        
        </Col>
        <Col sm="4">
        <ProductCard3 pic={pic5} name="TOUCH WI-FI ON/OFF SOCKET" certification="ROHS | FCC | SAA | CE " switches="--- " socket ="2 + 2(USB)" connectivity="Wi-Fi" panel="Tempered Glass material"
        voltage="110-240 V" indicator="Available" size="147*86*38 mm" sload="---" soload="<15A"
        compatible="Alexa /Google Assistant" color="White/Black" warranty="1 year"
        />
        </Col>
        <Col sm="4">
        <ProductCard4 pic={pic6} name="WI-FI ON/OFF MODULE" certification="ROHS | FCC |CE " module="1" connectivity="Wi-Fi"
        voltage="110-240 V" indicator="Available"  rload="3000 W" rcurrent="30 A"
         color="White" warranty="1 year"
        />
        </Col>
        <br/>
        </Row>
        <Row>
        <Col sm="4">
        <ProductCard4 pic={pic7} name="WI-FI ON/OFF MCB" certification="ROHS | FCC |CE " module="1P/2P/3P/4P" connectivity="Wi-Fi"
        voltage="110-240 V" indicator="Available"  rload="3000 W" rcurrent="30 A"
         color="White" warranty="1 year"
        />
        </Col>
        <Col sm="4">
        <ProductCard4 pic={pic8} name="WI-FI ON/OFF SWITCH MODULE+CONTROLLER" certification="ROHS | FCC |CE " module="1G/2G/3G/4G/6G" connectivity="Wi-Fi"
        voltage="110-240 V" indicator="Available"  rload="600 W" rcurrent="10 A"
         color="White" warranty="1 year"
        />
        </Col>
        <Col sm="4">
        <ProductCard4 pic={pic9} name="WI-FI ON/OFF SWITCH MODULE" certification="ROHS | FCC |CE " module="1G/2G/3G/4G" connectivity="Wi-Fi"
        voltage="110-240 V" indicator="Available"  rload="2300 W" rcurrent="10 A"
         color="White" warranty="1 year"
        />
        </Col>
        </Row>
        <br/>
        <Row>
        <Col sm="4">
        <ProductCard4 pic={pic10} name="DIAMOND SHAPE TOUCH WI-FI ON/OFF SWITCH" certification="ROHS | FCC |CE " module="1G/2G/3G" connectivity="Wi-Fi"
        voltage="110-240 V" indicator="Available"  rload="2200 Watt/Gang" rcurrent="---"
         color="White/Black" warranty="1 year"
        />
        </Col>
        <Col sm="4">
        <ProductCard5/>
        </Col>
        <Col sm="4">
        <ProductCard6/>
        </Col>
        </Row>


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
        Prices are not mentioned on the website as it varies according to quantity. Please Submit the query on Contact page or simply drop an mail to technoism2018@gmail.com
      </CardText>
    </CardBody>

  </Card>
    </>
    )



}

export default Product