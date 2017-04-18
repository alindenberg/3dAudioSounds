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
var chalkboardSound = {};
var airCondSound = {};
var sneezeSound = {};
var ahemSound = {};
var laughSound = {};

// Array to store sounds being played currently
var activeSounds = [];

function init() {
	// Fix up prefixing
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	context = new AudioContext();

  	bufferLoader = new BufferLoader(
	    context,
	    [
	    // Lectures
	      'https://raw.githubusercontent.com/alindenberg/3dAudioSounds/austinBranch/3d-audio/src/SoundPanel/sounds/Professor%20(Bush).wav',
	      'https://raw.githubusercontent.com/alindenberg/3dAudioSounds/master/3d-audio/src/SoundPanel/sounds/highCeilingLecture.wav',
	      // Chalkboard
	      'https://raw.githubusercontent.com/alindenberg/3dAudioSounds/master/3d-audio/src/SoundPanel/sounds/chalkboard.wav',
	      // Random classroom noises (Sneeze, Ahem, & laugh)
	      'https://raw.githubusercontent.com/alindenberg/3dAudioSounds/master/3d-audio/src/SoundPanel/sounds/sneeze.wav',
	      'https://raw.githubusercontent.com/alindenberg/3dAudioSounds/austinBranch/3d-audio/src/SoundPanel/sounds/ahem.wav',
	      'https://raw.githubusercontent.com/alindenberg/3dAudioSounds/master/3d-audio/src/SoundPanel/sounds/laughCrowd.wav',
	      // Air conditioner
	      'https://raw.githubusercontent.com/alindenberg/3dAudioSounds/master/3d-audio/src/SoundPanel/sounds/Air%20conditioner.wav',
	      // Construction
	      'https://raw.githubusercontent.com/alindenberg/3dAudioSounds/master/3d-audio/src/SoundPanel/sounds/construction.wav',

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
	
	chalkboardSound.volume = context.createGain();
	chalkboardSound.volume.value = 50;
	chalkboardSound.panner = context.createPanner();
	chalkboardSound.volume.connect(chalkboardSound.panner);
	chalkboardSound.panner.connect(context.destination);

	sneezeSound.volume = context.createGain();
	sneezeSound.volume.value=1;
	sneezeSound.panner = context.createPanner();
	sneezeSound.volume.connect(sneezeSound.panner);
	sneezeSound.panner.connect(context.destination);

	ahemSound.volume = context.createGain();
	ahemSound.volume.value=1;
	ahemSound.panner = context.createPanner();
	ahemSound.volume.connect(ahemSound.panner);
	ahemSound.panner.connect(context.destination);

	laughSound.volume = context.createGain();
	laughSound.volume.value=-10;
	laughSound.panner = context.createPanner();
	laughSound.volume.connect(laughSound.panner);
	laughSound.panner.connect(context.destination);

	constructionSound.volume = context.createGain();
	constructionSound.volume.value = -1;
	constructionSound.panner = context.createPanner();
	constructionSound.volume.connect(constructionSound.panner);
	constructionSound.panner.connect(context.destination);

	airCondSound.volume = context.createGain();
	airCondSound.panner = context.createPanner();
	airCondSound.volume.connect(airCondSound.panner);
	airCondSound.panner.connect(context.destination);	
}

function playSounds(currentClassroom, teacherOn, teacherX, chalkboardOn, seatX, seatY, seatZ, crowdOn, constructionOn, airCondOn) {
	// Stop any sounds currently playing
	stopSounds();

	// THIS WILL BE SEAT LOCATION
  	// context.listener.setPosition(0, 0, 0);

	if(teacherOn) {
		// Create new source
		var teacherSource = context.createBufferSource();
		teacherSource.buffer = bufferArray[0];
		teacherSource.connect(teacherSound.volume);

		// Set position of sound
		teacherX = teacherX-seatX;
		teacherSound.panner.setPosition(teacherX/5,0, seatZ);

		// Set source and play sound
		teacherSound.source = teacherSource;
		teacherSound.source.loop = true;
		teacherSound.source.start(0);
		activeSounds.push(teacherSound.source);
	}

	if(chalkboardOn) {
		// Create new source
		var chalkboardSource = context.createBufferSource();
		chalkboardSource.buffer = bufferArray[2];
		chalkboardSource.connect(chalkboardSound.volume);

		// Set position of sound
		var chalkboardX = (55-seatX);
		chalkboardSound.panner.setPosition(chalkboardX,0, seatZ);

		// Set source and play sound
		chalkboardSound.source = chalkboardSource;
		chalkboardSound.source.loop = true;
		chalkboardSound.source.start(0);
		activeSounds.push(chalkboardSound.source);
	}

	if(crowdOn) {
  // 		// Create new source
  		var ahemSource = context.createBufferSource();
		ahemSource.buffer = bufferArray[4];
		ahemSource.connect(ahemSound.volume);

		// Set position of sound

		ahemSound.panner.setPosition(seatX-50,0,-seatZ+100);

		// Set source and play sound
		ahemSound.source = ahemSource;
		ahemSound.source.loop = false;
		ahemSound.source.start(context.currentTime + 2,0,1);
  		activeSounds.push(ahemSound.source);

		// // Create new source
  		var sneezeSource = context.createBufferSource();
		sneezeSource.buffer = bufferArray[3];
		sneezeSource.connect(sneezeSound.volume);

		// Set position of sound
		sneezeSound.panner.setPosition(seatX-10,0,-seatZ+50);

		// Set source and play sound
		sneezeSound.source = sneezeSource;
		sneezeSound.source.loop = false;
		sneezeSound.source.start(context.currentTime + 4,0,1);
  		activeSounds.push(sneezeSound.source);


  		// Create new source
  		var laughSource = context.createBufferSource();
		laughSource.buffer = bufferArray[5];
		laughSource.connect(laughSound.volume);

		// Set position of sound
		laughSound.panner.setPosition(-1,0,-100);

		// Set source and play sound
		laughSound.source = laughSource;
		sneezeSound.source.loop = false;
		laughSound.source.start(context.currentTime + 5,0,2);
  		activeSounds.push(laughSound.source);
	}

	if(constructionOn) {
		// Create new source
  		var constructionSource = context.createBufferSource();
		constructionSource.buffer = bufferArray[7];
		constructionSource.connect(constructionSound.volume);

		// Set position of sound
		var constructionZ = (-seatZ*100)-5000;
		var constructionX = 55-seatX;
		constructionSound.panner.setPosition(constructionX,0,constructionZ);
		constructionSound.volume.value = -100;

		// Set source and play sound
		constructionSound.source = constructionSource;
		constructionSound.source.loop = true;
		constructionSound.source.start(0);
  		activeSounds.push(constructionSound.source);
	}

	if(airCondOn) {
		// Create new source
  		var airCondSource = context.createBufferSource();
		airCondSource.buffer = bufferArray[6];
		airCondSource.connect(airCondSound.volume);

		// Set position of sound
		var airCondZ = -50-seatZ;
		var airCondX = 100-seatX;
		airCondSound.panner.setPosition(airCondX,0,airCondZ);

		// Set source and play sound
		airCondSound.source = airCondSource;
		airCondSound.source.loop = true;
		airCondSound.source.start(0);
  		activeSounds.push(airCondSound.source);
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
			professorLocation: 55,
			constructionSound: false,
			crowdNoise: false,
			chalkboardNoise: false,
			airConditioningOn: false,
			nearbyChatter: false,
			seatX: 25,
			seatY: 0,
			seatZ: -10,
			seatNumber: 1,
			currentClassroom: <E220 onClick={this.handleClick}/>,
			dropdownValue: "E220",
		};
	}
	render() {
    	return (
    		<div>
    			<div id="navbar">
					<span>Classroom: </span>
					<select value={this.state.dropdownValue} onChange={this.handleChange}>
						<option value="E220">E220</option>
						<option value="Carleton">Carleton</option>
					</select>
				</div>
				<div id ="classroom">
					<div id="teacherDiv">
						<h3>Professor Position</h3>
						<div id="teacherPosition">
							<Slider defaultValue={this.state.professorLocation} 
								onChange={
									(value) => { 
										this.setState({professorLocation: value})
									}
								}></Slider>
						</div>
					</div>
					{this.state.currentClassroom}
				</div>
	    		<div id="soundPanel">
					<h1><u>SoundPanel</u></h1>
					<ul id="configurables">
						<li>
							<h3 id="seatNum"><i><strong>Seat No: {this.state.seatNumber}</strong></i></h3>
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
						<button id="playButton" onClick={()=>playSounds(this.state.dropdownValue,
																		this.state.professorTalking, 
																		this.state.professorLocation, 
																		this.state.chalkboardNoise,
																		this.state.seatX,
																		this.state.seatY,
																		this.state.seatZ,
																		this.state.crowdNoise,
																		this.state.constructionSound,
																		this.state.airConditioningOn)}>Play sounds</button>
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
			this.setState({currentClassroom: <Carleton onClick={this.handleClick}/>, 
							dropdownValue: "Carleton", 
							seatX: 40, 
							seatY: 0, 
							seatZ: -5, 
							seatNumber: 1, 
							chalkboardNoise: false});
		else if(event.target.value === "E220")
			this.setState({currentClassroom: <E220 onClick={this.handleClick}/>, 
							dropdownValue: "E220", 
							seatX: 25, 
							seatY: 0, 
							seatZ: -5, 
							seatNumber: 1});
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