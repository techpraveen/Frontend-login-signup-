import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/pages/LoginSignup';
import Login from './Components/pages/login';
import Connectfb  from "./Components/pages/connectfb";
import Disconnectfb from "./Components/pages/disconnectfb";
import FacebookLogin from 'react-facebook-login'
import Screen from './Components/pages/screen';

function App() {
  return (
    <div  >
      
      <Router>
        <Routes>
          <Route path ="/" element ={<LoginSignup/>}/>
          <Route path ="/login" element ={<Login/>}/>
          <Route path ="/connectfb" element ={<Connectfb/>}/>
          <Route path ="/disconnectfb" element ={<Disconnectfb/>}/>
          <Route path="/screen" element={<Screen/>}/>
         

          
          
        </Routes>
      </Router>
      

      
    </div>
  );
}

export default App;
