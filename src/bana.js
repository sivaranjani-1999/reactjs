
import './App.css';
import image1 from'./mango.jpg';
import image2 from './banana.jpg';
import { Count } from "./count";
import React, { useState } from "react";
import { Simulate } from 'react-dom/test-utils';
import Siva from './siva';


export function Bana()
{
    const [Count,setCount]=useState(0);
    const [Count1,setCount1]=useState(0);

    return(
        <div>
            <Siva/>
        <div className="bdiv">
            <div className="bdiv1">
                    <div>
                        <h1 className='bh1'>Bob ate {Count} mango {Count1} bananas</h1>
                    
                        <div>
                        <img src={image1} className="bimg1"/>
                        <img src={image2} className="bimg2"/>
                        </div>
                        
                        <button onClick={() =>setCount(Count+1)} className="bbtn1">MANGO</button>
                        <button onClick={() =>setCount1(Count1+1)} className="bbtn2">BANANA</button>  
                  </div>
                  </div>
            </div>


        </div>
    );
}