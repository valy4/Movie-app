import axios from 'axios';
// All of your API requests should be in this file
const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
const popularMoviesUrl = "https://api.themoviedb.org/3/movie/popular";
const genreUrl = "https://api.themoviedb.org/3/genre/movie/list";




async function getPopularMovies() {
  return await axios.get(popularMoviesUrl, { params: { api_key: apiKey } });
}

async function getGenre() {
  return await axios.get(genreUrl, { params: { api_key: apiKey } });
}

async function getSearchMovies(keyword) {
  return await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`);
}

export {
  getGenre,
  getPopularMovies,
  getSearchMovies
}