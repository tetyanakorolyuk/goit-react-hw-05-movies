import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as castAPI from '../../services/movies-api';
import defaultPhoto from '../../images/defaultPhoto.jpg';
import s from './Cast.module.css';

export default function MoviesCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = () => {
      return castAPI.fetchMoviesCredits(movieId).then(response => {
        setCast(response.cast);
        });
      };
    getCast();
  }, [movieId]);

  const mainCast = [...cast].slice(0, 12);
  console.log(cast);

  return (
    <>
      <ul className={s.cast}>
        {cast &&
        mainCast.map(actor => (
          <li key={actor.id}>
          <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w300${actor.profile_path}` : defaultPhoto} alt={actor.name} />
          <p className={s.actor}>{actor.original_name}</p>
          <p>Character: {actor.character}</p>
          </li>
          ))}
        </ul>
    </>
);
}
