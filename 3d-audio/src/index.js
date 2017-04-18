import React from 'react';
import ReactDOM from 'react-dom';
import Carleton from './Carleton/Carleton';
import SoundPanel from './SoundPanel/SoundPanel';
import E220 from './E220/E220';
import './index.css';

function onSeatSelection(event) {
	console.log("Event value : " + event.target.value);
}

ReactDOM.render(
    <div id = "wrapper">
		<SoundPanel />
    </div>,
  	document.getElementById('root')
);

