import React from "react";
import'./App.css';
import image from './me.png';
import images from './wa.png';
import Siva from './siva';

export default function Blue()
{
    return(
        <>
        <Siva/>
        <div className="dive">
            <h1 className="he">Congratulations</h1>
            <div className="bblue">
                 <div>
                    <img src={image} className="img1"/>
                </div>
                <div>
                    <h3 className="he3">Kiran V</h3>
                    <p className="para">vishnu Institue of compter Eduction and Technology,<br/>Bhimavaram</p>
                </div>
                <div>
                    <img src={images} className="img2"/>
                </div>
            </div>
            



        </div>
        </>
    );

}