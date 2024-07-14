import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="header">
      <h1>Your Name</h1>
      <nav>
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
          <li><Link to="contacts" smooth={true} duration={500}>Contacts</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
