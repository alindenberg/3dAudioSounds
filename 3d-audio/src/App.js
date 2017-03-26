import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // ** 3d Audio part **
  var audioContext = new AudioContext();
  var oscillator = audioCtx.createOscillator();
  // Gain node for volume control
  var gainNode = audioCtx.createGain(); 

  // Link source & destination together 
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  // Play a sound
  oscillator.type = 'sine'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
  oscillator.frequency.value = 2500; // value in hertz
  oscillator.start();

  // ** END OF 3d AUDIO **
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
