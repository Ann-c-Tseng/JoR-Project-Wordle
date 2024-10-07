import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

function GuessInput({guessData, setGuessData, guessDataArray, setGuessDataArray, gameWon}) {
  
  function handleFormChange(event) {
    event.preventDefault();
    setGuessData(guessData);
    
    let updatedGuessArray = [];
    guessDataArray.forEach(guess => {
      updatedGuessArray.push(guess);
    });
    updatedGuessArray.push(guessData);

    setGuessDataArray(updatedGuessArray);
    setGuessData('');
  }

  function caseChange(event) {
    setGuessData(event.target.value.toUpperCase());
  }

  function disableStatus() {
    if(gameWon !== undefined && !gameWon && guessDataArray.length >= NUM_OF_GUESSES_ALLOWED) {
      return true;
    } else if(gameWon !== undefined && gameWon && guessDataArray.length <= NUM_OF_GUESSES_ALLOWED) {
      return true;
    }
    return false;
  }

  return <form className="guess-input-wrapper" onSubmit={handleFormChange}>
            <label htmlFor="guess-input">Enter guess (5 letters):</label>
            <input id="guess-input" 
                  type="text" 
                  value={guessData} 
                  pattern="[A-Z]{5,5}" required 
                  onChange={caseChange}
                  disabled={disableStatus()}
            />
          </form>;
}

export default GuessInput;
