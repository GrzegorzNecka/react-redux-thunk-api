import React from 'react';
import MoviesContainer from './app/movies/components/MoviesContainer';
import MoviesForm from './app/movies/components/MoviesForm';

const App = () => {
  // const fetchMovies = async () => {
  //   const response = await fetch(
  //     'https://www.omdbapi.com/?i=tt0944947&Season=1&apikey=a575f8ce'
  //   );

  //   if (response.status === 200) {
  //     const data = await response.json();
  //     return data.Episodes;
  //   } else {
  //     throw new Error('error');
  //   }
  // };

  // fetchMovies().then(movies => {
  //   const abc = movies.map(movie => movie.Title);
  //   console.log(movies);
  //   console.log(abc);
  // });

  return (
    <div className="App">
      <MoviesContainer />
      <MoviesForm />
    </div>
  );
};

export default App;
