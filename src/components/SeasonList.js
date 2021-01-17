import './SeasonList.css';
import React, { useState, useEffect}  from 'react';
import SeasonBanner from './SeasonBanner';
import dragRace from '../apis/dragRace';

const SeasonList = ({ reg, seasonName, onSelectedChange }) => {
  const [seasons, setSeasons] = useState([]);

  const seasonReg = reg;

  useEffect(() => {

    const search = async () => {
      const response = await dragRace.get('/seasons', {});
      
      const sortSeason = response.data.filter((season) => {
        return !season.seasonNumber.match(seasonReg)
      });

      const sortedSeason = sortSeason.sort((a,b) => {
        return a.seasonNumber-b.seasonNumber;
      });

      setSeasons(sortedSeason);
    };  
    return search();
  }, []);

    const renderedList = seasons.map((season) => {
     
      return (
        <SeasonBanner
          key={season.id}
          pic={season.image_url}
          seasonNum={season.seasonNumber}
          onClick={() => onSelectedChange(season)}
        />
      );
    });

  return (
    <div>
      <h3>{seasonName}</h3>
      <div className="mb-4"></div>
      <div className="list-container">
        {renderedList}
      </div>
    </div>
  );
};

export default SeasonList;