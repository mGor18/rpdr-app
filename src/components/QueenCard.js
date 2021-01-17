import './QueenCard.css';
import React from 'react';

const QueenCard = ({ image, onClick }) => {

  return (
    <div onClick={onClick} className="btn btn-lg card-container shadow" style={{backgroundImage: `url(${image})`}}>
      {/* <div className="card-img" ></div> */}
      {/* <div>Name</div> */}
    </div>
  )
};

export default QueenCard;
