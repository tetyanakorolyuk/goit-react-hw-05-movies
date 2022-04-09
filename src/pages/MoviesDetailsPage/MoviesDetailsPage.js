import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link} from 'react-router-dom';
import { Outlet } from 'react-router';
import * as movieAPI from '../../services/movies-api';
import s from './MoviesDetailsPage.module.css';

export default function MoviesDetails() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    movieAPI.fetchMoviesDetails(movieId).then(response => {
      setMovies(response.data.results);
  }, [movieId]);

  console.log(movies);

  return (
    <>
    <button onClick={() => navigate(-1)}>Go back</button>
      {movies && (
        <>
         <div>
            {' '}
            <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movies.poster_path}`} alt={movies.title} />
          </div>
          <div>
          <h2>{movies.title}({movies.release_date})</h2>
          <p className={s.text}>User Score: {movies.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movies.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movies.genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
          </div>

          <div>
          <h3>Additional Information:</h3>
          <ul>
            <li>
             <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
            </li>
          </ul>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
});
}
