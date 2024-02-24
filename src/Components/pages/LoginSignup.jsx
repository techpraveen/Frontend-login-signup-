import React, { useState } from 'react'
import './LoginSignup.css'
import { useNavigate ,Link , NavLink} from 'react-router-dom';
import axios from 'axios';

const LoginSignup = () => {

  const [name , setName] = useState()
  const [email , setEmail] = useState()
  const [password , setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/LoginSignup',{name , email , password})
    .then(result =>{console.log(result)
    navigate('/login')
  })
    .catch (err=> console.log(err))
  }
  return (
   
    <div>
      <div className="container">
        <div className="header">
          <div className="text">Create Account </div>
          {/* <div className="Underline"></div> */}
        </div>
        
       <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
          <lable htmlFor="username">Name</lable><br />
            {/* <img src={user_icon} alt=""/> */}
            <input 
            type="text" 
            placeholder='  Monoj Kumar'
            onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className="input">
          <lable htmlFor="email">Email</lable><br />
            {/* <img src={email_icon} alt=""/> */}
            <input 
            type="email" 
            placeholder='  manoj@richpanel.com'
            onChange={(e)=> setEmail(e.target.value)} 
            />
          </div>
          <div className="input">
          <lable htmlFor="username">Password</lable><br />
            {/* <img src={password_icon} alt=""/> */}
            <input type="password"
             placeholder='  ********'
             onChange={(e)=> setPassword(e.target.value)} 
            />
          </div>
          
          
         
          <div className="checkbox">
            <input type ="checkbox" />Remember me
          </div>
          
        </div>
        
        <div className="submit-container">
          <button type='submit' className= "submit" 
          >SignUp
          </button>
         
        </div>
         </form>
        <div className="already-account">Already have an account ? <NavLink to="/login"><span>Login</span></NavLink>
        </div>
      
        
      </div>
      
    </div>
   
    
  );
};

export default LoginSignup 
