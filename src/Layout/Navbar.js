import React, { useState } from 'react';
import "../allcss/Navbar2.css"
import "../vendor/bootstrap/css/bootstrap-grid.css"
import "../vendor/bootstrap/css/bootstrap-grid.min.css"
import "../vendor/bootstrap/css/bootstrap-reboot.css"
import "../vendor/bootstrap/css/bootstrap-reboot.min.css"
import "../vendor/bootstrap/css/bootstrap.css"
import "../vendor/bootstrap/css/bootstrap.min.css"
import logo from "../img/logonew.png"
import { NavbarToggler, Collapse, Nav, NavItem,NavLink } from 'reactstrap';




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
          <div className="ml-auto ">
          <NavbarToggler onClick={toggle}style={{color:"white"}} className="mr-5">Menu </NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar >
          
            <ul class="navbar-nav ml-auto" style={{textIndent:"center"}} >
              <NavItem className="nav-item " >
                <NavLink  href="/#download" >About</NavLink >
              </NavItem>
              <NavItem class="nav-item">
                <NavLink   href="/admin" >Admin Login</NavLink >
              </NavItem>
              <NavItem class="nav-item">
                <NavLink   href="/product" >Products</NavLink >
              </NavItem>
              <NavItem class="nav-item">
                <NavLink   href="/contact" >Contact</NavLink >
              </NavItem>
            </ul>
   
          </Nav>
          </Collapse>
          </div>
          </div>
      </nav>
      </body>
      </html>
    
    )

}

export default Navbar;
