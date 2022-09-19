import React from "react";
import './App.css';
import img from './img.jpg'
import { Siva } from "./siva";

export function Menu()
{
    return(
        <div>
            <Siva/>
            <div>
              <h1 className=" d-flex">HELLO YOU ALL GET IN TO A NEW WORLD</h1>
            </div>
            <img src={img} className="imgs"/>
          
        </div>
    );

}