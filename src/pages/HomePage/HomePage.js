import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../services/movies-api';
import s from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.fetchTrendyMovies().then((response) => setMovies(response.results));
  }, []);

  console.log(movies);

  return (
    <>
    <h1 className={s.title}>Trending today</h1>
    <ul>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} className={s.link}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
