import React from "react";
import'./App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import Siva from "./siva";


export function Review()
{
    return(
        <div>
            <Siva/>
        <div className="rdiv">
            <div className="rdiv1">
            <FontAwesomeIcon icon={faHeart} className="rf"/>
            <h4 className="rh3">Thank You</h4>
            <p className="rp">We will use your feedback to improve our customer support performance</p>

            </div>

        </div>
        </div>
    );
}
