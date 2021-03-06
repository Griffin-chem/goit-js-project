import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const API_KEY = '439ac864a5c69601bb623922fef06c13';

/*
 * Make a request the weekly trending movies
 */
const fetchPopularMovies = pageNumber => {
  return getAxios(
    `${baseUrl}/movie/popular?api_key=${API_KEY}&page=${pageNumber}`,
  );
};

/*
 * Make a request for movies by searchQuery
 */
const fetchMoviesWithQuery = (pageNumber, searchQuery) => {
  return getAxios(
    `${baseUrl}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${pageNumber}&include_adult=false`,
  );
};

/*
 * Make a request the primary information about a movie
 */
const fetchMovieDetails = movieId => {
  return getAxios(`${baseUrl}/movie/${movieId}?api_key=${API_KEY}`);
};

/*
 * Get the videos that have been added to a movie.
 */
const fetchGetVideos = movieId => {
  return getAxios(`${baseUrl}/movie/${movieId}/videos?api_key=${API_KEY}`);
};

/*
 * Axios get Api-request by URL
 */
const getAxios = url =>
  axios
    .get(url)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });

export default {
  fetchPopularMovies,
  fetchMoviesWithQuery,
  fetchMovieDetails,
  fetchGetVideos,
};
