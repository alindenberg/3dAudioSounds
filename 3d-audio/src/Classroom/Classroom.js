import React, { Component } from 'react';
import Slider from 'rc-slider/lib/Slider';
import Dropdown from 'react-dropdown';
import SoundPanel from '../SoundPanel/SoundPanel'
import E220 from '../E220/E220';
import Carleton from '../Carleton/Carleton';

import './Classroom.css';

class Classroom extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
				<SoundPanel />
			</div>
		);
	}

	handleChange = (event) => {
		if(event.target.value ==="Carleton")
			this.setState({currentClassroom: <Carleton onClick={this.handleClick}/>, dropdownValue: "Carleton"});
		else if(event.target.value === "E220")
			this.setState({currentClassroom: <E220 onClick={this.handleClick}/>, dropdownValue: "E220"});
  	}

  	onSeatSelection = (event) => {
  		this.props.onSeatSelection(event);
  	}

  	handleClick = (event) => {
  		console.log("Value: "+ event.target.value);
  	}
} 
export default Classroom;
