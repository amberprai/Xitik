import React, { useState } from 'react';
import "../allcss/Navbar2.css"
import "../vendor/bootstrap/css/bootstrap-grid.css"
import "../vendor/bootstrap/css/bootstrap-grid.min.css"
import "../vendor/bootstrap/css/bootstrap-reboot.css"
import "../vendor/bootstrap/css/bootstrap-reboot.min.css"
import "../vendor/bootstrap/css/bootstrap.css"
import "../vendor/bootstrap/css/bootstrap.min.css"
import logo from "../img/logo2.png"
import {AiOutlineBars} from "react-icons/ai"
import { NavbarToggler, Collapse, Nav, NavItem,NavLink } from 'reactstrap';




 const Navbar  = () =>{

  const [isOpen,setisOpen]= useState(false)
  const toggle= () => setisOpen(!isOpen);

    return(
  <html>
    <body>
        <nav class="navbar navbar-expand-lg  fixed-top " style={{backgroundColor: "#3c0e4f"}} id="mainNav">
        <div class="container">
        <a href="/">  <img src={logo}  width="210" height="80" align="left" className="img1 ml-3"/></a>
          <div className="ml-auto ">
          <NavbarToggler onClick={toggle} style={{color:"white", backgroundColor:"#d35400"}} className="mr-5"><AiOutlineBars/></NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar >
            <ul class="navbar-nav ml-auto" style={{textIndent:"center"}} >
              <NavItem className="nav-item">
                <NavLink  href="/" >Home</NavLink >
              </NavItem>
              <NavItem class="nav-item">
                <NavLink   href="/product">Products</NavLink >
              </NavItem>
              <NavItem class="nav-item">
                <NavLink   href="/query">Query</NavLink >
              </NavItem>
              <NavItem class="nav-item">
                <NavLink   href="/contactus">Contact Us</NavLink >
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
