import React from "react";
import'./App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSmile,faFaceAngry,faFaceSadTear} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Siva from "./siva";


export function Feedback()
{
    return(
        <div>
            <Siva/>
            <div className="fdiv">
                <div className="fdiv1">
                    <h3 className="fh1">How satisfied are you with our customer support performance?</h3>
                    
                    <Link to ='/Feedback1'><FontAwesomeIcon icon={faSmile} className="ff"/></Link>
                    <Link to ='/Feedback1'><FontAwesomeIcon icon={faFaceAngry} className="ff"/></Link>
                    <Link to ='/Feedback1'><FontAwesomeIcon icon={faFaceSadTear} className="ff"/></Link>
                      
                </div>
            </div>
            
        </div>
    );
}