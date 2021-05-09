import actions from './actions'

const fetchMovies = async () => {
  const response = await fetch(
    'https://www.omdbapi.com/?i=tt0944947&Season=1&apikey=a575f8ce',
    { method: 'GET' }
  );

  console.log('response', response);

  const json = await response.json();

  return json;
};

// getAllMovies - thunk, ktory zwraca od razu funkcje asynchroniczną i redux z pomocą thunka przekaże dispatch do środka funkcji, dzięki czemu będzie można zmienić state.

const getAllMovies = () => {

 return async dispatch => {
    const movies = await fetchMovies();
    const episodes =  movies.Episodes
    console.log('episodes', episodes);
    // iteruje po tablicy i wysyłam akcję add z nazwami .. dostęp do dispatcha mam dzięki thunk
   episodes.map(movie => dispatch(actions.add(movie.Title)))
  };
};

export { getAllMovies };
