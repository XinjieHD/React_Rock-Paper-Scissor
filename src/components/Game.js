import React, {Component} from "react";
import './Game.css';

class Game extends Component{
	constructor(props) {
		super(props)
		this.state = {
			player: null,
			computer: null,
			playerScore: 0,
			compScore: 0,
			tieCount: 0,
		};
	}

	logic = (player, computer) => {
		if (player === computer) {
			return 0;
		} else if (
			(player === "ROCK" && computer === "SCISSORS") ||
			(player === "SCISSORS" && computer === "PAPER") ||
			(player === "PAPER" && computer === "ROCK")
		) {
			return 1;
		} else {
			return -1;
		}
	}

	decision = (playerChoice) => {
		const choices = ["ROCK", "PAPER", "SCISSORS"];
		const compChoice = choices[Math.floor(Math.random() * choices.length)];
		const val = this.logic(playerChoice, compChoice);
		if (val === 1) {
			this.setState({
				player: playerChoice,
				computer: compChoice,
				playerScore: this.state.playerScore + 1
			});
		} else if (val === -1) {
			this.setState({
				player: playerChoice,
				computer: compChoice,
				compScore: this.state.compScore + 1
			});
		} else {
			this.setState({
				player: playerChoice,
				computer: compChoice,
				tieCount: this.state.tieCount + 1
			});
		}
	}

	render() {
		const { player, computer, playerScore, compScore, tieCount } = this.state;
		return (
			<div className="container">
				<h1>Rock, Paper, Scissors Game</h1>
				<div>
					<button onClick={() => this.decision("ROCK")}>
						<i className={`fas fa-hand-rock`} /> Rock
					</button>
					<button onClick={() => this.decision("PAPER")}>
						<i className={`fas fa-hand-paper`} /> Paper
					</button>
					<button onClick={() => this.decision("SCISSORS")}>
						<i className={`fas fa-hand-scissors`} /> Scissors
					</button>
				</div>
				<div className="content">
					<p>Your Choice: {player}</p>
					<p>Computer's Choice: {computer}</p>
					<h2>Your Score: {playerScore}</h2>
					<h2>Computer Score: {compScore}</h2>
					<h2>Ties Times: {tieCount}</h2>
				</div>
			</div>
		)
	}
}

export default Game;
