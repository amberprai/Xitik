import React from 'react';
import "../allcss/Section2.css"
import "../vendor/bootstrap/css/bootstrap-grid.css"
import "../vendor/bootstrap/css/bootstrap-grid.min.css"
import "../vendor/bootstrap/css/bootstrap-reboot.css"
import "../vendor/bootstrap/css/bootstrap-reboot.min.css"
import "../vendor/bootstrap/css/bootstrap.css"
import "../vendor/bootstrap/css/bootstrap.min.css"
import rc from "../img/rc.jpg"
import rx from "../img/rx.jpg"
import ce from "../img/ce.png"
import fc from "../img/fc.png"
import {FaBuilding,FaRupeeSign} from "react-icons/fa"
import { RiEqualizerLine } from "react-icons/ri";



 const Section = () =>{

    return (
<html>
  <body>
 <section class="download bg-primary text-center" id="download">
    <div class="container">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <h2 class="section-heading" style={{color :'black'}}>Lets Discover what all the buzz is about!</h2>
          <p>"Xitik Technoism is an authorized vendors for serving smart electronic gadgets. We accompanied a great success in satisfying client with our best quality product. We are also very well known for our fast and furious services.  We use durable packaging material to pack these products and make them transportation friendly. Our high quality products have also gained us a Certificate of Incorporation from Govt. of India Ministry of Corporate Affairs."</p>
        </div>
      </div>
    </div>
  </section>

  <section class="features" id="features">
    <div class="container">
      <div class="section-heading text-center">
        <h2 style={{color :'black'}}>Latest Technology, Latest Product</h2>
        <p class="text-muted">We don’t make business, We make relations </p>
        <hr/>
      </div>
      <div class="row">
        <div class="col-lg-20">
          <div class="container-fluid">
            <div class="row">
            <div class="col-lg-3">
                <div class="feature-item ">
                  <FaRupeeSign size="100" style={{color: 'purple'}}/>
                  <h3>Great Value</h3>
                  <p class="text-muted">We offer competitive pricing on our variety of products.</p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="feature-item ">
                  <FaBuilding size="100" style={{color: 'purple'}}/>
                  <h3>Advance Infrastructure</h3>
                  <p class="text-muted">Smart products made at advanced infrastructure after procuring the finest raw materials from our reliable vendors.</p>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="feature-item ">
                  <RiEqualizerLine size="100" style={{color: 'purple'}}/>
                  <h3>Quality Testing</h3>
                  <p class="text-muted">Our all product comes under warranty and qualified with international certification.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="cta">
    <div class="cta-content">
      <div class="container">
        <h2>Why Us?</h2>
        <pp>Today, we are catering a large client base owing to the following main factors:</pp>
      <br/>
      <ul>

 	<li>Reliable product range</li>
 	<li>Highly managed solutions</li>
 	<li>Experienced professionals</li>
 	<li>On-time delivery </li>
 	<li>Stringent quality standards</li>
 	<li>Excellent vendor base</li>
   </ul>
      </div>
    </div>
    <div class="overlay"></div>
  </section>

  <section class="contact bg-primary" id="contact">
    <div class="container">
      <h2 style={{color :'black'}}> Certifications</h2> 
      
      
        <img src={rc} style={{height : 200  , width :200 ,padding: "20px"}}/>
      
        
        
        <img src={rx} style={{height : 200 , width :200, padding: "20px"}}/>
        
        
        <img src={fc} style={{height : 200 , width :200,padding: "20px"}}/>
       
        
        <img src={ce} style={{height : 200 , width :200, padding: "20px"}}/>
       
     
    </div>
  </section>
  </body>
</html>
    )

}

export default Section;
