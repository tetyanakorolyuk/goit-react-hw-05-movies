import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '482f454f93dfd7b9b5303b154f274252';

export async function fetchTrendingMovies() {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
}

export async function fetchSearchMovies(query) {
  const response = await axios.get(`search/movie?api_key=${API_KEY}&query=${query}`);
  return response.data;
}

export async function fetchMoviesDetails(id) {
  const response = await axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
  return response.data;
}

export async function fetchMoviesCredits(id) {
  const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  return response.data;
}

export async function fetchMoviesReviews(id) {
  const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US`);
  return response.data;
}
