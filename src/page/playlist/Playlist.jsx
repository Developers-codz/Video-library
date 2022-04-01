import { Toast } from "components";
import { PlaylistIcon } from "Assets/icons";
import styles from "./playlist.module.css";
import { Link } from "react-router-dom";
export const Playlist = () => {
  return (
    <>
      <Toast />
      <div className={styles.emptyLikeContainer}>
        <PlaylistIcon width="100" height="100" color="#ff8a8a" />
        <h1>Your Playlist is Empty ☹️</h1>
        <Link className={styles.exploreBtn} to="/">
          Explore now
        </Link>
      </div>
    </>
  );
};
