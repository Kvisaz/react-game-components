import styles from "./ProfileCard.module.css";

interface ProfileCardProps {
  name: string;
  job: string;
  avatar: string;
}

export const ProfileCard = ({
  name = "Name Placeholder",
  job = "Job Placeholder",
  avatar,
}: ProfileCardProps) => {
  return (
    <div className={styles.profile_card}>
      <img
        className={styles.profile_card__avatar}
        src={avatar}
        alt={`${name}'s avatar`}
      ></img>
      <div className={styles.profile_card__info}>
        <h3 className={styles.profile_card__info__name}>{name}</h3>
        <p className={styles.profile_card__info__job}>{job}</p>
        <button
          className={styles.profile_card__info__more_details_btn}
          onClick={() => {
            alert(`Подробнее о ${name}`);
          }}
        >
          Подробнее
        </button>
      </div>
    </div>
  );
};
