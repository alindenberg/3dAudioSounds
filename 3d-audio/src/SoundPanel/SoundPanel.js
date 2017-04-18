import React, { Component } from 'react';
import ToggleButton from 'react-toggle-button';
import Slider from 'rc-slider/lib/Slider';

import './SoundPanel.css';
import E220 from '../E220/E220';
import Carleton from '../Carleton/Carleton';

window.onload = init;
var context;
var bufferLoader;
var bufferArray = [];

// Initialize possible sound objects
var teacherSound = {};
var constructionSound = {};
var airCondSound = {};
var crowdSound = {};

// Array to store sounds being played currently
var activeSounds = [];

function init() {
	// Fix up prefixing
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	context = new AudioContext();

  	bufferLoader = new BufferLoader(
	    context,
	    [
	      'https://raw.githubusercontent.com/alindenberg/3dAudioSounds/austinBranch/3d-audio/src/SoundPanel/sounds/Professor%20(Bush).wav',
	      'https://raw.githubusercontent.com/alindenberg/3dAudioSounds/master/3d-audio/src/SoundPanel/sounds/construction.wav',
	      'https://raw.githubusercontent.com/alindenberg/3dAudioSounds/master/3d-audio/src/SoundPanel/sounds/chalkboard.wav',
	      'https://raw.githubusercontent.com/alindenberg/3dAudioSounds/master/3d-audio/src/SoundPanel/sounds/highCeilingLecture.wav',
	      'https://raw.githubusercontent.com/alindenberg/3dAudioSounds/master/3d-audio/src/SoundPanel/sounds/Air%20conditioner.wav',

	    ],
	    finishedLoading
   	);
	bufferLoader.load();
}

function finishedLoading(bufferList) {

	bufferArray = bufferList;

	teacherSound.volume = context.createGain();
	teacherSound.panner = context.createPanner();
	teacherSound.volume.connect(teacherSound.panner);
	teacherSound.panner.connect(context.destination);
	
	constructionSound.volume = context.createGain();
	constructionSound.panner = context.createPanner();
	constructionSound.volume.connect(constructionSound.panner);
	constructionSound.panner.connect(context.destination);

	airCondSound.volume = context.createGain();
	airCondSound.panner = context.createPanner();
	airCondSound.volume.connect(airCondSound.panner);
	airCondSound.panner.connect(context.destination);

	crowdSound.volume = context.createGain();
	crowdSound.panner = context.createPanner();
	crowdSound.volume.connect(crowdSound.panner);
	crowdSound.panner.connect(context.destination);
	
}

function playSounds(teacherOn, teacherX, seatX, seatY, seatZ, constructionOn, airCondOn, crowdOn) {
	// Stop any sounds currently playing
	stopSounds();

	// THIS WILL BE SEAT LOCATION
  	context.listener.setPosition(seatX, seatY, seatZ);

	if(teacherOn) {
		// Create new source
		var teacherSource = context.createBufferSource();
		teacherSource.buffer = bufferArray[0];
		teacherSource.connect(teacherSound.volume);

		// Set position of sound
		teacherSound.panner.setPosition(teacherX,0, 0);

		// Set source and play sound
		teacherSound.source = teacherSource;
		teacherSound.source.loop = true;
		teacherSound.source.start(0);
		activeSounds.push(teacherSound.source);
	}
	if(constructionOn) {
		// Create new source
  		var constructionSource = context.createBufferSource();
		constructionSource.buffer = bufferArray[1];
		constructionSource.connect(constructionSound.volume);

		// Set position of sound
		constructionSound.panner.setPosition(0,-20,0);

		// Set source and play sound
		constructionSound.source = constructionSource;
		constructionSound.source.loop = true;
		constructionSound.source.start(0);
  		activeSounds.push(constructionSound.source);
	}

	if(airCondOn) {
		// Create new source
  		var airCondSource = context.createBufferSource();
		airCondSource.buffer = bufferArray[2];
		airCondSource.connect(airCondSound.volume);

		// Set position of sound
		airCondSound.panner.setPosition(0,0,20);

		// Set source and play sound
		airCondSound.source = airCondSource;
		airCondSound.source.loop = true;
		airCondSound.source.start(0);
  		activeSounds.push(airCondSound.source);
	}

	if(crowdOn) {
		// Create new source
  		var crowdSource = context.createBufferSource();
		crowdSource.buffer = bufferArray[3];
		crowdSource.connect(airCondSound.volume);

		// Set position of sound
		crowdSound.panner.setPosition(0,0,10);

		// Set source and play sound
		crowdSound.source = crowdSource;
		crowdSound.source.loop = true;
		crowdSound.source.start(0);
  		activeSounds.push(crowdSound.source);
	}
}

function stopSounds() {
	for(var i = 0; i < activeSounds.length; i++)
		activeSounds[i].stop(0);
	activeSounds = [];
}

// Buffer class
function BufferLoader(context, urlList, callback) {
  this.context = context;
  this.urlList = urlList;
  this.onload = callback;
  this.bufferList = new Array();
  this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function(url, index) {
  // Load buffer asynchronously
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  var loader = this;

  request.onload = function() {
    // Asynchronously decode the audio file data in request.response
    loader.context.decodeAudioData(
      request.response,
      function(buffer) {
        if (!buffer) {
          alert('error decoding file data: ' + url);
          return;
        }
        loader.bufferList[index] = buffer;
        if (++loader.loadCount === loader.urlList.length)
          loader.onload(loader.bufferList);
      },
      function(error) {
        console.error('decodeAudioData error', error);
      }
    );
  }

  request.onerror = function() {
    alert('BufferLoader: XHR error');
  }

  request.send();
}

BufferLoader.prototype.load = function() {
  for (var i = 0; i < this.urlList.length; ++i)
  this.loadBuffer(this.urlList[i], i);
}

// End Buffer class


class SoundPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			professorTalking:false,
			professorLocation: 0,
			constructionSound: false,
			crowdNoise: false,
			chalkboardNoise: false,
			airConditioningOn: false,
			nearbyChatter: false,
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
							<h3 id="seatNum"><i>Seat No: {this.state.seatNumber}</i></h3>
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
							<h3>Chalkboard Writing</h3>
							<ToggleButton 
								value={ this.state.chalkboardNoise || false } onToggle={
									(value) => {
										if(this.state.dropdownValue !== "Carleton") {
								    		this.setState({chalkboardNoise: !value,});
								    	}
								  	}
							 	}
							ToggleButton/>
						</li>
						<li>
							<h3>Classroom Chatter</h3>
							<ToggleButton 
								value={ this.state.crowdNoise || false } onToggle={
									(value) => {
								    	this.setState({crowdNoise: !value,});
								  	}
							 	}
							ToggleButton/>
						</li>
						<li>
							<h3>Construction Outside</h3>
							<ToggleButton 
								value={ this.state.constructionSound || false } onToggle={
									(value) => {
								    	this.setState({constructionSound: !value,});
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
					</ul>
					<div id="playSound">
						<button id="playButton" onClick={()=>playSounds(this.state.professorTalking, 
																		this.state.professorLocation, 
																		this.state.seatX,
																		this.state.seatY,
																		this.state.seatZ,
																		this.state.constructionSound,
																		this.state.airConditioningOn,
																		this.state.crowdNoise)}>Play sounds</button>
					</div>
					<div id="playSound">
						<button id="playButton" onClick={()=>stopSounds()}>Stop sounds</button>
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