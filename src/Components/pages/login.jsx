import React, { useState } from 'react'
import './LoginSignup.css'
import { useNavigate , NavLink} from 'react-router-dom';
import axios from 'axios';


const Login = () =>{

  
  const [email , setEmail] = useState()
  const [password , setPassword] = useState()
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email , password})
    .then(result =>{
      console.log(result)
        if (result.data === "Success"){
          navigate('/connectfb')
        
        } 
          
        
    
  })
    .catch (err=> console.log(err))
  }
 
   
  

  return (
   <div>
    <div className="container">
      <div className="header">
        <div className="text">Log in to Your Account</div>
      </div>
      <form onSubmit={handleSubmit} >
      <div className="inputs">
        <div className="input">
        <lable htmlFor="email">Email</lable><br />
        <input type="email" placeholder='  manoj@richpanel.com'
        onChange={(e)=> setEmail(e.target.value)} 
         />
          </div>
          <div className="input">
          <lable htmlFor="username">Password</lable><br />
            <input type="password" placeholder='******'
            onChange={(e)=> setPassword(e.target.value)} 
             />
        </div>
        <div className="checkbox">
            <input type ="checkbox" 
             />Remember me
          </div>
          
        
      </div>
      <div className="submit-container">
      <button type='submit' className= "submit" >Login
      
        </button>
      </div> 
      </form>
      <div className="already-account">New to MyApp  ? <NavLink to="/"><span>SignUp</span></NavLink>
        </div>


    </div>
   </div>
  );
};
export default Login