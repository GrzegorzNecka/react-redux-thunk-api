import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from '../duck/operations';


const MoviesContainer = ({ movies, getMoviesFromApi }) => {
  //---------------------

  useEffect(() => {
    console.log('getAllMovies()', getMoviesFromApi());
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
  getMoviesFromApi: () => dispatch(getAllMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
