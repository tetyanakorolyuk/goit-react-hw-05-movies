import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import * as searchAPI from '../../services/movies-api';
import defaultImage from '../../images/defaultImage.jpg';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("query");
  const location = useLocation();

  useEffect(() => {
    let abortController = new AbortController();

    if(searchQuery === ""){
      return;
    }
    const getSearchMovies = () => {
      searchAPI.fetchSearchMovies(searchQuery).then(response => {
        if (response.length === 0) {
          return setMovies(null);
        }
        if (!abortController.signal.aborted) {
          setMovies(response.results);
        }
      });
    };
    if (searchQuery) {
      getSearchMovies();
    }
    return () => {
      abortController.abort();
    };
  }, [searchQuery]);

    const handleChange = e => {
      setQuery(e.currentTarget.value.toLowerCase());
    };

    const handleSubmit = e => {
      e.preventDefault();
      if (query.trim() === '') {
        return;
      }

      let formData = new FormData(e.currentTarget);
      let newQuery = formData.get("query");
      if (!newQuery) return;
      setSearchParams({ query: newQuery });
      setQuery('');
    }

  return (
    <>
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
          className={s.input}
          type="text"
          defaultValue={searchQuery ?? undefined}
          name="query"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          placeholder="Search movies"
          />

          <button type="submit" className={s.button} >
            <span className={s.buttonLabel}>Search</span>
          </button>
        </form>
      </header>

      <ul className={s.gallery}>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} className={s.link} state={{ from: location }}>
            <img src={movie.poster_path
              ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` : defaultImage} alt={movie.title} />
            <h3 className={s.movieName}>{movie.title}</h3>
            <p className={s.subName}>
                {movie.release_date.slice(0, 4) ? movie.release_date.slice(0, 4) : 'Unknown'}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
