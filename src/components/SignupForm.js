import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';
import { Navigate } from 'react-router-dom';
import { Logout } from '@mui/icons-material';
import axios from 'axios';

const SignupForm = ({login,Logout,logstate}) => {
  const [name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const navigate=useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = {
      name:name,
      email: email,
      password: password
    };

    // let token = localStorage.getItem('token')
  
    await axios.post('http://localhost:8181/api/v1/auth/register', data, {
      headers: {
        // "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      console.log('Success:', response.data);
     localStorage.setItem('token', response.data.token);
     alert("Login Successful")
   
   
     if(!logstate) {
       login();
     }
      navigate('/')

    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
   

  return (
    <div className="form-box">
      <form className="form" onSubmit={handleSubmit}>
        <span className="title">Sign up</span>
        <span className="subtitle">Create a free account with your email.</span>
        <div className="form-container">
          <input
            type="text"
            className="input"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
      <div className="form-section">
        <p>
          Have an account? <Link to='/'>Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
