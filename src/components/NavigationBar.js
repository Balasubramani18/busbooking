import React from 'react';
import '../components/Navigation.css';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav id="navigationBar">
        
      <div className="logo">
        <h1>Stopbus.com</h1>
      </div>
      <ul>
        <li>
          <a href="#" className="link">Home</a>
        </li>
        <li>
          <Link to="/About" className="link">About</Link>
        </li>
        <li>
          <Link to="/ContactForm" className="link">Contact</Link>
        </li>
        <li>
          <Link to="/" ><button>Logout</button></Link>
        </li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>
          <i className="fa fa-search">&#x1F50E;&#xFE0E;</i>
        </button>
      </div>
    </nav>
  );
}

export default NavigationBar;
