import React from 'react';
import {checkGuess} from '../../../src/game-helpers.js'

function Guess({idx, guessArray, answer}) {
  const guessCharArray = guessArray[idx] === undefined ? 
  [{letter: '', status: ''},{letter: '', status: ''},{letter: '', status: ''},{letter: '', status: ''},{letter: '', status: ''}] : 
  checkGuess(guessArray[idx], answer);

  return <p className='guess'>
    {guessCharArray.map((charAndStatus, index) => (
        charAndStatus.letter === "" ? 
        <span className='cell' key={index}></span> : 
        <span className={'cell ' + `${charAndStatus.status}`} key={index}>{charAndStatus.letter}</span>
    ))}
  </p>
}

export default Guess;
