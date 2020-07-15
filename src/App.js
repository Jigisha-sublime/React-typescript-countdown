import React from 'react';
import './App.css';
import CountDown from './components/CountDown'
import CountDownClass from './components/CountDownClass'

function App() {
  return (
    <div className="App">
      <CountDown timeFormat='MM DD YYYY, h:mm a' timeTillDate="11 7 2020, 7:00 am" />
      <br />
      <br />
      <CountDownClass timeFormat='MM DD YYYY, h:mm a' timeTillDate="11 7 2020, 7:00 am" />
    </div>
  );
}

export default App;
