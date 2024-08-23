import React, { useState } from 'react';

function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <div className="content">
        <p>The current theme is {theme}.</p>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
//

import React, { useState } from 'react';

function CharacterLimitInput() {
  const [text, setText] = useState('');
  const charLimit = 100;
  const warningThreshold = 90;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea 
        value={text}
        onChange={handleChange}
        maxLength={charLimit}
        rows="4"
        cols="50"
      />
      <div>
        <p>{text.length}/{charLimit} characters</p>
        {text.length >= warningThreshold && (
          <p style={{ color: 'red' }}>You are approaching the character limit!</p>
        )}
      </div>
    </div>
  );
}

export default CharacterLimitInput;
//

import React, { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('#000000');

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <input type="color" value={color} onChange={handleChange} />
      <div style={{ backgroundColor: color, width: '100px', height: '100px', marginTop: '10px' }}>
        Selected Color: {color}
      </div>
    </div>
  );
}

export default ColorPicker;
//

import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h1>{time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
//

import React, { useState } from 'react';

function TextExpander({ text, previewLength }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div>
      <p>
        {isExpanded ? text : `${text.substring(0, previewLength)}...`}
      </p>
      <button onClick={toggleText}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}

export default TextExpander;
//


