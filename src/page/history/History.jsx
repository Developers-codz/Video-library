import styles from "./history.module.css";
import { HistoryIcon } from "Assets/icons";
import { Link } from "react-router-dom";
import { useHistory } from "context/history-context";
import { SingleCard } from "components";
import { useDocumentTitle } from "functions";
import { useEffect } from "react";

export const History = () => {
  useDocumentTitle("History");
  const {
    historyState: { historyList },
    clearHistoryHandler,getHistoryVideos
  } = useHistory();
  useEffect(()=>{
    getHistoryVideos()
  },[])
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
          <div className={styles.historyCardWrapper}></div>
          {historyList.map((history) => (
            <SingleCard item={history} flag={"history"} key={history._id} />
          ))}
        </div>
      )}
    </>
  );
};
