import React, { useState } from 'react';
import "../allcss/Navbar2.css"
import "../css/new-age.min.css"
import "../vendor/bootstrap/css/bootstrap-grid.css"
import "../vendor/bootstrap/css/bootstrap-grid.min.css"
import "../vendor/bootstrap/css/bootstrap-reboot.css"
import "../vendor/bootstrap/css/bootstrap-reboot.min.css"
import "../vendor/bootstrap/css/bootstrap.css"
import "../vendor/bootstrap/css/bootstrap.min.css"
import logo from "../img/logonew.png"
import { NavbarToggler, Collapse } from 'reactstrap';



 const Navbar  = () =>{

  const [isOpen,setisOpen]= useState(false)
  const toggle= () => setisOpen(!isOpen);

    return(
      
  <html>
    <body>
        <nav class="navbar navbar-expand-lg  fixed-top bg-dark " id="mainNav">
        <div class="container">
       <a href="/">  <img src={logo}  width="70" height="50" align="left" className=" ml-3"/></a>
          <a class="navbar-brand " href="/"><b>Xitik Technoism</b></a>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
          <div class="collapse navbar-collapse" id="navResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link " href="/#download">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/admin">Admin Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/product">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          </Collapse>
          </div>
      </nav>
      </body>
      </html>
    
    )

}

export default Navbar;
