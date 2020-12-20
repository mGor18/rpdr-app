import './App.css';
import React from 'react';
import Header from './Header';
//import SeasonList from './SeasonList';
import QueenList from './QueenList';
import EpisodesList from './EpisodesList';
//import Contestant from './Contestant';
import Route from './Route';

const App = () => {
  
  return (
    <div className="content">
      <Header />
      <div className="container-lg container">
        {/* <Route path="/">
          <SeasonList reg={/^A/} seasonName={"RPDR Seasons"} />
          <SeasonList reg={/^(?!A)/} seasonName={'All Stars Seasons'} />
        </Route> */}
        <QueenList />
        <EpisodesList />
        {/* <Contestant /> */}
      </div>
    </div>
  );
};

export default App;