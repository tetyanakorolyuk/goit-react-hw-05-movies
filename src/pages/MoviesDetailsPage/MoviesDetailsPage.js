import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Link} from 'react-router-dom';
import { Outlet } from 'react-router';
import * as movieAPI from '../../services/movies-api';
import defaultImage from '../../images/defaultImage.jpg';
import s from './MoviesDetailsPage.module.css';

export default function MoviesDetails() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [from] = useState(
    location.state?.from?.pathname + location.state?.from?.search || '/'
  );

  useEffect(() => {
    const getMovieDetail = () => {
      return movieAPI.fetchMoviesDetails(movieId).then(response => {
        setMovies(response);
    });
  };
    getMovieDetail();
  }, [movieId]);

  console.log(movies);

  return (
    <>
    <button onClick={() => navigate(from)} className={s.navButton}>Go back</button>
      {movies && (
        <>
        <div className={s.moviesDetails}>
         <div>
          <img src={movies.poster_path ? `https://image.tmdb.org/t/p/w300/${movies.poster_path}` : defaultImage} alt={movies.title} />
          </div>
          <div className={s.descr}>
          <h2>{movies.title}({movies.release_date.slice(0, 4)})</h2>
          <p>User Score: {movies.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movies.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movies.genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
          </div>
          </div>

          <div className={s.adInfo}>
          <h3>Additional Information:</h3>
          <ul>
            <li className={s.link}>
             <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            </li>
            <li className={s.link}>
              <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
            </li>
          </ul>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
}
