import './Contestant.css';
import React, { useState, useEffect } from 'react';
import dragRace from '../apis/dragRace';


const Contestant = ({ seasonInfo, queenInfo }) => {
  const [contestantData, setContestantData] = useState({seasons: []});

  useEffect(() => {
    const search = async () => {
      const response = await dragRace.get(`/queens/${queenInfo.id}`);

      setContestantData(response.data);
    };
      return search();
  }, [queenInfo.id]);

  if(typeof contestantData.name === undefined) {
    return <div>Loading...</div>
  };

  const seasons = contestantData.seasons.map((season) => {
    return <p key={season.id}>Season {season.seasonNumber}</p>
  });

  return (
    <div className="contestant-container container">
      <div className="contestant-image" style={{backgroundImage: `url(${contestantData.image_url})`}}></div>
      <div className="info-container">
        <div>{contestantData.name}</div>
        <div>
          {seasons}
        </div>
        <div className="contestant-quote">{contestantData.quote}</div>
      </div>
    </div>
  )
};

export default Contestant;