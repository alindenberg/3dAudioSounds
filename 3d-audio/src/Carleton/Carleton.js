import React, { Component } from 'react';
import E220 from '../E220/E220';

import './Carleton.css';

class Carleton extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="Carleton">
				<div id="carletonFirstRow">
					<button id="carletonFirstSeat" value={[1,40,0,-5]} onClick={this.props.onClick}>01</button>
					<button id="carletonSecondSeat" value={[2,45,10,-5]} onClick={this.props.onClick}>02</button>
					<button id="carletonThirdSeat" value={[3,50,10,-5]} onClick={this.props.onClick}>03</button>
					<button id="carletonFourthSeat" value={[4,60,10,-5]} onClick={this.props.onClick}>04</button>
					<button id="carletonFourthSeat" value={[5,65,10,-5]} onClick={this.props.onClick}>05</button>
				</div>
				<div id="carletonSecondRow">
					<button id="carletonFirstSeat" value={[6,37.5, 0,-10]} onClick={this.props.onClick}>06</button>
					<button id="carletonSecondSeat" value={[7,42.5, 0,-10]} onClick={this.props.onClick}>07</button>
					<button id="carletonThirdSeat" value={[8,47.5, 0,-10]} onClick={this.props.onClick}>08</button>
					<button id="carletonFourthSeat" value={[9,52.5, 0,-10]} onClick={this.props.onClick}>09</button>
					<button id="carletonFourthSeat" value={[10,57.5, 0,-10]} onClick={this.props.onClick}>10</button>
					<button id="carletonFifthSeat" value={[11,62.5, 0,-10]} onClick={this.props.onClick}>11</button>
				</div>
				<div id="carletonThirdRow">
					<button id="carletonFirstSeat" value={[12,35, 0,-15]} onClick={this.props.onClick}>12</button>
					<button id="carletonSecondSeat" value={[13,40, 0,-15]} onClick={this.props.onClick}>13</button>
					<button id="carletonThirdSeat" value={[14,45, 0,-15]} onClick={this.props.onClick}>14</button>
					<button id="carletonFourthSeat" value={[15,50, 0,-15]} onClick={this.props.onClick}>15</button>
					<button id="carletonFifthSeat" value={[16,60, 0,-15]} onClick={this.props.onClick}>16</button>
					<button id="carletonFourthSeat" value={[17,65, 0,-15]} onClick={this.props.onClick}>17</button>
					<button id="carletonSixthSeat" value={[18, 70, 0,-15]} onClick={this.props.onClick}>18</button>
				</div>
				<div id="carletonFourthRow">
					<button id="carletonFirstSeat" value={[19,32.5, 0,-20]} onClick={this.props.onClick}>19</button>
					<button id="carletonSecondSeat" value={[20,37.5, 0,-20]} onClick={this.props.onClick}>20</button>
					<button id="carletonThirdSeat" value={[21,38.5, 0,-20]} onClick={this.props.onClick}>21</button>
					<button id="carletonFourthSeat" value={[22,43,5, 0,-20]} onClick={this.props.onClick}>22</button>
					<button id="carletonFifthSeat" value={[23,48,5, 0,-20]} onClick={this.props.onClick}>23</button>
					<button id="carletonFourthSeat" value={[24,53.5, 0,-20]} onClick={this.props.onClick}>24</button>
					<button id="carletonSixthSeat" value={[25,58.5, 0,-20]} onClick={this.props.onClick}>25</button>
					<button id="carletonSeventhSeat" value={[26,63.5, 0,-20]} onClick={this.props.onClick}>26</button>
				</div>
				<div id="carletonFifthRow">
					<button id="carletonFirstSeat" value={[27,30, 0,-25]} onClick={this.props.onClick}>27</button>
					<button id="carletonNinthSeat" value={[28,35, 0,-25]} onClick={this.props.onClick}>28</button>
					<button id="carletonNinthSeat" value={[29,40, 0,-25]} onClick={this.props.onClick}>29</button>
					<button id="carletonFourthSeat" value={[30,45, 0,-25]} onClick={this.props.onClick}>30</button>
					<button id="carletonFifthSeat" value={[31,50, 0,-25]} onClick={this.props.onClick}>31</button>
					<button id="carletonSixthSeat" value={[32,60, 0,-25]} onClick={this.props.onClick}>32</button>
					<button id="carletonSeventhSeat" value={[33,65, 0,-25]} onClick={this.props.onClick}>33</button>
					<button id="carletonNinthSeat" value={[34,70, 0,-25]} onClick={this.props.onClick}>34</button>
					<button id="carletonNinthSeat" value={[35,75, 0,-25]} onClick={this.props.onClick}>35</button>
					<button id="carletonNinthSeat" value={[36,80, 0,-25]} onClick={this.props.onClick}>36</button>
				</div>
				<div id="carletonSixthRow">
					<button id="carletonFirstSeat" value={[37,27.5, 0,-30]} onClick={this.props.onClick}>37</button>
					<button id="carletonSecondSeat" value={[38,32.5, 0,-30]} onClick={this.props.onClick}>38</button>
					<button id="carletonThirdSeat" value={[39,37.5, 0,-30]} onClick={this.props.onClick}>39</button>
					<button id="carletonFourthSeat" value={[40,42.5, 0,-30]} onClick={this.props.onClick}>40</button>
					<button id="carletonFifthSeat" value={[41,47.5, 0,-30]} onClick={this.props.onClick}>41</button>
					<button id="carletonSixthSeat" value={[42,52.5, 0,-30]} onClick={this.props.onClick}>42</button>
					<button id="carletonSeventhSeat" value={[43,57.5, 0,-30]} onClick={this.props.onClick}>43</button>
					<button id="carletonNinthSeat" value={[44,62.5, 0,-30]} onClick={this.props.onClick}>44</button>
					<button id="carletonNinthSeat" value={[45,67.5, 0,-30]} onClick={this.props.onClick}>45</button>
					<button id="carletonNinthSeat" value={[46,72.5, 0,-30]} onClick={this.props.onClick}>46</button>
					<button id="carletonNinthSeat" value={[47,77.5, 0,-30]} onClick={this.props.onClick}>47</button>
				</div>
				<div id="carletonFifthRow">
					<button id="carletonFirstSeat" value={[48,25, 0,-35]} onClick={this.props.onClick}>48</button>
					<button id="carletonSecondSeat" value={[49,30, 0,-35]} onClick={this.props.onClick}>49</button>
					<button id="carletonThirdSeat" value={[50,35, 0,-35]} onClick={this.props.onClick}>50</button>
					<button id="carletonFourthSeat" value={[51,40, 0,-35]} onClick={this.props.onClick}>51</button>
					<button id="carletonFifthSeat" value={[52,45, 0,-35]} onClick={this.props.onClick}>52</button>
					<button id="carletonSixthSeat" value={[53,40, 0,-35]} onClick={this.props.onClick}>53</button>
					<button id="carletonSeventhSeat" value={[54,55, 0,-35]} onClick={this.props.onClick}>54</button>
					<button id="carletonNinthSeat" value={[55,60, 0,-35]} onClick={this.props.onClick}>55</button>
					<button id="carletonNinthSeat" value={[56,65, 0,-35]} onClick={this.props.onClick}>56</button>
					<button id="carletonNinthSeat" value={[57,70, 0,-35]} onClick={this.props.onClick}>57</button>
					<button id="carletonNinthSeat" value={[58,75, 0,-35]} onClick={this.props.onClick}>58</button>
					<button id="carletonNinthSeat" value={[59,80, 0,-35]} onClick={this.props.onClick}>59</button>
				</div>
				<div id="carletonFifthRow">
					<button id="carletonFirstSeat" value={[60,22.5, 0,-40]} onClick={this.props.onClick}>60</button>
					<button id="carletonSecondSeat" value={[61,27.5, 0,-40]} onClick={this.props.onClick}>61</button>
					<button id="carletonThirdSeat" value={[62,32.5, 0,-40]} onClick={this.props.onClick}>62</button>
					<button id="carletonFourthSeat" value={[63,37.5, 0,-40]} onClick={this.props.onClick}>63</button>
					<button id="carletonFifthSeat" value={[64,42.5, 0,-40]} onClick={this.props.onClick}>64</button>
					<button id="carletonSixthSeat" value={[65,47.5, 0,-40]} onClick={this.props.onClick}>65</button>
					<button id="carletonSeventhSeat" value={[66,52.5, 0,-40]} onClick={this.props.onClick}>66</button>
					<button id="carletonNinthSeat" value={[67,57.5, 0,-40]} onClick={this.props.onClick}>67</button>
					<button id="carletonNinthSeat" value={[68,62.5, 0,-40]} onClick={this.props.onClick}>68</button>
					<button id="carletonNinthSeat" value={[69,67.5, 0,-40]} onClick={this.props.onClick}>69</button>
					<button id="carletonNinthSeat" value={[70,72.5, 0,-40]} onClick={this.props.onClick}>70</button>
					<button id="carletonNinthSeat" value={[71,77.5, 0,-40]} onClick={this.props.onClick}>71</button>
					<button id="carletonNinthSeat" value={[72,82.5, 0,-40]} onClick={this.props.onClick}>72</button>
				</div>
				<div id="carletonFifthRow">
					<button id="carletonFirstSeat" value={[73,20, 0,-45]} onClick={this.props.onClick}>73</button>
					<button id="carletonSecondSeat" value={[74,25, 0,-45]} onClick={this.props.onClick}>74</button>
					<button id="carletonThirdSeat" value={[75,30, 0,-45]} onClick={this.props.onClick}>75</button>
					<button id="carletonFourthSeat" value={[76,35, 0,-45]} onClick={this.props.onClick}>76</button>
					<button id="carletonFifthSeat" value={[77,40, 0,-45]} onClick={this.props.onClick}>77</button>
					<button id="carletonSixthSeat" value={[78,45, 0,-45]} onClick={this.props.onClick}>78</button>
					<button id="carletonSeventhSeat" value={[79,50, 0,-45]} onClick={this.props.onClick}>79</button>
					<button id="carletonNinthSeat" value={[80,55, 0,-45]} onClick={this.props.onClick}>80</button>
					<button id="carletonNinthSeat" value={[81,60, 0,-45]} onClick={this.props.onClick}>81</button>
					<button id="carletonNinthSeat" value={[82,65, 0,-45]} onClick={this.props.onClick}>82</button>
					<button id="carletonNinthSeat" value={[83,70, 0,-45]} onClick={this.props.onClick}>83</button>
					<button id="carletonNinthSeat" value={[84,75, 0,-45]} onClick={this.props.onClick}>84</button>
					<button id="carletonNinthSeat" value={[85,80, 0,-45]} onClick={this.props.onClick}>85</button>
					<button id="carletonNinthSeat" value={[86,85, 0,-45]} onClick={this.props.onClick}>86</button>
					<button id="carletonNinthSeat" value={[87,90, 0,-45]} onClick={this.props.onClick}>87</button>
				</div>
			</div>
		);
	}
} 
export default Carleton;
