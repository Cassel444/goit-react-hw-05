import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieReviews() {
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);
  return <div></div>;
}
