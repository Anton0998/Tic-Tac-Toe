# Tic Tac Toe Web App

## Introduction

This is a simple Tic Tac Toe web application built with React. 

Features include:
- Players can enter their names before starting the game.
- Player 1 plays as 'X' and Player 2 plays as 'O'.
- A turn tracker indicates whose turn it is.
- After each round, the winner is announced, and the game can be reset.
- Once there's a winner, the game stops, and players' victory counts are updated.

## Tools

This application was built using the following tools:

- **React**: A JavaScript library for building user interfaces.
- **CSS (Tailwind CSS)**: For styling the app and ensuring a responsive, modern UI.

## Recent Updates

The app has undergone several improvements to enhance gameplay and user experience:

1. **Dynamic Player Names**: 
   Players now have the ability to enter their own names at the start of the game. By default, Player 1 is "X" and Player 2 is "O", but these can be customized before starting the game. This was achieved by using a modal that asks for player names upon the first load.

2. **Turn Tracker**: 
   A turn tracker has been implemented to display which player’s turn it is. The player names are shown above the grid, and the current turn is dynamically updated throughout the game.

3. **Victory Count**: 
   The app now keeps track of how many victories each player has accumulated. Whenever a player wins a round, their victory count is incremented, allowing for a running tally of the number of wins per player.

4. **Alternating Starting Player**: 
   To make the game more fair, the starting player alternates every time a new game begins. Player "X" starts the first game, and "O" starts the next, and so on. This was implemented by tracking who started the previous game and assigning the other player as the starter for the next game.

5. **Game**: 
   After each game, whether there's a winner or a draw, the grid resets and the game can be started again, with the current winner’s tally being updated accordingly. The state management ensures that all values (grid, winner, current turn) are properly reset for each new game.
