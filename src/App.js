// import logo from './logo.svg';
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import MyInfo from './components/MyInfo';
import CC from './components/ClickCounter';

// import mypic from './KakaoTalk_20240721_180926578_06.jpg'
import travelpic from './travel.jpg'
import runningpic from './running.jpg'
import reaidngpic from './reading.jpg'

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [visitCount, setVisitCount] = useState(0);
  const isEffectExecuted = useRef(false); //중복 실행 방지 플래그

  useEffect(() => {
    if (isEffectExecuted.current) return;//이미 실행된 경우 실행 안함
    isEffectExecuted.current = true;

    // Update time every second
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // // Initialize visit count (only once)
    // const count = localStorage.getItem('visitCount') || 0;
    // if (!localStorage.getItem('visitInitialized')) {
    //   const newCount = parseInt(count, 10) + 1;
    //   localStorage.setItem('visitCount', newCount);
    //   localStorage.setItem('visitInitialized', 'true');
    //   setVisitCount(newCount);
    // } else {
    //   setVisitCount(parseInt(count, 10));
    // }

    // return () => clearInterval(timer);

    const count = parseInt(localStorage.getItem('visitCount') || '0', 10);
    const newCount = count + 1;
    localStorage.setItem('visitCount', newCount);
    setVisitCount(newCount);

    return () => clearInterval(timer);
  }, []);


  return (
    <div className="App">
      <div className="top-right">
        <span className="time">
          {time}
        </span>
      </div>
      <div className="center">
        {/* <h1>최지원</h1>

        <img src={mypic} alt="사진" className="photo" /> */}
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
        <span className="visit-count">
          Visit Count: {visitCount}
        </span>
      </div>

    </div>
  );
}

export default App;
