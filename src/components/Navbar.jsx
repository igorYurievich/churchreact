import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex align-items-center">
        <Link to="/">
          <img src="./images/logo.webp" alt="Description of the image" className="logo" />
        </Link>
        <button 
          className="navbar-toggler ms-auto" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav py-2">
            <li className="nav-item">
              <Link className="nav-link text-light" id="titull" to="/events">Мероприятия</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" id="titull" to="/media">Галерея</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" id="titull" to="/rules">Устав</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" id="titull" to="/faith">Символ Веры</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" id="titull" to="/donate">
                <img src="./images/donation.png" alt="Donate" className="donation-icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
