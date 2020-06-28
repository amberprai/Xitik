import React from 'react'
import "../allcss/Slideshow.css"
import led from "../img/Capture.PNG"
import pic1 from "../img/product2.PNG"
import pic2 from "../img/product1.PNG"
import pic3 from "../img/product8.PNG"
import pic7 from "../img/product3.PNG"
import pic8 from "../img/product4.PNG"
import pic9 from "../img/product5.PNG"
import pic10 from "../img/product6.PNG"
import pic11 from "../img/product7.PNG"
import p1 from "../img/12new.png"
import p2 from "../img/2new.png"
import p3 from "../img/3new.png"
import p4 from "../img/mcbnew.png"
import p5 from "../img/5new.png"
import p6 from "../img/6new.png"
import p7 from "../img/7new.png"
import p8 from "../img/8new.png"
import p9 from "../img/1.png"
import p11 from "../img/11.png"
import { Container, Card,CardHeader,  CardBody} from 'reactstrap'
import { Slide } from 'react-slideshow-image';

 
 
const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const PicSlideShow = () => {
    return (
        <Card style={{ width: 'auto', 
        textAlign: 'center' }}
        className="mb-2"
         >
        <CardHeader style={{color:"white",backgroundColor: "#2B2B52"}} > <h1 className=" text-center  ml-2" style={{color:"white"}}><b> Checkout Our Smart Products Here</b> </h1></CardHeader>
     <CardBody >
      <div className="slide-container">
      <Container>
        <Slide {...properties}>
        <div className="each-slide">
            <div >
                <img src={p1} className="img-fluid pl-3" height="auto" width="300"
             />
            </div>
          </div>
          <div className="each-slide">
            <div >
                <img src={p2} className="img-fluid  pl-3" width="150"/>
            </div>
          </div>
          <div className="each-slide">
            <div >
                <img src={p3} className="img-fluid  pl-3" width="400"/>
            </div>
          </div>
          <div className="each-slide">
            <div >
                <img src={p4} className="img-fluid  pl-3" width="400" />
            </div>
          </div>
          <div className="each-slide">
            <div >
                <img src={p5} className="img-fluid  pl-3" height="auto" width="400" />
            </div>
          </div>
          <div className="each-slide">
            <div >
                <img src={p6} className="img-fluid  pl-3" width="300"/>
            </div>
          </div>
          <div className="each-slide">
            <div >
                <img src={p7} className="img-fluid  pl-3" width="300"/>
            </div>
          </div>
          <div className="each-slide">
            <div >
                <img src={p8} className="img-fluid  pl-3" width="200"/>
            </div>
          </div>
          <div className="each-slide">
            <div >
                <img src={p11} className="img-fluid  pl-3" width="250"/>
            </div>
          </div>
          
          
        </Slide>
        </Container>
      </div>
      </CardBody></Card>
    )
}


export default PicSlideShow;