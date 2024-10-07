import React from 'react';
import {useState} from 'react';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import PreviousGuesses from '../PreviousGuesses';
import Guess from '../Guess'
import EndGameBanner from '../EndGameBanner';
import {checkIfWon} from '../../game-helpers.js'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessData, setGuessData] = useState('');
  const [guessDataArray, setGuessDataArray] = useState([]);
  const gameWon = checkIfWon(guessDataArray, answer);
  const numberOfGuesses = guessDataArray.length;

  return <>
  {Array.from({length: NUM_OF_GUESSES_ALLOWED}, (_, index) => (
    <Guess key={index} idx={index} guessArray={guessDataArray} answer={answer}></Guess>
  ))}
  <EndGameBanner gameWon={gameWon} numberOfGuesses={numberOfGuesses} answer={answer}></EndGameBanner>
  <GuessInput guessData={guessData} setGuessData={setGuessData} guessDataArray={guessDataArray} setGuessDataArray={setGuessDataArray} gameWon={gameWon}></GuessInput>
  </>;
}

export default Game;
