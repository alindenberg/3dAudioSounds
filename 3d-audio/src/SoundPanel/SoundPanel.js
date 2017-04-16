import React, { Component } from 'react';
import ToggleButton from 'react-toggle-button';
import Slider from 'rc-slider/lib/Slider';

import './SoundPanel.css';
import E220 from '../E220/E220';
import Carleton from '../Carleton/Carleton';

class SoundPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			professorTalking:false,
			studentSittingNearby: false,
			airConditioningOn: false,
			nearbyChatter: false,
			distantChatter: false,
		};
	}
	render() {
    	return (
    		<div id="soundPanel">
				<h1><u>SoundPanel</u></h1>
				<ul id="configurables">
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
			</div>
		)
	}
}

export default SoundPanel;