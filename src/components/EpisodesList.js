import React, {useState, useEffect} from 'react';
import '../apis/dragRace';
import dragRace from '../apis/dragRace';


const EpisodesList = () => {
  const [currentSeason, setCurrentSeason] = useState(1);
  const [currentEpisodes, setCurrentEpisodes] = useState([]);


  useEffect(() => {
    const search = async () => {
      const response = await dragRace.get(`seasons/${currentSeason}/episodes`, {});
  
      setCurrentEpisodes(response.data);
    };
    return search();
  }, [currentSeason]);
  
  const renderedList = currentEpisodes.map((episode) => {
    return (
      <div key={episode.id}>Episode {episode.episodeInSeason}: {episode.title}</div>
    );
  });
  

  return (
    <div>
      <h3>Episodes List</h3>
      <div>
        {renderedList}
      </div>
    </div>
  );
};

export default EpisodesList;
