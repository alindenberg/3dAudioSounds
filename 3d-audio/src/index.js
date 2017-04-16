import React from 'react';
import ReactDOM from 'react-dom';
import Carleton from './Carleton/Carleton';
import Classroom from './Classroom/Classroom';
import E220 from './E220/E220';
import './index.css';

function onSeatSelection(event) {
	console.log("Event value : " + event.target.value);
}

ReactDOM.render(
    <div id = "wrapper">
		<Classroom />
    </div>,
  	document.getElementById('root')
);

