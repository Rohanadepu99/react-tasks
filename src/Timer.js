import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const formatTime = (time) => {
    const m = Math.floor(time / 60);
    const s = time % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      clearInterval(timerRef.current);
      if (isRunning) alert("Time's up!");
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    if (isRunning) return;
    const total = parseInt(minutes || 0) * 60 + parseInt(seconds || 0);
    if (total <= 0) return;
    setTimeLeft(total);
    setIsRunning(true);
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTimeLeft(0);
    setMinutes('');
    setSeconds('');
  };

  return (
    <div className="timer-container">
      <div className="time-display">{formatTime(timeLeft)}</div>
      <div className="inputs">
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          placeholder="Minutes"
          min="0"
        />
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          placeholder="Seconds"
          min="0"
          max="59"
        />
      </div>
      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
