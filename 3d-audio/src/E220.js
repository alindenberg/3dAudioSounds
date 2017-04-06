import React, { Component } from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import './E220.css';

window.load = windowLoad();
window.AudioContext = window.AudioContext || window.webkitAudioContext;

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

function playSound(x, y, z) {
  sound.source = context.createBufferSource();
  sound.source.buffer = audioBuffer;                    // tell the source which sound to play
  sound.source.connect(sound.volume);       // connect the source to the context's destination (the speakers)
  sound.panner.setPosition(x, y, z);
  context.listener.setPosition(0, 0, 0);
  sound.source.start(0);                           // play the source now
}

// function stopSound() {
//   if(sound.source) {
//     sound.source.stop(0);
//   }
// }

class E220 extends Component {

  render() {
    return (
        <div id="classroom">
          <h1><u>E220</u></h1>
          <div id="teacherDiv">
            <Slider defaultValue="55" id="teacherPosition"></Slider>
            <h3>Professor Position</h3>
          </div>
          <div id="firstRow">
            <button id="firstSeat" onClick={()=>playSound(0,0,5)}>01</button>
            <button id="secondSeat" onClick={()=>playSound(0,0,5)}>02</button>
            <button id="thirdSeat" onClick={()=>playSound(0,0,5)}>03</button>
            <button id="fourthSeat" onClick={()=>playSound(0,0,5)}>04</button>
            <button id="fifthSeat" onClick={()=>playSound(0,0,5)}>05</button>
          </div>
          <div id="secondRow">
            <button id="firstSeat" onClick={()=>playSound(0,0,5)}>06</button>
            <button id="secondSeat" onClick={()=>playSound(0,0,5)}>07</button>
            <button id="thirdSeat" onClick={()=>playSound(0,0,5)}>08</button>
            <button id="fourthSeat" onClick={()=>playSound(0,0,5)}>09</button>
            <button id="fifthSeat" onClick={()=>playSound(0,0,5)}>10</button>
          </div>
          <div id="thirdRow">
            <button id="firstSeat" onClick={()=>playSound(0,0,5)}>11</button>
            <button id="secondSeat" onClick={()=>playSound(0,0,5)}>12</button>
            <button id="thirdSeat" onClick={()=>playSound(0,0,5)}>13</button>
            <button id="fourthSeat" onClick={()=>playSound(0,0,5)}>14</button>
            <button id="fifthSeat" onClick={()=>playSound(0,0,5)}>15</button>
          </div>
          <div id="fourthRow">
            <button id="firstSeat" onClick={()=>playSound(0,0,5)}>16</button>
            <button id="secondSeat" onClick={()=>playSound(0,0,5)}>17</button>
            <button id="thirdSeat" onClick={()=>playSound(0,0,5)}>18</button>
            <button id="fourthSeat" onClick={()=>playSound(0,0,5)}>19</button>
            <button id="fifthSeat" onClick={()=>playSound(0,0,5)}>20</button>
          </div>
          <div id="fifthRow">
            <button id="firstSeat" onClick={()=>playSound(0,0,5)}>21</button>
            <button id="secondSeat" onClick={()=>playSound(0,0,5)}>22</button>
            <button id="thirdSeat" onClick={()=>playSound(0,0,5)}>23</button>
            <button id="fourthSeat" onClick={()=>playSound(0,0,5)}>24</button>
            <button id="fifthSeat" onClick={()=>playSound(0,0,5)}>25</button>
          </div>
          <div id="sixthRow">
            <button id="firstSeat" onClick={()=>playSound(0,0,5)}>26</button>
            <button id="secondSeat" onClick={()=>playSound(0,0,5)}>27</button>
            <button id="thirdSeat" onClick={()=>playSound(0,0,5)}>28</button>
            <button id="fourthSeat" onClick={()=>playSound(0,0,5)}>29</button>
            <button id="fifthSeat" onClick={()=>playSound(0,0,5)}>30</button>
          </div>
        </div>
    );
  }
}

export default E220;
