import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as searchAPI from '../../services/movies-api';
import { toast } from 'react-toastify';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  // const searchQuery = searchParams.get('query');

  useEffect(() => {
    if(query === ""){
      return;
    }
    searchAPI.fetchSearchMovies(query).then(response => {
      if(response.length !== []) {
      console.log(movies);
      setMovies(response.results);
      }
      toast.error('Enter the correct movie name.');
      return;
      });
    }, [query]);

    const handleChange = e => {
      setQuery(e.currentTarget.value.toLowerCase());
    };

    const handleSubmit = e => {
      e.preventDefault();
      if (query.trim() === '') {
        toast.error('Enter movie name.');
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

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} className={s.link}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
