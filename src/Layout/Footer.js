import React from 'react';
import "../allcss/Footer2.css"
import "../vendor/bootstrap/css/bootstrap-grid.css"
import "../vendor/bootstrap/css/bootstrap-grid.min.css"
import "../vendor/bootstrap/css/bootstrap-reboot.css"
import "../vendor/bootstrap/css/bootstrap-reboot.min.css"
import "../vendor/bootstrap/css/bootstrap.css"
import "../vendor/bootstrap/css/bootstrap.min.css"

 const Footer  = () =>{
   
     return(
      <html>
      <body>
        <footer style={{backgroundColor: "#3c0e4f"}}>
          
        <h5>© Xitik Technoism Pvt Ltd</h5>
        <h7>All Rights Reserved  | Copyright © 2019 </h7>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="/">Home </a>
          </li>|
          <li class="list-inline-item ml-3">
            <a href="#download"> About   </a>
          </li> |
          <li class="list-inline-item ml-3">
            <a href="/product"> Gallery   </a>
          </li> | 
          <li class="list-inline-item ml-3">
            <a href="/query"> Query   </a>
          </li> |
          <li class="list-inline-item ml-3">
            <a href="/admin"> Admin Login  </a>
          </li> |
          <li class="list-inline-item ml-3">
            <a href="/contactus">Contact Us </a>
          </li> 
        </ul>
      </footer>
      </body>
      </html>
     )
}

export default Footer;
