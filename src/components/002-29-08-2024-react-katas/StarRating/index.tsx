import styles from "./StarRating.module.css";

interface StarRatingProps {
  rating: number;
}

export const StarRating = ({ rating = 3.5 }: StarRatingProps) => {
  const filledWidth: number =
    ((rating < 0 ? 0 : rating > 5 ? 5 : rating) * 100) / 5;

  return (
    <div className={styles.star_rating}>
      <div
        className={styles.star_rating__filled_stars}
        style={{ width: `${filledWidth}%` }}
      >
        ★★★★★
      </div>
      ✰✰✰✰✰
    </div>
  );
};
