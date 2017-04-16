import React, { Component } from 'react';
import ToggleButton from 'react-toggle-button';
import Slider from 'rc-slider/lib/Slider';

import './SoundPanel.css';
import E220 from '../E220/E220';
import Carleton from '../Carleton/Carleton';

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
  sound.panner.setPosition(0,0,0);
  context.listener.setPosition(x, y, z);
  sound.source.start(0);                           // play the source now
  console.log("Playing sound");
}

class SoundPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			professorTalking:false,
			studentSittingNearby: false,
			airConditioningOn: false,
			nearbyChatter: false,
			distantChatter: false,
			seatX: 0,
			seatY: 0,
			seatZ: 0,
			seatNumber: 1,
			currentClassroom: <Carleton onClick={this.handleClick}/>,
			dropdownValue: "Carleton",
		};
	}
	render() {
    	return (
    		<div>
    			<div id="navbar">
					<span>Classroom: </span>
					<select value={this.state.dropdownValue} onChange={this.handleChange}>
						<option value="Carleton">Carleton</option>
						<option value="E220">E220</option>
					</select>
				</div>
				<div id ="classroom">
					<div id="teacherDiv">
						<Slider defaultValue='55' id="teacherPosition"></Slider>
						<h3>Professor Position</h3>
					</div>
					{this.state.currentClassroom}
				</div>
	    		<div id="soundPanel">
					<h1><u>SoundPanel</u></h1>
					<ul id="configurables">
						<li>
							<h3>Seat No: {this.state.seatNumber}</h3>
						</li>
						<li>
							<h3>Professor Talking</h3>
							<ToggleButton 
								value={ this.state.professorTalking || false } onToggle={
									(value) => {
								    	this.setState({professorTalking: !value,});
								  	}
							 	}
							ToggleButton/>
						</li>
						<li>
							<h3>Air Conditioning</h3>
							<ToggleButton 
								value={ this.state.airConditioningOn || false } onToggle={
									(value) => {
								    	this.setState({airConditioningOn: !value,});
								  	}
							 	}
							ToggleButton/>
						</li>
						<li>
							<h3>Nearby Chatter</h3>
							<ToggleButton 
								value={ this.state.nearbyChatter || false } onToggle={
									(value) => {
								    	this.setState({nearbyChatter: !value,});
								  	}
							 	}
							ToggleButton/>
						</li>
						<li>
							<h3>Distant Chatter</h3>
							<ToggleButton 
								value={ this.state.distantChatter || false } onToggle={
									(value) => {
								    	this.setState({distantChatter: !value,});
								  	}
							 	}
							ToggleButton/>
						</li>
						<li>
							<h3>Volume</h3>
							<Slider defaultValue='50' id='volumeSlider'></Slider>
						</li>
					</ul>
					<div id="playSound">
						<button id="playButton" onClick={()=>playSound(this.state.seatX,this.state.seatY,this.state.seatZ)}>Play sounds</button>
					</div>
				</div>
			</div>
		)
	}
	handleChange = (event) => {
		if(event.target.value ==="Carleton")
			this.setState({currentClassroom: <Carleton onClick={this.handleClick}/>, dropdownValue: "Carleton"});
		else if(event.target.value === "E220")
			this.setState({currentClassroom: <E220 onClick={this.handleClick}/>, dropdownValue: "E220"});
  	}
  	handleClick = (event) => {
  		var xCoord='';
  		var yCoord='';
  		var zCoord='';
  		var seatNum='';
  		var i = 0;
  		while(event.target.value[i]!==',') {
			seatNum += event.target.value[i];
			i++;
		}
		i++;
		while(event.target.value[i]!==',') {
			xCoord += event.target.value[i];
			i++;
		}
		i++;
		while(event.target.value[i]!==',') {
			yCoord += event.target.value[i];
			i++;
		}
		i++;
		while(i<(event.target.value.length)) {
			zCoord+=event.target.value[i];
			i++
		}
		this.setState({
			seatX:xCoord,
			seatY:yCoord,
			seatZ:zCoord,
			seatNumber:seatNum,
		})
  	}
}

export default SoundPanel;