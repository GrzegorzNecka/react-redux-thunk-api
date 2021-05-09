import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from '../duck/operations';

const MoviesContainer = ({ movies, getAllMovies }) => {
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
    const abc = movies.map(movie => movie.Title);
    console.log(movies);
    console.log(abc);
  });

  const getAllMovies2 = () => {
    async () => {
      const movies = await fetchMovies();

      console.log('ss', movies);
    };
  };

  //---------------------

  console.log(getAllMovies);
  useEffect(() => {
    // console.log(getAllMovies());
    // getAllMovies();
    getAllMovies2();
  }, []);

  return (
    <ul>
      {movies.list.map(movie => (
        <li> {movie} </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

//thunk
const mapDispatchToProps = dispatch => ({
  getAllMovies: () => dispatch(getAllMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
