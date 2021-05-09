import React from 'react';
import MoviesContainer from './app/movies/components/MoviesContainer';
import faker from 'faker';

const App = () => {
  // let words = faker.random.words(6);
  let words = faker.music.genre(6);

  console.log(words);

  return (
    <div className="App">
      <MoviesContainer />
    </div>
  );
};

export default App;
