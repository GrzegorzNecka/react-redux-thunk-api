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
    const episode = movies.filter(movie => movie.Title);
    console.log(episode);
  });

  return (
    <div className="App">
      <MoviesContainer />
    </div>
  );
};

export default App;
