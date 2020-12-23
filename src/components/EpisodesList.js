import React, {useState, useEffect} from 'react';
import '../apis/dragRace';
import dragRace from '../apis/dragRace';


const EpisodesList = ({ seasonInfo }) => {
  const [currentEpisodes, setCurrentEpisodes] = useState([]);


  useEffect(() => {
    const search = async () => {
      const response = await dragRace.get(`seasons/${seasonInfo.id}/episodes`, {});
  
      setCurrentEpisodes(response.data);
    };
    return search();
  }, [seasonInfo.id]);
  
  const renderedList = currentEpisodes.map((episode) => {
    return (
      <div key={episode.id}>Episode {episode.episodeInSeason}: {episode.title}</div>
    );
  });
  

  return (
    <div>
      <h3>Season {seasonInfo.seasonNumber} Episodes</h3>
      <div>
        {renderedList}
      </div>
    </div>
  );
};

export default EpisodesList;
