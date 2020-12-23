import './QueenList.css'
import React, { useState, useEffect } from 'react';
import QueenCard from './QueenCard';
import dragRace from '../apis/dragRace';

const QueenList = ({ seasonInfo, onSelectedChange }) => {
  const [queenList, setQueenList] = useState([])

  useEffect(() => {
    const search = async () => {
      const response = await dragRace.get(`/seasons/${seasonInfo.id}/queens`);

      setQueenList(response.data);
    }
    return search();
  }, [seasonInfo.id]);

  const renderedList = queenList.map((queen) => {
    return (
      <QueenCard 
        key={queen.id}
        image={queen.image_url}
        onClick={() => onSelectedChange(queen)}
      />
    );
  });

  return (
    <div>
      <h3>Season {seasonInfo.seasonNumber} Contestants</h3>
      <div className="comp-container">
        {renderedList}
      </div>
    </div>
  );
};

export default QueenList;