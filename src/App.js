import React from 'react';
import MoviesContainer from './app/movies/components/MoviesContainer';
import MoviesForm from './app/movies/components/MoviesForm';

const App = () => {


  return (
    <div className="App">
      <MoviesContainer />
      <MoviesForm />
    </div>
  );
};

export default App;
