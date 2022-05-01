import './GamePlay.scss';
import BackArrow from '../assets/BackArrow';
import CoinSad from '../assets/CoinSad';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import NextArrow from '../assets/NextArrow';
import Replay from '../assets/Replay';
import LeaderBoard from '../assets/LeaderBoard';
import useSound from 'use-sound';

import hoverSound from '../assets/audio/sfx00375.wav';
import clickSound from '../assets/audio/sfx00376.wav';
import keySound from '../assets/audio/sfx00374.wav';
import coinSound from '../assets/audio/coinflip.wav';

function GamePlay() {
	const [playHover] = useSound(hoverSound);
	const [playClick] = useSound(clickSound);
	const [playKey] = useSound(keySound);
	const [playCoin] = useSound(coinSound);
	const [selectedCoins, setSelectedCoins] = useState([]);
	const [disableToss, setDisableToss] = useState(false);
	const coinsList = ["coin-1", "coin-2", "coin-3", "coin-4"];
	const [counter, setCounter] = useState(0);
	const [happyCoins, setHappyCoins] = useState([]);
	const [isFinished, setIsFinished] = useState(false);
	const [username,setUsername]= useState('');
	const alertMessage = useRef();
	const navigate = useNavigate();

	useEffect(() => {
		if(happyCoins.length == coinsList.length) {
			finished();
		}
	}, [happyCoins])

	const finished = () => {
		setTimeout(_ => {
			setIsFinished(true);
		}, 500);
		
	}

	const playAgain = () => {
		setCounter(0);
		setHappyCoins([]);
		setSelectedCoins([]);
		setDisableToss(false);
		setIsFinished(false);
		setUsername('');
	}

	const handleSelect = (event, item) => {
		event.preventDefault();
		var target = event.currentTarget;
		var updatedList = [...selectedCoins];
		// console.log(selectedCoins.filter(x => x.item == item));
		if(selectedCoins.filter(x => x.item == item).length > 0) {
			updatedList = updatedList.filter(x => x.item != item)
			setSelectedCoins(updatedList);
		} else if(selectedCoins.length < 3 && selectedCoins.filter(x => x.item == item).length == 0) {
				updatedList.push({
					item: item,
					target: target
				})
			setSelectedCoins(updatedList);
		}
  };


	const tossCoins = (event) => {
		if(selectedCoins.length == 3) {
			event.preventDefault();
			setCounter(counter+1);
			var updatedList = [...happyCoins];
			selectedCoins.map((item, index) => {
				if(updatedList.filter(x => x.item == item.item).length > 0) {
					updatedList = updatedList.filter(x => x.item != item.item);
				}
				else {
					updatedList.push(item);
				}
				flip(item, index)
			});
			setDisableToss(true)
			setTimeout(_ => {
				setHappyCoins(updatedList)
				setSelectedCoins([]);
				if(updatedList.length != coinsList.length)
					setDisableToss(false);
			}, 1000 + (200 + selectedCoins.length));
		} else {
			showAlert();
		}
	}

	const showAlert = _ => {
		if(alertMessage) {
			alertMessage.current.classList.add("show");
		}
	}
	const hideAlert = (event = null) => {
		event.preventDefault();
		if(alertMessage) {
			alertMessage.current.classList.remove("show");
		}
	}

	const flip = (item, index) => {
		var target = item.target.childNodes[0];
		const random = Math.floor(Math.random() * 2);
		setTimeout(_ => {
			playCoin();
			target.classList.add(random === 1 ? 'flippy' : 'reverse-flippy');
			if(!target.classList.contains("happy-face")){
				setTimeout(() => target.classList.add("happy-face"), 500);
			} else{
				setTimeout(() => target.classList.remove("happy-face"), 500);
			}
			setTimeout(function(){
				target.classList.remove(random === 1 ? 'flippy' : 'reverse-flippy');
			}, 1000);
		}, 200 * index)
	}

	const handleInput=(event)=>{
		event.preventDefault();
		var string = event.target.value.toUpperCase();
		if(string.length < 5)
			setUsername(string);
	}

	const submitRecord = (event) => {
		event.preventDefault();
		var records = window.localStorage.getItem('records');
		var newRecords = [];
		if(records){
			newRecords = JSON.parse(records);
		}
		newRecords.push({
			username: username,
			score: counter,
			date: new Date().toISOString().slice(0, 10)
		})

		window.localStorage.setItem('records', JSON.stringify(newRecords));

		navigate("/");
	}

	const renderGame = (
		<div id="GamePlay" className="container game-play">
			<Link onMouseEnter={playHover} onClick={playClick} to="/" className="button icon resize"><BackArrow /></Link>
			<div className="game-play-wrapper">
				<h1 className='title'>Turn the frown upside down</h1>
				<div className="coin-list-container">
					{coinsList.map((item, index) => (
						<span  onMouseEnter={playHover} key={item} className={"coin-container coin-" + index + (selectedCoins.filter(x => x.item == item).length > 0 ? " selected-item" : "")} onClick={(event) => {handleSelect(event, item); playClick();}}><span className="coin" /></span>
					))}
				</div>
				<h1 className='counter'>Score: {counter}</h1>
				<button onMouseEnter={playHover} className="button" disabled={disableToss} onClick={event => {tossCoins(event); playClick();}}>Toss</button>
			</div>
			<div className="alert-message" ref={alertMessage}>
				You can only select 3 coins each time
				<button onMouseEnter={playHover} className="button" disabled={disableToss} onClick={event => {hideAlert(event); playClick();}} style={{marginTop: "0.25em"}}>Okay!</button>
			</div>
		</div>
	)

	const renderFinish = (
		<div className="container finished-menu-wrapper">
			<div className="finished-menu">
				<header>
					<h1 className='title'>New Score: {counter}</h1>
					<input onKeyDown={playKey} onMouseEnter={playHover} onClick={playClick} type="text" placeholder='ABC' max={5} value={username} onChange={(event) => handleInput(event)} />
				</header>
				<div className="finished-icons-list">
					<button onMouseEnter={playHover} className="button icon" onClick={_ => {playAgain(); playClick();}}><Replay /></button>
					<Link onMouseEnter={playHover} onClick={playClick} className="button icon" to="/leader-board"><LeaderBoard /></Link>
					<button onMouseEnter={playHover} className="button icon" onClick={event => {submitRecord(event); playClick();}}><NextArrow /></button>
				</div>
			</div>
		</div>
	);

	return isFinished ? renderFinish : renderGame;
}

export default GamePlay;