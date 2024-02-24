import React, { useState } from 'react'
import './LoginSignup.css'
import { useNavigate ,Link , NavLink} from 'react-router-dom';
const Disconnectfb = ()=>{
    return(
        <div>
            <div className="container">
                <div className="header">
                    <div className="text">Facebook Page Integration</div>
                    
                    <div className="subtext">Integrated Page : <b>Amazon Business</b></div>
                </div>
                <div className="submit-container">
                    <button type='submit' className="dsubmit">Delete Integration</button>
                   
                </div>
                <button type='submit' className="rsubmit"><NavLink to="/screen">Reply To Message</NavLink></button>
                
            </div>
            
           
        </div>
    )

}
export default Disconnectfb