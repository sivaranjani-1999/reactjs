import React, { useState } from "react";
import './App.css';
import Siva from "./siva";



 export  function Count()
 {
    const [Count,setCount]=useState(0);
    return(
        <div>
            <Siva/>
        <div>
            
             <div className="cdiv">
                <h1 className="ch1">{Count}</h1>
            </div>
            <div>
                <button onClick={() =>setCount(Count+1)} className="cbtn1">POSITIVE</button>
                <button onClick={() =>setCount(Count-1)} className="cbtn2">NEGATIVE</button>
            </div>    

        </div>
        </div>
    );
 }