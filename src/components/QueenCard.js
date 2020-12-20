import './QueenCard.css';
import React from 'react';

const QueenCard = ({ image }) => {

  return (
    <div className="btn btn-lg card-container" style={{backgroundImage: `url(${image})`}}>
      {/* <div className="card-img" ></div> */}
      {/* <div>Name</div> */}
    </div>
  )
};

export default QueenCard;


// Queen card needs:
  //key
  //photo
  //tooltip with the name of the queen? 