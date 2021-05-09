import React from 'react';
import {connect } from 'react-redux'
import actions from '../duck/actions'

const MoviesForm = (props) => {
  const movieInput = React.createRef();

  const addMovie = event => {
    event.preventDefault();
    props.add(movieInput.current.value)
    // console.log('form', movieInput.current.value);
  };

  return (
    <form onSubmit={addMovie}>
      <input ref={movieInput} />
      <button type="submit"> add movie</button>
    </form>
  );
};

//  mapDispatchToProp - przygotowuje obiekt, który będzie zawierał funkcje, które chcemy wywołać na store

// add - umożlwia dodawanie filmów - funkcja, która przyjmuje parametr movie

const mapDispatchToProps = dispatch => ({
  add: movie => dispatch(actions.add(movie))
});

//connect użyty po to aby odpalać akcje, które wcześniej uworzylismy
export default connect(null,mapDispatchToProps)(MoviesForm);
