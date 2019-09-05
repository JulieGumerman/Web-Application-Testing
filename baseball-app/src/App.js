import React, { useState } from 'react';
import './App.css';


import Display from "./components/Display";
import Dashboard from "./components/Dashboard";


function App() {

  //this is the state
  const [balls, setBalls ] = useState(0);
  const [strikes, setStrikes] = useState(0)

  //functions for buttons
  const updateStrikes = () => {
    setStrikes(strikes + 1);
    console.log(strikes);
  }

  const updateBalls = () => {
    setBalls(balls + 1);
  }

  const onHit = () => {
    setBalls(0);
    setStrikes(0);
  }

  return (
    <div className="App">
      <h1>Baseball game, yo!</h1>
      <Display 
        strikes={strikes}
        balls={balls}
      />
      <Dashboard 
        updateStrikes={updateStrikes}
        updateBalls={updateBalls}
        onHit={onHit}
      />
    </div>
  );
}

export default App;
