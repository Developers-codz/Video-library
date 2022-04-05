import styles from "../liked/liked.module.css";
import { WatchlaterIcon } from "Assets/icons";
import { Link } from "react-router-dom";
import { useWatchLater } from "context/watchlater-context";
import { SingleCard } from "components";
import { useDocumentTitle } from "functions";

export const WatchLater = () => {
    useDocumentTitle("Watch Later")
  const {
    watchlaterState: { watchlaterList },
  } = useWatchLater();
  console.log("abc" + watchlaterList[1]);
  return (
    <>
      {watchlaterList.length === 0 ? (
        <div className={styles.emptyLikeContainer}>
          <WatchlaterIcon width="120" height="120" color="#ff8a8a" />
          <h1>Nothing In Watch Later, Why Why Why ??</h1>
          <Link className={styles.exploreBtn} to="/">
            Explore now
          </Link>
        </div>
      ) : (
        <>
          {" "}
          <div className={styles.cardContainer}>
            {watchlaterList.map((item) => {
              return <SingleCard item={item} flag={"watchlater"} />;
            })}
          </div>
        </>
      )}
    </>
  );
};
