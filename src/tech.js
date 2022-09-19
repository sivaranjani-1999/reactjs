import React from "react";
import './App.css';
import amma from'./amma.jpeg';
import appa from'./appa.jpeg';
import akka from'./akka.jpeg';
import papa from'./sathiyan.jpeg';
import Siva from "./siva";


export function Technology()
{
    return(
        <div>
            <Siva/>
        
           
        <div className="tdiv">
            
                       <h1 className="th1">My Family</h1>
            <h5>My family is my world.
                with out my mom and dad without
                 they i am not here,thank you appa amma for giving me super world,
                 you are sacrifices me everything for me,
                 thank you for that
                 ,you are my comfort zone
                 forever </h5>
             <div>
            
            </div>
        
            <div className="tdiv2">
                <div>
                    <h4 className="th4">MOTHER</h4>
                    <h5 className="th5">mother is sweetest person ever.
                        And she always sacrifices her life for me
                        .miss u amma.... love lot</h5>
                    <div>
                        <img src={amma} className="timg"/>
                    </div>
        
                </div>
        
        

                <div className="tdiv3">
                    <div>
                        <h4 className="th4">FATHER</h4>
                        <h5 className="th5">Father...the letter 5 means a lot,
                        a single line"dad is my super hero for ever"
                        miss you appa...</h5>
                    </div>
                        <div>
                        <img src={appa} className="timg"/>
                        </div>
                </div>
            </div>
            <div className="tdiv4">
                <div>
                    <h4 className="th4">SISTER AND MAMA</h4>
                    <h5 className="th5">Sister is my good solu i can share every thing 
                        and my 1st best frd...and
                         mama is my second father to me
                         .always being good appa...</h5>
                         <div>
                         <img src={akka} className="timg"/>
                         </div>
                </div>
                <div className="tdiv5">
                    <div>
                        <h4 className="th4">SAKTIKA,SATHIYAN</h4>
                        <h5 className="th5">sathika is my daughter and my cutiee pyieee,
                             and sathiyan is on the way he is my second son to me
                              waiting to see you sathiyan...
                               miss u sathika</h5>
                               <div>
                               <img src={papa} className="timg"/>
                               </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
       );
}