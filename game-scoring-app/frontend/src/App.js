import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlayerNames from './pages/PlayerNames';
import GameMode from './pages/GameMode';
import Scoreboard from './components/Scoreboard';
import './styles/App.css';
import './styles/pages.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/players" component={PlayerNames} />
          <Route path="/game-mode" component={GameMode} />
          <Route path="/scoreboard" component={Scoreboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;