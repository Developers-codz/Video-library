import styles from "../../page/liked/liked.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getIcon } from "functions";
import { useDeleteFunction } from "functions";
import { useLike } from "context/like-context";
import { useWatchLater } from "context/watchlater-context";
import { usePlaylist } from "context/playlist-context";

export const SingleCard = ({ item, flag }) => {
  const [showMenu, setShowMenu] = useState(false);
  const getFunctionName = useDeleteFunction();
  const clickHandler = () => {
    setShowMenu(showMenu => !showMenu);
  };
  const { isDisabled } = useLike();
  const { isWatchBtnDisabled } = useWatchLater();
  const {isPlaylistBtnDisabled} = usePlaylist();

  return (
    <div className={styles.videoCard} key={item._id}>
      <NavLink to={`/video/${item._id}`} className="decor-none light-text">
        <img src={item.gif} className={styles.image} alt={item.title} />
      </NavLink>
      <div className={styles.videoDetailWrapper}>
        <div className={styles.videoDetail}>
          <img className={styles.videoThumbnail} src={item.thumbnail} />
          <span className={styles.videoTitle}>
            {item.title}
            <small className={styles.views}>
              {item.views} Views {item.created} ago
            </small>
          </span>
        </div>
        <div className={styles.iconWrapper} onClick={clickHandler}>
          <div>{getIcon(flag)}</div>
        </div>
      </div>
      {showMenu && (
        <div className={styles.toggleMenu}>
          <button
            onClick={() => getFunctionName(flag, item._id)}
            disabled={isDisabled || isWatchBtnDisabled || isPlaylistBtnDisabled}
          >
            Remove from {flag}
          </button>
        </div>
      )}
    </div>
  );
};
