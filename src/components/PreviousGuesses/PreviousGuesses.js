import React from 'react';

function PreviousGuesses({guessDataArray}) {
  return <div className="guess-results">
    {guessDataArray.map((guess, index) => (
      <p key={index}>{guess}</p>
    ))}
  </div>;
}

export default PreviousGuesses;
