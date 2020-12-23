import './Header.css';
import React from 'react';

const Header = ({ onSelectedChange }) => {
  return (
    <div className="container-sm header-container" onClick={() => onSelectedChange(null)}>
      <h1>RuPaul's Dragopedia</h1>
    </div>
  )
};

export default Header;