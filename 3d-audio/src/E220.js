import React, { Component } from 'react';
import logo from './logo.svg';
import './E220.css';

window.load = windowLoad();
window.AudioContext = window.AudioContext || window.webkitAudioContext;


// Coordinates
var rightCoords = {};
rightCoords.x = (3*Math.pow(10,38));
rightCoords.y = (3*Math.pow(10,38));
rightCoords.z = (3*Math.pow(10,38));

var audioBuffer = null;
var context = new AudioContext();
var sound = {};
sound.source = null;

sound.volume = context.createGain();

sound.panner = context.createPanner();

// Instead of hooking up the volume to the main volume, hook it up to the panner.
sound.volume.connect(sound.panner);
// And hook up the panner to the main volume.
sound.panner.connect(context.destination);

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);
    xhr.responseType = 'arraybuffer';

  } else if (typeof XDomainRequest !== "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);
    xhr.responseType = 'arraybuffer';

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

function windowLoad() {
  var xhr = createCORSRequest("GET", "https://raw.githubusercontent.com/alindenberg/3dAudioSounds/master/sounds/ahem.wav");
  if (!xhr) {
    throw new Error('CORS not supported');
  } else {
      xhr.onload = function() {
        context.decodeAudioData(xhr.response, function(buffer) {
          audioBuffer = buffer;
        }, error);
      }
      xhr.send();
  }
}

function error() {
  console.log("Error decoding data");
}

function playSound() {
  sound.source = context.createBufferSource();
  sound.source.buffer = audioBuffer;                    // tell the source which sound to play
  sound.source.connect(sound.volume);       // connect the source to the context's destination (the speakers)
  sound.panner.setPosition(rightCoords.x, 0, 0);
  context.listener.setPosition(rightCoords.x, 0, 0);
  sound.source.start(0);                           // play the source now
}

function stopSound() {
  if(sound.source) {
    sound.source.stop(0);
  }
}

class E220 extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <button onClick={playSound}>Start</button>
          <button onClick={stopSound}>Stop</button>
        </p>
      </div>
    );
  }
}

export default E220;
