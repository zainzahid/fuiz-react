import React from 'react';
import './Navbar.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <a href="/"><img src="src/assets/fuiz-logo.svg" alt="Quiz icon" /></a>
      <ul className="nav-links">
        <li className="nav-link">My Quiz</li>
        <li className="nav-link dropdown">
          More
          <ul className="dropdown-content">
            <li className="dropdown-item">Link 1---------</li>
            <li className="dropdown-item">Link 2</li>
            <li className="dropdown-item">Link 3</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
