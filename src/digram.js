import React from "react";
import'./App.css';
import images from'./words.jpg';
import { Siva } from "./siva";

export function Digram()
{
    return(
        <div>
            <Siva/>
            <img src={images} className='eee'/>
        </div>
    );
}