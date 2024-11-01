import React from 'react';
import './Header.scss';

const Header = () => (
  <nav className="nav">
    <a href="#introduction" className="nav-link">About</a>
    <a href="#gui" className="nav-link">HEXRD GUI</a>
    <a href="#publications" className="nav-link">Publications</a>
    <a href="#documentation" className="nav-link">Documentation</a>
    <a href="#contributors" className="nav-link">Contributors</a>
    <a href="#funders" className="nav-link">Funding Sources</a>
  </nav>
);

export default Header;
