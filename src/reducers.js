import { combineReducers } from 'redux';
import actorsReducer from './app/actors/duck';
import movieReducer from './app/movies/duck';

const rootReucer = combineReducers({
  actors: actorsReducer,
  movies: movieReducer
});

export default rootReucer;
