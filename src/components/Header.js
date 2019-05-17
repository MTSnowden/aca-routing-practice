import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
      <li><Link to="/projects">Current Projects</Link></li>
    </ul>
  </div>
)

export default Header;