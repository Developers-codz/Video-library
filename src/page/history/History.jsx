import styles from "./history.module.css";
import { HistoryIcon } from "Assets/icons";
import { Link } from "react-router-dom";
import { useHistory } from "context/history-context";
import { SingleCard } from "components";
export const History = () => {
  const {
    historyState: { historyList },
    clearHistoryHandler,
  } = useHistory();
  return (
    <>
      {" "}
      {historyList.length === 0 ? (
        <div className={styles.emptyHistoryContainer}>
          <HistoryIcon width="120" height="120" color="#ff8a8a" />
          <h1>Haven't watched a video yet ??</h1>
          <Link className={styles.exploreBtn} to="/">
            Explore now
          </Link>
        </div>
      ) : (
        <div className={styles.historyContainer}>
          <button
            className={styles.clearAllBtn}
            onClick={() => clearHistoryHandler()}
          >
            Clear History <i className="fa fa-trash"></i>
          </button>
          <div class={styles.historyCardWrapper}></div>
          {historyList.map((history) => (
            <SingleCard item={history} flag={"history"} />
          ))}
        </div>
      )}
    </>
  );
};
