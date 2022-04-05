import styles from "../../page/liked/liked.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getIcon } from "functions";
// import { useLike } from "context/like-context";
// import { useHistory } from "context/history-context";
// import { useWatchLater } from "context/watchlater-context";
import { useDeleteFunction } from "functions";
export const SingleCard = ({ item, flag }) => {
  const [showMenu, setShowMenu] = useState(false);
  const getFunctionName = useDeleteFunction();
  const clickHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.videoCard} key={item._id}>
      <NavLink to={`/${item._id}`} className="decor-none light-text">
        <img src={item.gif} className={styles.image} />
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
          <button onClick={() => getFunctionName(flag, item._id)}>
            Remove from {flag}
          </button>
        </div>
      )}
    </div>
  );
};
