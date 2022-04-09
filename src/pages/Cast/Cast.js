import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as castAPI from '../../services/movies-api';
// import s from './Cast.module.css';

export default function MoviesCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    castAPI.fetchMoviesCredits(movieId).then(response => {
      setCast(response.results);
  }, [movieId]);

  return (
    <>
      {cast &&
        cast.map(({ id, poster_path, name, original_name, character }) => (
          <ul key={id}>
            <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt={name} />
            <li>{original_name}</li>
            <li>Character: {character}</li>
          </ul>
          ))}
    </>
);
})}
