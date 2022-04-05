import styles from "../liked/liked.module.css";
import { WatchlaterIcon } from "Assets/icons";
import { Link } from "react-router-dom";
export const WatchLater = () => {
  return (
    <>
      {" "}
      <div className={styles.emptyLikeContainer}>
        <WatchlaterIcon width="120" height="120" color="#ff8a8a" />
        <h1>Nothing In Watch Later, Why Why Why ??</h1>
        <Link className={styles.exploreBtn} to="/">
          Explore now
        </Link>
      </div>
    </>
  );
};
