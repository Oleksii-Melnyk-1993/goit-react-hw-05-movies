import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/MovieAPI';
import { useState, useEffect } from 'react';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (!movieId) return;
      try {
        const data = await fetchReviews(movieId);
        setReviews([...data.results]);
      } catch (error) {
        console.log('Error', error.message);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      {!reviews.length && <p>No reviews for that movie...yet😋</p>}
      <ul className={css.reviewsList}>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
