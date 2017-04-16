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
					<button id="carletonFirstSeat" value={[0,10,0]} onClick={this.props.onClick}>01</button>
					<button id="carletonSecondSeat" value={[0,10,0]} onClick={this.props.onClick}>02</button>
					<button id="carletonThirdSeat" value={[0,10,0]} onClick={this.props.onClick}>03</button>
					<button id="carletonFourthSeat" value={[0,10,0]} onClick={this.props.onClick}>04</button>
					<button id="carletonFourthSeat" value={[0,10,0]} onClick={this.props.onClick}>04</button>
				</div>
				<div id="carletonSecondRow">
					<button id="carletonFirstSeat" value={[0,10,0]} onClick={this.props.onClick}>06</button>
					<button id="carletonSecondSeat" value={[0,10,0]} onClick={this.props.onClick}>07</button>
					<button id="carletonThirdSeat" value={[0,10,0]} onClick={this.props.onClick}>08</button>
					<button id="carletonFourthSeat" value={[0,10,0]} onClick={this.props.onClick}>09</button>
					<button id="carletonFourthSeat" value={[0,10,0]} onClick={this.props.onClick}>04</button>
					<button id="carletonFifthSeat" value={[0,10,0]} onClick={this.props.onClick}>10</button>
				</div>
				<div id="carletonThirdRow">
					<button id="carletonFirstSeat" value={[0,10,0]} onClick={this.props.onClick}>11</button>
					<button id="carletonSecondSeat" value={[0,10,0]} onClick={this.props.onClick}>12</button>
					<button id="carletonThirdSeat" value={[0,10,0]} onClick={this.props.onClick}>13</button>
					<button id="carletonFourthSeat" value={[0,10,0]} onClick={this.props.onClick}>14</button>
					<button id="carletonFifthSeat" value={[0,10,0]} onClick={this.props.onClick}>15</button>
					<button id="carletonFourthSeat" value={[0,10,0]} onClick={this.props.onClick}>04</button>
					<button id="carletonSixthSeat" value={[0,10,0]} onClick={this.props.onClick}>16</button>
				</div>
				<div id="carletonFourthRow">
					<button id="carletonFirstSeat" value={[0,10,0]} onClick={this.props.onClick}>17</button>
					<button id="carletonSecondSeat" value={[0,10,0]} onClick={this.props.onClick}>18</button>
					<button id="carletonThirdSeat" value={[0,10,0]} onClick={this.props.onClick}>19</button>
					<button id="carletonFourthSeat" value={[0,10,0]} onClick={this.props.onClick}>20</button>
					<button id="carletonFifthSeat" value={[0,10,0]} onClick={this.props.onClick}>21</button>
					<button id="carletonFourthSeat" value={[0,10,0]} onClick={this.props.onClick}>04</button>
					<button id="carletonSixthSeat" value={[0,10,0]} onClick={this.props.onClick}>22</button>
					<button id="carletonSeventhSeat" value={[0,10,0]} onClick={this.props.onClick}>23</button>
				</div>
				<div id="carletonFifthRow">
					<button id="carletonFirstSeat" value={[0,10,0]} onClick={this.props.onClick}>21</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonFourthSeat" value={[0,10,0]} onClick={this.props.onClick}>24</button>
					<button id="carletonFifthSeat" value={[0,10,0]} onClick={this.props.onClick}>25</button>
					<button id="carletonSixthSeat" value={[0,10,0]} onClick={this.props.onClick}>26</button>
					<button id="carletonSeventhSeat" value={[0,10,0]} onClick={this.props.onClick}>27</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
				</div>
				<div id="carletonSixthRow">
					<button id="carletonFirstSeat" value={[0,10,0]} onClick={this.props.onClick}>29</button>
					<button id="carletonSecondSeat" value={[0,10,0]} onClick={this.props.onClick}>30</button>
					<button id="carletonThirdSeat" value={[0,10,0]} onClick={this.props.onClick}>31</button>
					<button id="carletonFourthSeat" value={[0,10,0]} onClick={this.props.onClick}>31</button>
					<button id="carletonFifthSeat" value={[0,10,0]} onClick={this.props.onClick}>32</button>
					<button id="carletonSixthSeat" value={[0,10,0]} onClick={this.props.onClick}>33</button>
					<button id="carletonSeventhSeat" value={[0,10,0]} onClick={this.props.onClick}>34</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>35</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
				</div>
				<div id="carletonFifthRow">
					<button id="carletonFirstSeat" value={[0,10,0]} onClick={this.props.onClick}>29</button>
					<button id="carletonSecondSeat" value={[0,10,0]} onClick={this.props.onClick}>30</button>
					<button id="carletonThirdSeat" value={[0,10,0]} onClick={this.props.onClick}>31</button>
					<button id="carletonFourthSeat" value={[0,10,0]} onClick={this.props.onClick}>31</button>
					<button id="carletonFifthSeat" value={[0,10,0]} onClick={this.props.onClick}>32</button>
					<button id="carletonSixthSeat" value={[0,10,0]} onClick={this.props.onClick}>33</button>
					<button id="carletonSeventhSeat" value={[0,10,0]} onClick={this.props.onClick}>34</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>35</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
				</div>
				<div id="carletonFifthRow">
					<button id="carletonFirstSeat" value={[0,10,0]} onClick={this.props.onClick}>29</button>
					<button id="carletonSecondSeat" value={[0,10,0]} onClick={this.props.onClick}>30</button>
					<button id="carletonThirdSeat" value={[0,10,0]} onClick={this.props.onClick}>31</button>
					<button id="carletonFourthSeat" value={[0,10,0]} onClick={this.props.onClick}>31</button>
					<button id="carletonFifthSeat" value={[0,10,0]} onClick={this.props.onClick}>32</button>
					<button id="carletonSixthSeat" value={[0,10,0]} onClick={this.props.onClick}>33</button>
					<button id="carletonSeventhSeat" value={[0,10,0]} onClick={this.props.onClick}>34</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>35</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
				</div>
				<div id="carletonFifthRow">
					<button id="carletonFirstSeat" value={[0,10,0]} onClick={this.props.onClick}>29</button>
					<button id="carletonSecondSeat" value={[0,10,0]} onClick={this.props.onClick}>30</button>
					<button id="carletonThirdSeat" value={[0,10,0]} onClick={this.props.onClick}>31</button>
					<button id="carletonFourthSeat" value={[0,10,0]} onClick={this.props.onClick}>31</button>
					<button id="carletonFifthSeat" value={[0,10,0]} onClick={this.props.onClick}>32</button>
					<button id="carletonSixthSeat" value={[0,10,0]} onClick={this.props.onClick}>33</button>
					<button id="carletonSeventhSeat" value={[0,10,0]} onClick={this.props.onClick}>34</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>35</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
					<button id="carletonNinthSeat" value={[0,10,0]} onClick={this.props.onClick}>36</button>
				</div>
			</div>
		);
	}

	handleChange = (event) => {
		this.setState({seatCoordinates: event.target.value});
	}
} 
export default Carleton;
