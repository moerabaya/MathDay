import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BackArrow from '../assets/BackArrow';
import useSound from 'use-sound';
import './Menu.scss';

import hoverSound from '../assets/audio/sfx00375.wav';
import clickSound from '../assets/audio/sfx00376.wav';

function LeaderBoard() {
	const [data, setData] = useState([]);
	const [playHover] = useSound(hoverSound);
	const [playClick] = useSound(clickSound);

	useEffect(() => {
		if (typeof(Storage) !== "undefined") {
			var records = window.localStorage.getItem('records');
			if(records) {
				setData(JSON.parse(records));
			}
		}
	}, []);

	const renderData = _ => {
		var records = [];
		records.push(<li className="list-header"><span>Name</span><span>Score</span><span>Date</span></li>)
		data.map((item, index) => records.push(<li><span>{item.username}</span><span>{item.score}</span><span>{item.date}</span></li>));

		return records;
	}

	return (
		<div className="leader-board">
			<Link to="/" onMouseEnter={playHover} onClick={playClick} className="button icon resize back"><BackArrow /></Link>

			<header>
				<h1 className='title'>High Scores</h1>
				<div className="scores-list">
					{data.length > 0 ? renderData() : <li className="no-score">No Score Records</li>}
				</div>
			</header>
			
			<a onMouseEnter={playHover} onClick={playClick} className='github-link' href="https://github.com/moerabaya">@moerabaya</a>
		</div>
	)
}

export default LeaderBoard;