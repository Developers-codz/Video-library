import styles from "./liked.module.css";
import { LikedCard } from "components";
import { useLike } from "context/like-context";
import { LikedIcon } from "Assets/icons";
import { Link } from "react-router-dom";
import { Toast } from "components";

export const Liked = () => {
  const {
    likedState: { likedList },
  } = useLike();

  return (
    <>
      {likedList.length === 0 ? (
        <>
          <Toast />
          <div className={styles.emptyLikeContainer}>
            <LikedIcon width="100" height="100" color="#ff8a8a" />
            <h1>No liked videos yet</h1>
            <Link className={styles.exploreBtn} to="/">
              Explore now
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className={styles.cardContainer}>
            <Toast />
            {likedList.map((item) => {
              return <LikedCard item={item} />;
            })}
          </div>
        </>
      )}
    </>
  );
};
