import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as searchAPI from '../../services/movies-api';
import defaultImage from '../../images/defaultImage.jpg';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if(query === ""){
      return;
    }
    const getSearchMovies = () => {
      searchAPI.fetchSearchMovies(query).then(response => {
        if (response.length === 0) {
          return setMovies(null);
        }
        setMovies(response.results);
      });
    };
    getSearchMovies();
  }, [query]);

    const handleChange = e => {
      setQuery(e.currentTarget.value.toLowerCase());
    };

    const handleSubmit = e => {
      e.preventDefault();
      if (query.trim() === '') {
        return;
      }
      setQuery('');
    }

  return (
    <>
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
          className={s.input}
          type="text"
          value={query}
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
            <Link to={`/movies/${movie.id}`} className={s.link}>
            <img src={movie.poster_path
              ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` : defaultImage} alt={movie.title} />
            <h3 className={s.movieName}>{movie.title}</h3>
            <p className={s.subName}>
                {movie.release_date ? movie.release_date : 'Unknown'}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
