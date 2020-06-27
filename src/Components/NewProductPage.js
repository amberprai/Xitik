import React from 'react'
import led from "../img/Capture.PNG"
import pic1 from "../img/product2.PNG"
import pic2 from "../img/product1.PNG"
import pic3 from "../img/product8.PNG"
import pic7 from "../img/product3.PNG"
import pic8 from "../img/product4.PNG"
import pic9 from "../img/product5.PNG"
import pic10 from "../img/product6.PNG"
import pic11 from "../img/product7.PNG"

const NewProductPage = () => {
    return (
        <div>
            <div class="container py-5">
    <div class="row">
        <div class="col-lg-10 mx-auto">
     
            <ul class="list-group shadow">
              
                <li class="list-group-item">
                
                    <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div class="media-body order-2 order-lg-1">
                           <a href="product1"> <h5 class="mt-0 font-weight-bold mb-2" style={{color:"black"}} >LED BULB</h5></a>
                        </div><img src={led} alt="Generic placeholder image" width="260" class="ml-lg-5 order-1 order-lg-2"/>
                    </div> 
                </li> 
                <li class="list-group-item">
                
                    <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div class="media-body order-2 order-lg-1">
                          <a href="product2"> <h5 class="mt-0 font-weight-bold mb-2" style={{color:"black"}}>INVERTER LED BULB</h5></a>
                        </div><img src={led} alt="Generic placeholder image" width="260" class="ml-lg-5 order-1 order-lg-2"/>
                    </div> 
                </li> 
                <li class="list-group-item">

                    <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div class="media-body order-2 order-lg-1">
                          <a href="product3"> <h5 class="mt-0 font-weight-bold mb-2" style={{color:"black"}}>TOUCH WIFI ON/OFF + WI-FI FAN + DIMMER</h5></a>
                        </div><img src={pic1} alt="Generic placeholder image" width="260" class="ml-lg-5 order-1 order-lg-2"/>
                    </div> 
                </li> 
        
                <li class="list-group-item">
                    <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div class="media-body order-2 order-lg-1">
                          <a href="product4"> <h5 class="mt-0 font-weight-bold mb-2" style={{color:"black"}}>TOUCH WIFI ON/OFF 8G</h5></a>
                        </div>
                        <img src={pic2} alt="Generic placeholder image" width="260" class="ml-lg-5 order-1 order-lg-2"/>
                    </div> 
                </li> 
            
                <li class="list-group-item">
            
                    <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div class="media-body order-2 order-lg-1">
                          <a href="product5"> <h5 class="mt-0 font-weight-bold mb-2" style={{color:"black"}}>TOUCH WIFI ON/OFF SOCKET+SWITCH</h5></a>
                        </div><img src={pic3} alt="Generic placeholder image" width="260" class="ml-lg-5 order-1 order-lg-2"/>
                    </div> 
                </li> 
                <li class="list-group-item">
            
                    <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div class="media-body order-2 order-lg-1">
                          <a href="product6"> <h5 class="mt-0 font-weight-bold mb-2" style={{color:"black"}}>WI-FI ON/OFF MCB</h5></a>
                        </div><img src={pic7} alt="Generic placeholder image" width="260" class="ml-lg-5 order-1 order-lg-2"/>
                    </div> 
                </li> 
                <li class="list-group-item">
            
                    <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div class="media-body order-2 order-lg-1">
                          <a href="product7"> <h5 class="mt-0 font-weight-bold mb-2" style={{color:"black"}}>WI-FI ON/OFF SWITCH MODULE+CONTROLLER</h5></a>
                        </div><img src={pic8} alt="Generic placeholder image" width="260" class="ml-lg-5 order-1 order-lg-2"/>
                    </div> 
                </li> 
                <li class="list-group-item">
            
                    <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div class="media-body order-2 order-lg-1">
                          <a href="product8"> <h5 class="mt-0 font-weight-bold mb-2" style={{color:"black"}}>WI-FI ON/OFF SWITCH MODULE</h5></a>
                        </div><img src={pic9} alt="Generic placeholder image" width="260" class="ml-lg-5 order-1 order-lg-2"/>
                    </div> 
                </li> 
                <li class="list-group-item">
            
                    <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div class="media-body order-2 order-lg-1">
                          <a href="product9"> <h5 class="mt-0 font-weight-bold mb-2" style={{color:"black"}}>DIAMOND SHAPE TOUCH WI-FI ON/OFF SWITCH</h5></a>
                        </div><img src={pic10} alt="Generic placeholder image" width="260" class="ml-lg-5 order-1 order-lg-2"/>
                    </div> 
                </li> 
                <li class="list-group-item">
            
                    <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div class="media-body order-2 order-lg-1">
                          <a href="product10"> <h5 class="mt-0 font-weight-bold mb-2" style={{color:"black"}}>REMOTE CONTROL SWITCH</h5></a>
                        </div><img src={pic11} alt="Generic placeholder image" width="260" class="ml-lg-5 order-1 order-lg-2"/>
                    </div> 
                </li> 
            </ul> 
        </div>
    </div>
</div>
        </div>
    )
}

export default  NewProductPage;