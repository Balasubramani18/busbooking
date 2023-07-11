// import React, { useState } from "react";
// import './App.css';
// import { Link } from 'react-router-dom';
// import Signup from "./signup";

// function Login() {
//   const [isLoginForm, setIsLoginForm] = useState(true);
//   const [name, setname] = useState('');
//   const [vehicle, setvehicle] = useState('');

//   const handleNameChange = (e) => {
//     setname(e.target.value);
//   };

//   const handleVehicleChange = (e) => {
//     setvehicle(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     if(!name){
//       alert("please enter the username")
//     }
//     else if(!vehicle){
//       alert("please enter the vechile No")
//     }
//     else{
//       alert("Login sucessful")
//       // e.preventDefault();
//       // Perform sign-in logic here, such as making an API call to authenticate the user
//       console.log('Name:', name);
//       console.log('Vehicle:', vehicle);
//       // Reset form fields
//       setname('');
//       setvehicle('');
//     }
//   };
 

  
  

//   return (
//     // <div className="container">
//     //   <div className={`form-container ${isLoginForm ? "active" : ""}`} id="login-form">
//     //     <h1>Login</h1>
//     //     <form >
//     //       <label htmlFor="username">Username</label>
//     //       <input className="margin" type="text" id="username" name="username" placeholder="Enter username" value={name} onChange={handleNameChange} required/>
//     //       <label htmlFor="password">Vechile NO</label>
//     //       <input  className="margin" type="text" id="password"  placeholder="Vechile NO" value={vehicle} onChange={handleVehicleChange} required/>
//     //       </form>
//     //       <button  onClick={handleSubmit} type="submit">Login</button>
//     //     <p>
//     //       Don't have an account?{" "}
//     //       <Link to="/signup"  id="signup-link" >
//     //         New User
//     //       </Link>
//     //     </p>
//     //   </div>
      
//     // </div>
//   );
// }

// export default Login;
import "./sigm.css";
import {Link} from 'react-router-dom';
function Signup()
{
    return(
        <div className="full">
            <div className="outer">
                <h1 id="t">StopBus</h1>
                <h1 id="head">Register your Account</h1>
                <div className="fields">

<input id="usrnm" type="name" required placeholder="Enter your name here"></input>
<br></br>
<br></br>
<br></br>
<input id="eml" type="email" required placeholder="Enter your email here"></input>
<br></br>
<br></br>
<br></br>
<input id="pwd" type="password" required placeholder="Enter your password here"></input>
<br></br>
<br></br>
<br></br>
<input id="mob" type="" required placeholder="Enter your mobile number here"></input>
<br></br>
<br></br>
<br></br>
<br></br>
           <h4 id="lower">Already have an account?<Link to='/signup'>Login</Link></h4>
           <button id="submit">LOGIN</button>
                </div>
            </div>
        </div>
    )
}

export default Signup;