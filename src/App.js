// import logo from './logo.svg';
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import MyInfo from './components/MyInfo';
import CC from './components/ClickCounter';
import CurrentTime from './components/CurrentTime';

// import mypic from './KakaoTalk_20240721_180926578_06.jpg'
import travelpic from './travel.jpg'
import runningpic from './running.jpg'
import reaidngpic from './reading.jpg'

function App() {
  // const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [visitCount, setVisitCount] = useState(0);
  const hasUpdatedVisitCount = useRef(false); //중복 실행 방지 플래그

  // useEffect(() => {
  //   // Update time every second
  //   const timer = setInterval(() => {
  //     setTime(new Date().toLocaleTimeString());
  //   }, 1000);
  //   return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 해제
  // }, []);

  useEffect(() => {
    if (hasUpdatedVisitCount.current) return; //이미 실행된 경우 실행 안하게
    hasUpdatedVisitCount.current = true;

    const count = parseInt(localStorage.getItem('visitCount') || '0', 10);
    const newCount = count + 1;
    localStorage.setItem('visitCount', newCount);
    setVisitCount(newCount);
  }, []);


  return (
    <div className="App">
      <div className="top-right">
        {/* <span className="time">
          {time}
        </span> */}
        <div>
          <CurrentTime/>
        </div>
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
