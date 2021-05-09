import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const MoviesContainer = ({ movies }) => {
  // useEffect(() => {
  //   consol.log('componentDidMount');
  // }, []);

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

export default connect(
  mapStateToProps,
  {}
)(MoviesContainer);
