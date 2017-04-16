import React, { Component } from 'react';
import E220 from '../E220/E220';

import './Carleton.css';

class Carleton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seatCoordinates: [0,0,0],
		};
	}
	render() {
		return (
			<div id="Carleton">
				<div id="carletonFirstRow">
					<button id="carletonFirstSeat" value={[1,0,10,0]} onClick={this.props.onClick}>01</button>
					<button id="carletonSecondSeat" value={[2,0,10,0]} onClick={this.props.onClick}>02</button>
					<button id="carletonThirdSeat" value={[3,0,10,0]} onClick={this.props.onClick}>03</button>
					<button id="carletonFourthSeat" value={[4,0,10,0]} onClick={this.props.onClick}>04</button>
					<button id="carletonFourthSeat" value={[5,0,10,0]} onClick={this.props.onClick}>04</button>
				</div>
				<div id="carletonSecondRow">
					<button id="carletonFirstSeat" value={[6,0,10,0]} onClick={this.props.onClick}>06</button>
					<button id="carletonSecondSeat" value={[7,0,10,0]} onClick={this.props.onClick}>07</button>
					<button id="carletonThirdSeat" value={[8,0,10,0]} onClick={this.props.onClick}>08</button>
					<button id="carletonFourthSeat" value={[9,0,10,0]} onClick={this.props.onClick}>09</button>
					<button id="carletonFourthSeat" value={[10,0,10,0]} onClick={this.props.onClick}>04</button>
					<button id="carletonFifthSeat" value={[11,0,10,0]} onClick={this.props.onClick}>10</button>
				</div>
				<div id="carletonThirdRow">
					<button id="carletonFirstSeat" value={[12,0,10,0]} onClick={this.props.onClick}>11</button>
					<button id="carletonSecondSeat" value={[13,0,10,0]} onClick={this.props.onClick}>12</button>
					<button id="carletonThirdSeat" value={[14,0,10,0]} onClick={this.props.onClick}>13</button>
					<button id="carletonFourthSeat" value={[15,0,10,0]} onClick={this.props.onClick}>14</button>
					<button id="carletonFifthSeat" value={[16,0,10,0]} onClick={this.props.onClick}>15</button>
					<button id="carletonFourthSeat" value={[17,0,10,0]} onClick={this.props.onClick}>04</button>
					<button id="carletonSixthSeat" value={[18,0,10,0]} onClick={this.props.onClick}>16</button>
				</div>
				<div id="carletonFourthRow">
					<button id="carletonFirstSeat" value={[19,0,10,0]} onClick={this.props.onClick}>17</button>
					<button id="carletonSecondSeat" value={[20,0,10,0]} onClick={this.props.onClick}>18</button>
					<button id="carletonThirdSeat" value={[21,0,10,0]} onClick={this.props.onClick}>19</button>
					<button id="carletonFourthSeat" value={[22,0,10,0]} onClick={this.props.onClick}>20</button>
					<button id="carletonFifthSeat" value={[23,0,10,0]} onClick={this.props.onClick}>21</button>
					<button id="carletonFourthSeat" value={[24,0,10,0]} onClick={this.props.onClick}>04</button>
					<button id="carletonSixthSeat" value={[25,0,10,0]} onClick={this.props.onClick}>22</button>
					<button id="carletonSeventhSeat" value={[26,0,10,0]} onClick={this.props.onClick}>23</button>
				</div>
				<div id="carletonFifthRow">
					<button id="carletonFirstSeat" value={[50,0,10,0]} onClick={this.props.onClick}>21</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonFourthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>24</button>
					<button id="carletonFifthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>25</button>
					<button id="carletonSixthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>26</button>
					<button id="carletonSeventhSeat" value={[50,0,10,0]} onClick={this.props.onClick}>27</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
				</div>
				<div id="carletonSixthRow">
					<button id="carletonFirstSeat" value={[50,0,10,0]} onClick={this.props.onClick}>29</button>
					<button id="carletonSecondSeat" value={[50,0,10,0]} onClick={this.props.onClick}>30</button>
					<button id="carletonThirdSeat" value={[50,0,10,0]} onClick={this.props.onClick}>31</button>
					<button id="carletonFourthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>31</button>
					<button id="carletonFifthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>32</button>
					<button id="carletonSixthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>33</button>
					<button id="carletonSeventhSeat" value={[50,0,10,0]} onClick={this.props.onClick}>34</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>35</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
				</div>
				<div id="carletonFifthRow">
					<button id="carletonFirstSeat" value={[50,0,10,0]} onClick={this.props.onClick}>29</button>
					<button id="carletonSecondSeat" value={[50,0,10,0]} onClick={this.props.onClick}>30</button>
					<button id="carletonThirdSeat" value={[50,0,10,0]} onClick={this.props.onClick}>31</button>
					<button id="carletonFourthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>31</button>
					<button id="carletonFifthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>32</button>
					<button id="carletonSixthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>33</button>
					<button id="carletonSeventhSeat" value={[50,0,10,0]} onClick={this.props.onClick}>34</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>35</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
				</div>
				<div id="carletonFifthRow">
					<button id="carletonFirstSeat" value={[50,0,10,0]} onClick={this.props.onClick}>29</button>
					<button id="carletonSecondSeat" value={[50,0,10,0]} onClick={this.props.onClick}>30</button>
					<button id="carletonThirdSeat" value={[50,0,10,0]} onClick={this.props.onClick}>31</button>
					<button id="carletonFourthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>31</button>
					<button id="carletonFifthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>32</button>
					<button id="carletonSixthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>33</button>
					<button id="carletonSeventhSeat" value={[50,0,10,0]} onClick={this.props.onClick}>34</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>35</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
				</div>
				<div id="carletonFifthRow">
					<button id="carletonFirstSeat" value={[50,0,10,0]} onClick={this.props.onClick}>29</button>
					<button id="carletonSecondSeat" value={[50,0,10,0]} onClick={this.props.onClick}>30</button>
					<button id="carletonThirdSeat" value={[50,0,10,0]} onClick={this.props.onClick}>31</button>
					<button id="carletonFourthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>31</button>
					<button id="carletonFifthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>32</button>
					<button id="carletonSixthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>33</button>
					<button id="carletonSeventhSeat" value={[50,0,10,0]} onClick={this.props.onClick}>34</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>35</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[50,0,10,0]} onClick={this.props.onClick}>36</button>
				</div>
			</div>
		);
	}

	handleChange = (event) => {
		this.setState({seatCoordinates: event.target.value});
	}
} 
export default Carleton;
