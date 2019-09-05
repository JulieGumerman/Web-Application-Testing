import React from 'react';
import './App.css';


import Display from "./components/Display";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <div className="App">
      <h1>Baseball game, yo!</h1>
      <Display />
      <Dashboard />
    </div>
  );
}

export default App;
