import React from 'react';
import Img from "../img/house.jpeg"
import "../allcss/Header2.css"
import "../css/new-age.min.css"
import "../vendor/bootstrap/css/bootstrap-grid.css"
import "../vendor/bootstrap/css/bootstrap-grid.min.css"
import "../vendor/bootstrap/css/bootstrap-reboot.css"
import "../vendor/bootstrap/css/bootstrap-reboot.min.css"
import "../vendor/bootstrap/css/bootstrap.css"
import "../vendor/bootstrap/css/bootstrap.min.css"



 const Header  = () =>{

    return (     
    <header class="masthead">
    <div class="container h-100">
      <div class="row h-100">
        <div class="col-lg-7 my-auto">
          <div class="header-content mx-auto">
            <h1 class="mb-5"><b>Phones are Smart , Humans are Smart , We make Home Smart</b></h1>
            <a href="/product" class="btn btn-outline btn-xl js-scroll-trigger">Explore Now !</a>
          </div>
        </div>
        <div class="col-lg-5 my-auto">
          <div class="device-container">
            <div class="device-mockup iphone6_plus portrait white">
              <div class="device">
                <div class="screen">
                   {/*TODO:  image*/ }
                  <img src={Img} class="mr-4" alt="" width="450" height="450"/>
                </div>
                <div class="button">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
     </header>
  
    )

}

export default Header;
