import React, { useState, useEffect } from "react";
import ImgSlider from "./ImgSlider";
import Mission from "./Mission";
import CoreValues from "./CoreValues";
import Certifications from "./Certiciations";

const Body = () => {
 return(
    <div>
        <ImgSlider/>
        <Mission/>
        <CoreValues/>
        <Certifications/>
       
    </div>
 )
}
export default Body