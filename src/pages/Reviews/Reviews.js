import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as reviewsAPI from '../../services/movies-api';
import s from './Reviews.module.css';

export default function MoviesReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    reviewsAPI.fetchMoviesReviews(movieId).then(response => {setReviews(response.results);
  }, [movieId]);

  console.log(reviews);

  return (
    <>
      {reviews.length === 0 ? (
      <p className={s.text}>We don't have any reviews for this movie.</p>) :
        reviews.map(review => (
          <ul key={review.id}>
            <li>Author: {review.author}</li>
            <li>{review.content}</li>
          </ul>
      ))}
    </>
  );
})}
