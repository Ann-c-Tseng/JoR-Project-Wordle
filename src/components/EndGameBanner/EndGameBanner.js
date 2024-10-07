import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'


function EndGameBanner({gameWon, numberOfGuesses, answer}) {
  if(gameWon && numberOfGuesses <= NUM_OF_GUESSES_ALLOWED) {
    return(
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in <strong>{numberOfGuesses > 1 ? numberOfGuesses + " guesses" : numberOfGuesses + " guess"}</strong>
        </p>
      </div> 
    );
  } else if(!gameWon && numberOfGuesses >= NUM_OF_GUESSES_ALLOWED) {
    return(
      <div className='sad banner'>
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    );
  }
}

export default EndGameBanner;
