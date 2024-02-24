import React, { useState } from 'react'
import './LoginSignup.css'
import { useNavigate ,Link , NavLink} from 'react-router-dom';
import FacebookLogin from 'react-facebook-login'

import axios from 'axios';


const responseFacebook = (response) => {
    console.log("login result ",response);
  }
  
  const componentClicked=(data)=>{
    console.warn(data)
  }

const Connectfb = ()=>{
    return(
        <div>
            <div className="container">
                <div className="header">
                    <div className="text">Facebook Page Integration</div>
                    <br />
                </div>
             
               
               <div className="fb">
               <FacebookLogin 
    appId="726258196332096"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} 
    />,
               </div>
               <div className="submit-container">
      <button type='submit' className= "submit" ><NavLink to ="/disconnectfb">Connect</NavLink>
        </button>
      </div> 
            </div>
            
           
        </div>
    )

}
export default Connectfb