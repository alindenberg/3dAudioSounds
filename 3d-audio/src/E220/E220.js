import React, { Component } from 'react';
import Slider from 'rc-slider/assets/index.css';

import './E220.css';

class E220 extends Component {

  render() {
    return (
        <div id="E220">
          <div id="firstRow">
            <button id="firstSeat" value={[1, 25, 0, -5]} onClick={this.props.onClick}>01</button>
            <button id="secondSeat" value={[2, 35, 0, -5]} onClick={this.props.onClick}>02</button>
            <button id="thirdSeat" value={[3, 55, 0, -5]} onClick={this.props.onClick}>03</button>
            <button id="fourthSeat" value={[4, 70, 0, -5]} onClick={this.props.onClick}>04</button>
            <button id="fifthSeat" value={[5, 85, 0, -5]} onClick={this.props.onClick}>05</button>
          </div>
          <div id="secondRow">
            <button id="firstSeat" value={[6, 25, 0, -10]} onClick={this.props.onClick}>06</button>
            <button id="secondSeat" value={[7, 35, 0, -10]} onClick={this.props.onClick}>07</button>
            <button id="thirdSeat" value={[8, 55, 0, -10]} onClick={this.props.onClick}>08</button>
            <button id="fourthSeat" value={[9, 70, 0, -10]} onClick={this.props.onClick}>09</button>
            <button id="fifthSeat" value={[10, 85, 0, -10]} onClick={this.props.onClick}>10</button>
          </div>
          <div id="thirdRow">
            <button id="firstSeat" value={[11, 25, 0, -15]} onClick={this.props.onClick}>11</button>
            <button id="secondSeat" value={[12, 35, 0, -15]} onClick={this.props.onClick}>12</button>
            <button id="thirdSeat" value={[13, 55, 0, -15]} onClick={this.props.onClick}>13</button>
            <button id="fourthSeat" value={[14, 0, 0, -15]} onClick={this.props.onClick}>14</button>
            <button id="fifthSeat" value={[15, 85, 0, -15]} onClick={this.props.onClick}>15</button>
          </div>
          <div id="fourthRow">
            <button id="firstSeat" value={[16, 25, 0, -20, ]} onClick={this.props.onClick}>16</button>
            <button id="secondSeat" value={[17, 35, 0, -20]} onClick={this.props.onClick}>17</button>
            <button id="thirdSeat" value={[18, 55, 0, -20]} onClick={this.props.onClick}>18</button>
            <button id="fourthSeat" value={[19, 70, 0, -20]} onClick={this.props.onClick}>19</button>
            <button id="fifthSeat" value={[20, 85, 0, -20]} onClick={this.props.onClick}>20</button>
          </div>
          <div id="fifthRow">
            <button id="firstSeat" value={[21, 25, 0, -25]} onClick={this.props.onClick}>21</button>
            <button id="secondSeat" value={[22, 35, 0, -25]} onClick={this.props.onClick}>22</button>
            <button id="thirdSeat" value={[23, 55, 0, -25]} onClick={this.props.onClick}>23</button>
            <button id="fourthSeat" value={[24, 70, 0, -25]} onClick={this.props.onClick}>24</button>
            <button id="fifthSeat" value={[25, 85, 0, -25]} onClick={this.props.onClick}>25</button>
          </div>
          <div id="sixthRow">
            <button id="firstSeat" value={[26, 25, 0, -30]} onClick={this.props.onClick}>26</button>
            <button id="secondSeat" value={[27, 35, 0, -30]} onClick={this.props.onClick}>27</button>
            <button id="thirdSeat" value={[28, 55, 0, -30]} onClick={this.props.onClick}>28</button>
            <button id="fourthSeat" value={[29, 70, 0, -30]} onClick={this.props.onClick}>29</button>
            <button id="fifthSeat" value={[30, 85, 0, -30]} onClick={this.props.onClick}>30</button>
          </div>
        </div>
    );
  }
}

export default E220;
