import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import SeasonList from './SeasonList';
import QueenList from './QueenList';
import EpisodesList from './EpisodesList';
//import Contestant from './Contestant';

const App = () => {
  const [seasonInfo, setSeasonInfo] = useState(null);

  let content;

  if (seasonInfo === null) { // The user has not selected anything
    content = (
      <div>
        <SeasonList reg={/^A/} seasonName={"RPDR Seasons"} onSelectedChange={setSeasonInfo} />
        <SeasonList reg={/^(?!A)/} seasonName={'All Stars Seasons'} onSelectedChange={setSeasonInfo}/>
      </div>
    );
  } else if (seasonInfo.id !== null) { // The user has selected SeasonBanner
    content = (
      <div>
        <QueenList seasonInfo={seasonInfo} />
        <EpisodesList seasonInfo={seasonInfo} />
      </div>
    );
  // } else if () { // The user has selected QueenCard
  //   content = (
  //     // <Contestant seasonInfo={seasonInfo}/>
  //   );
   }

  return (
    <div className="content">
      <Header onSelectedChange={setSeasonInfo}/>
      <div className="container-lg container">
        {content}
      </div>
    </div>
  );
};

export default App;

//TODO:
// add onClick event to header that updates seasonInfo to 'null'
// add Queenpage components to 'if' statement
// 
// fix css etc (update this list later)