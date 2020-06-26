import React from 'react';
import Img from "../img/housePics.png"
import "../allcss/Header2.css"
import "../vendor/bootstrap/css/bootstrap-grid.css"
import "../vendor/bootstrap/css/bootstrap-grid.min.css"
import "../vendor/bootstrap/css/bootstrap-reboot.css"
import "../vendor/bootstrap/css/bootstrap-reboot.min.css"
import "../vendor/bootstrap/css/bootstrap.css"
import "../vendor/bootstrap/css/bootstrap.min.css"
import Homefile from '../Components/Homefile';
import { Container } from 'reactstrap';



 const Header  = () =>{

    return (     
      <>
    <header class="masthead">
    <Homefile />
        <div class="col-lg-20">
          <div class="header-content " style={{textAlign : "center" , fontFamily : "Arial Black"}}>
            <h1 style={{color:"white"}}><b>"Welcome to Xitik"</b></h1>
            <h4 class="mb-4" style={{color:"white"}}><b>Light your dreamhouse with us</b></h4>
            <a href="/product" class="btn btn-outline btn-xl js-scroll-trigger ">Explore Now !</a>
          </div>
        </div>
     </header>
  </>
    )

}

export default Header;
