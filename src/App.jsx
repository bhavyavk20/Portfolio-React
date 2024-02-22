import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';


export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='navbar'>
        <button className='toggle-button' onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to='/Home'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/project'>Project</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default App;
