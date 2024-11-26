import React from 'react';
import './App.css';
import MyInfo from './components/MyInfo';
import CC from './components/ClickCounter';
import CurrentTime from './components/CurrentTime';
import VisitCount from './components/VisitCount.js';

import travelpic from './travel.jpg'
import runningpic from './running.jpg'
import reaidngpic from './reading.jpg'

function App() {
  return (
    <div className="App">
      <div className="top-right">
        <div>
          <CurrentTime />
        </div>
      </div>
      <div className="center">
        <MyInfo />
        <div className="interests">
          <img src={runningpic} alt="running" />
          <img src={reaidngpic} alt="reading" />
          <img src={travelpic} alt="travel" />
        </div>
        <div>
          <CC />
        </div>
      </div>
      <div className="bottom-right">
        <div>
          <VisitCount />
        </div>
      </div>
    </div>
  );
}

export default App;
