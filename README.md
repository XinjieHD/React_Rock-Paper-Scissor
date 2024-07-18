# Rock, Paper, Scissors Game

This project is a simple implementation of the classic Rock, Paper, Scissors game using React.
It is based on an exercise from GeeksforGeeks.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Game Logic](#game-logic)


## Features

- Interactive UI with buttons to choose Rock, Paper, or Scissors.
- Tracks the player's choice, computer's choice, scores, and tie count.
- Randomly generates computer's choice and determines the game outcome.


## Usage
After starting the development server, you can play the game in your browser by navigating to http://localhost:3000.

Click the buttons to choose Rock, Paper, or Scissors.
The game will display your choice, the computer's choice, and update the scores accordingly.

## Game Logic
The game logic is implemented within the Game class component:

- State Management: Tracks the player's choice, computer's choice, scores, and tie count.
- Decision Function: Handles the player's choice, generates the computer's choice, and updates the state.
- Logic Function: Determines the outcome (win, lose, tie) based on the player's and computer's choices.

Key Methods:

- Logic(player, computer): Determines the game outcome based on the choices.
- Decision(playerChoice): Updates the state based on the player's choice and randomly generates the computer's choice.
