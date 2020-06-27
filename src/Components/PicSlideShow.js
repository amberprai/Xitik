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
import home4 from "../img/home4.jpg"
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
                <img src={led} className="img-fluid pl-3" height="auto" width="500"
             />
            </div>
          </div>
          <div className="each-slide">
            <div >
                <img src={pic1} className="img-fluid  pl-3"/>
            </div>
          </div>
          <div className="each-slide">
            <div >
                <img src={pic2} className="img-fluid  pl-3"/>
            </div>
          </div>
          <div className="each-slide">
            <div >
                <img src={pic3} className="img-fluid  pl-3"/>
            </div>
          </div>
          <div className="each-slide">
            <div >
                <img src={pic7} className="img-fluid  pl-3"/>
            </div>
          </div>
          <div className="each-slide">
            <div >
                <img src={pic8} className="img-fluid  pl-3"/>
            </div>
          </div>
          <div className="each-slide">
            <div >
                <img src={pic9} className="img-fluid  pl-3"/>
            </div>
          </div>
          <div className="each-slide">
            <div >
                <img src={pic10} className="img-fluid  pl-3"/>
            </div>
          </div>
          <div className="each-slide">
            <div >
                <img src={pic11} className="img-fluid  pl-3"/>
            </div>
          </div>
          
          
        </Slide>
        </Container>
      </div>
      </CardBody></Card>
    )
}


export default PicSlideShow;