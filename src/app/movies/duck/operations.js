const fetchMovies = async () => {
  const response = await fetch(
    'https://www.omdbapi.com/?i=tt0944947&Season=1&apikey=a575f8ce',
    { method: 'GET' }
  );

  const json = await response.json();

  return json;
};

console.log(fetchMovies());
