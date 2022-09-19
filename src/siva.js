import React from "react";
import { Link } from "react-router-dom";
import'./App.css';



export default function Siva()
{
    return(
        <div>
            <nav>
            <ul>
                <Link to="/"><li>Welcome</li></Link>
                <Link to="/Blue"><li>Blue</li></Link>
                <Link to="/League"><li>League</li></Link>
                <Link to="/Technology"><li>Technology</li></Link>
                <Link to="/Count"><li>Count</li></Link>
                <Link to="/Bana"><li>Bana</li></Link>
                <Link to="/Feedback"><li>Feedback</li></Link>
            </ul>
            </nav>            
        </div>
    );
}