import React from 'react';
import MoviesContainer from './app/movies/components/MoviesContainer';

const App = () => {
  const fetchMovies = async () => {
    const response = await fetch(
      'https://www.omdbapi.com/?i=tt0944947&Season=1&apikey=a575f8ce'
    );

    if (response.status === 200) {
      const data = await response.json();
      return data.Episodes;
    } else {
      throw new Error('error');
    }
  };

  fetchMovies().then(movies => {
    const mov = [];
    movies.forEach(movie => console.log(movie.Title));
  });

  return (
    <div className="App">
      <MoviesContainer />
    </div>
  );
};

export default App;
