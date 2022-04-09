// https://api.themoviedb.org/3/movie/550?api_key=482f454f93dfd7b9b5303b154f274252

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '482f454f93dfd7b9b5303b154f274252';

async function fetchWithErrorHandling(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendyMovies() {
  return fetchWithErrorHandling(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
}

export function fetchSearchMovies(query) {
  return fetchWithErrorHandling(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);
}

export function fetchMoviesDetails(id) {
  return fetchWithErrorHandling(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`);
}

export function fetchMoviesCredits(id) {
  return fetchWithErrorHandling(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
}

export function fetchMoviesReviews(id) {
  return fetchWithErrorHandling(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`);
}
