import './SeasonBanner.css';
import React from 'react';

const SeasonBanner = ({ pic, seasonNum }) => {
  return (
    <div className="btn btn-lg banner-container" style={{backgroundImage: `url(${pic})`}}>
      Season {seasonNum}
    </div>
  );
};

export default SeasonBanner;
