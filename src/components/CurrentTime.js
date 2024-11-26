import React, { useState, useEffect } from "react";


function CurrentTime() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        // Update time every second
        const timer = setInterval(() => {
          setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 해제
      }, []);
      
    return <div className="current-time">{currentTime}</div>;
}
export default CurrentTime;