import styles from "./liked.module.css";
import { LikedCard } from "components";
import { useLike } from "context/like-context";
import { LikedIcon } from "Assets/icons";
import { Link } from "react-router-dom";

export const Liked = () => {
  const {
    likedState: { likedList },
  } = useLike();

  return (
    <>
      {likedList.length === 0 ? (
        <>
          <div className={styles.emptyLikeContainer}>
            <LikedIcon width="120" height="120" color="#ff8a8a" />
            <h1>No liked videos yet ??</h1>
            <Link className={styles.exploreBtn} to="/">
              Explore now
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className={styles.cardContainer}>
            {likedList.map((item) => {
              return <LikedCard item={item} />;
            })}
          </div>
        </>
      )}
    </>
  );
};
