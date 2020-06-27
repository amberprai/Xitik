import React from 'react'
import "../allcss/Slideshow2.css"
import home1 from "../img/home1.jpg"
import home2 from "../img/home2.jpg"
import home3 from "../img/home3.jpg"
import home4 from "../img/home4.jpg"
import { Fade  } from 'react-slideshow-image';


const fadeProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
  }

const Homefile=() => {
    return (

        <div className="slide-container">
        <Fade  {...fadeProperties}>
        <div className="each-slide">
            <div >
                <img src={home1} className="img-fluid pl-2 pr-2"/>
            </div>
          </div>
          <div className="each-slide">
            <div >
                <img src={home2} className="img-fluid pl-2 pr-2"/>
            </div>
          </div>
          <div className="each-slide">
            <div >
                <img src={home3} className="img-fluid pl-2 pr-2"/>
            </div>
          </div>
          <div className="each-slide">
            <div >
                <img src={home4} className=" img-fluid pl-2 pr-2"/>
            </div>
          </div>
          
        </Fade >
      </div>
    )
}

export default Homefile;
