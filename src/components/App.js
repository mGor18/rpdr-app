import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import SeasonList from './SeasonList';
import QueenList from './QueenList';
import EpisodesList from './EpisodesList';
import Contestant from './Contestant';

const App = () => {
  const [seasonInfo, setSeasonInfo] = useState(null);
  const [queenInfo, setQueenInfo] = useState(null);

  let content;

  const resetState = () => {
    setSeasonInfo(null);
    setQueenInfo(null);
  }

  if (seasonInfo === null) { 
    content = (
      <div>
        <SeasonList reg={/^A/} seasonName={"RPDR Seasons"} onSelectedChange={setSeasonInfo} />
        <SeasonList reg={/^(?!A)/} seasonName={'All Stars Seasons'} onSelectedChange={setSeasonInfo}/>
      </div>
    );
  } else if (seasonInfo !== null && queenInfo === null) { 
    content = (
      <div>
        <QueenList seasonInfo={seasonInfo} onSelectedChange={setQueenInfo} />
        <EpisodesList seasonInfo={seasonInfo} />
      </div>
    );
  } else if (queenInfo !== null) { 
    content = (
      <Contestant seasonInfo={seasonInfo} queenInfo={queenInfo} />
    );
  };

  return (
    <div className="content">
      <Header onSelectedChange={resetState} />
      <div className="container-lg container">
        {content}
      </div>
    </div>
  );
};


export default App;

//TODO:
// fix css etc (update this list later)
  //  add shadows to cards
  //  check view on small devices
    //  queen list
  
