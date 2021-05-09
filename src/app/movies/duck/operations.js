import actions from './actions';

const fetchMovies = async () => {
  const response = await fetch(
    'https://www.omdbapi.com/?i=tt0944947&Season=1&apikey=a575f8ce'
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.Episodes;
  } else {
    throw new Error('operarions.js');
  }
};

export const getAllMovies = () => {
  async dispatch => {
    const movies = await fetchMovies();
    movies.map(movie => dispatch(actions.add(movie.Title)));
  };
};
