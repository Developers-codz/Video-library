import styles from "./history.module.css";
import { HistoryIcon } from "Assets/icons";
import { Link } from "react-router-dom";
export const History = () => {
  return (
    <>
      {" "}
      <div className={styles.emptyHistoryContainer}>
        <HistoryIcon width="120" height="120" color="#ff8a8a" />
        <h1>Haven't watched a video yet ??</h1>
        <Link className={styles.exploreBtn} to="/">
          Explore now
        </Link>
      </div>
    </>
  );
};
