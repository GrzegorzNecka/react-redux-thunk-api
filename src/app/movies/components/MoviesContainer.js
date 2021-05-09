import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from '../duck/operations';

const MoviesContainer = ({ movies }) => {
  useEffect(() => {
    console.log('dd');
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

mapDispatchToProps = dispatch => ({
  //thunk
  getAllMovies: () => dispatch(getAllMovies())
});

export default connect(
  mapStateToProps,
  {}
)(MoviesContainer);
