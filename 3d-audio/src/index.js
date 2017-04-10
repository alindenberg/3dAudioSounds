import React from 'react';
import ReactDOM from 'react-dom';
import SoundPanel from './SoundPanel/SoundPanel';
import Carleton from './Carleton/Carleton';
import E220 from './E220/E220';
import './index.css';

var selector = document.getElementById('selector');
selector.onChange = handleChange(selector.value);

ReactDOM.render(
	// <div id="viewPort">
	//   	<SoundPanel/>
 //  	</div>,
 	<E220 />,
  	document.getElementById('root')
);

function initElement() {
	var selector = document.getElementById('selector');
	selector.onChange=handleChange(selector.value);
}

function handleChange(newClassroom) {
	var newRoom;
    document.getElementById('currentClassroom').remove();
    if(newClassroom === 'E220')
    	newRoom = <E220 id='currentClassroom' />
    // newRoom.id='currentClassroom';
    if(newClassroom === 'Carleton')
    	newRoom = <Carleton id='currentClassroom' />
    // document.getElementById('classroomDiv').appendChild(newRoom);
 }

