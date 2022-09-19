import React from "react";
import'./App.css';
import image1 from './red.jpg';
import Siva from "./siva";
import image2 from './yellow.jpg';

 export function League()
 {
    return(
        <div>
            <Siva/>
        <div className="ldiv">
            
            <div>
                <h1 className="lhee">Super Over League</h1>
            </div>
            <div>
                <img src={image1} className='limg1'/>
                <img src={image2} className='limg2'/>
            </div>
            </div>

        </div>
    );
 }