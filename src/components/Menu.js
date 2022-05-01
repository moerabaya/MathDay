import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import './Menu.scss';

import hoverSound from '../assets/audio/sfx00375.wav';
import clickSound from '../assets/audio/sfx00376.wav';

function Menu() {
	const [playHover] = useSound(hoverSound);
	const [playClick] = useSound(clickSound);
	return (
		<div id="Menu" className="intro">
			<header>
				<h1>Turn the frown upside down</h1>
			</header>
			<ul className="menu">
				<li><Link className='button' onMouseEnter={playHover} onClick={playClick} to="/play">Play</Link></li>
				<li><Link className='button' onMouseEnter={playHover} onClick={playClick} to="/leader-board">Scores</Link></li>
			</ul>

			<a className='github-link' href="https://github.com/moerabaya" onMouseEnter={playHover} onClick={playClick}>@moerabaya</a>
		</div>
	)
}

export default Menu;