import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../services/movies-api';
import s from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.fetchTrendingMovies().then((response) => setMovies(response.results));
  }, []);

  console.log(movies);

  return (
    <>
    <h1 className={s.title}>Trending today</h1>
    <ul className={s.gallery}>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} className={s.link}>
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
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
