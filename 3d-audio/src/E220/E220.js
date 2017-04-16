import React, { Component } from 'react';
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

class E220 extends Component {

  render() {
    return (
        <div id="E220">
          <div id="firstRow">
            <button id="firstSeat" value={[1, 10, 50, 260]} onClick={this.props.onClick}>01</button>
            <button id="secondSeat" value={[2, 10, 50, 260]} onClick={this.props.onClick}>02</button>
            <button id="thirdSeat" value={[3, 10, 50, 260]} onClick={this.props.onClick}>03</button>
            <button id="fourthSeat" value={[4, 10, 50, 260]} onClick={this.props.onClick}>04</button>
            <button id="fifthSeat" value={[5, 10, 50, 260]} onClick={this.props.onClick}>05</button>
          </div>
          <div id="secondRow">
            <button id="firstSeat" value={[6, 10, 50, 260]} onClick={this.props.onClick}>06</button>
            <button id="secondSeat" value={[7, 10, 50, 260]} onClick={this.props.onClick}>07</button>
            <button id="thirdSeat" value={[8, 10, 50, 260]} onClick={this.props.onClick}>08</button>
            <button id="fourthSeat" value={[9, 10, 50, 260]} onClick={this.props.onClick}>09</button>
            <button id="fifthSeat" value={[10, 10, 50, 260]} onClick={this.props.onClick}>10</button>
          </div>
          <div id="thirdRow">
            <button id="firstSeat" value={[11, 10, 50, 260]} onClick={this.props.onClick}>11</button>
            <button id="secondSeat" value={[12, 10, 50, 260]} onClick={this.props.onClick}>12</button>
            <button id="thirdSeat" value={[13, 10, 50, 260]} onClick={this.props.onClick}>13</button>
            <button id="fourthSeat" value={[14, 10, 50, 260]} onClick={this.props.onClick}>14</button>
            <button id="fifthSeat" value={[15, 10, 50, 260]} onClick={this.props.onClick}>15</button>
          </div>
          <div id="fourthRow">
            <button id="firstSeat" value={[16, 10, 50, 260, ]} onClick={this.props.onClick}>16</button>
            <button id="secondSeat" value={[17, 10, 50, 260]} onClick={this.props.onClick}>17</button>
            <button id="thirdSeat" value={[18, 10, 50, 260]} onClick={this.props.onClick}>18</button>
            <button id="fourthSeat" value={[19, 10, 50, 260]} onClick={this.props.onClick}>19</button>
            <button id="fifthSeat" value={[20, 10, 50, 260]} onClick={this.props.onClick}>20</button>
          </div>
          <div id="fifthRow">
            <button id="firstSeat" value={[21, 10, 50, 260]} onClick={this.props.onClick}>21</button>
            <button id="secondSeat" value={[22, 10, 50, 260]} onClick={this.props.onClick}>22</button>
            <button id="thirdSeat" value={[23, 10, 50, 260]} onClick={this.props.onClick}>23</button>
            <button id="fourthSeat" value={[24, 10, 50, 260]} onClick={this.props.onClick}>24</button>
            <button id="fifthSeat" value={[25, 10, 50, 260]} onClick={this.props.onClick}>25</button>
          </div>
          <div id="sixthRow">
            <button id="firstSeat" value={[26, 10, 50, 260]} onClick={this.props.onClick}>26</button>
            <button id="secondSeat" value={[27, 10, 50, 260]} onClick={this.props.onClick}>27</button>
            <button id="thirdSeat" value={[28, 10, 50, 260]} onClick={this.props.onClick}>28</button>
            <button id="fourthSeat" value={[29, 10, 50, 260]} onClick={this.props.onClick}>29</button>
            <button id="fifthSeat" value={[30, 50, 260]} onClick={this.props.onClick}>30</button>
          </div>
        </div>
    );
  }
}

export default E220;
