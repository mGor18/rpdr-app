import './SeasonBanner.css';
import React from 'react';

const SeasonBanner = ({ pic, seasonNum, onClick }) => {
  return (
    <div onClick={onClick}  className="btn btn-lg banner-container shadow" style={{backgroundImage: `url(${pic})`}}>
      Season {seasonNum}
    </div>
  );
};

export default SeasonBanner;
