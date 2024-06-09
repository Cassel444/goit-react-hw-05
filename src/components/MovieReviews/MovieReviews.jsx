import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../movies-api";
import Loader from "../Loader/Loader";
import NotFoundPage from "../../pages/NotFoundPage";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const getReviews = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <NotFoundPage />}
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <div className={css.mainDiv}>
          <h2>Reviews</h2>
          <ul className={css.list}>
            {reviews.map((review) => (
              <li key={review.id} className={css.item}>
                <div>
                  <p className={css.name}>{review.author}</p>
                  <p className={css.description}>{review.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
