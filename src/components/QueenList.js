import './QueenList.css'
import React, { useState, useEffect } from 'react';
import QueenCard from './QueenCard';
import dragRace from '../apis/dragRace';

const QueenList = () => {
  const [currentSeason, setCurrentSeason] = useState(1);
  const [queenList, setQueenList] = useState([])

  useEffect(() => {
    const search = async () => {
      const response = await dragRace.get(`/seasons/${currentSeason}/queens`);

      setQueenList(response.data);
    }
    return search();
  }, [currentSeason]);

  const renderedList = queenList.map((queen) => {
    return (
      <QueenCard 
        key={queen.id}
        image={queen.image_url}
      />
    );
  });

  return (
    <div>
      <h3>Season {currentSeason} Contestants</h3>
      <div className="comp-container">
        {renderedList}
      </div>
    </div>
  );
};

export default QueenList;