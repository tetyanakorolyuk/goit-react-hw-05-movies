import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as reviewsAPI from '../../services/movies-api';
import s from './Reviews.module.css';

export default function MoviesReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = () => {
      return reviewsAPI.fetchMoviesReviews(movieId).then(response => {
        setReviews(response.results);
        });
      };
    getReviews();
  }, [movieId]);
  console.log(reviews);

  return (
    <>
      {reviews.length > 0 ?
        reviews.map(review => (
          <ul key={review.id}>
            <li className={s.author}>Author: {review.author}</li>
            <li>{review.content}</li>
          </ul>
      )) :
      (<p className={s.text}>We don't have any reviews for this movie.</p>)
      }
    </>
  );
}
