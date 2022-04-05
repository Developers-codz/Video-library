import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import styles from "../../page/liked/liked.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLike } from "context/like-context";
import { useHistory } from "context/history-context";
import { useWatchLater } from "context/watchlater-context";

export const SingleCard = ({ item, flag }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { removeFromLikeHandler } = useLike();
  const { removeFromHistoryHandler } = useHistory();
  const { removeFromWatchLaterHandler } = useWatchLater();

  const clickHandler = () => {
    setShowMenu(!showMenu);
  };

  const getIcon = () =>
    flag === "liked" ? <ThumbUpTwoToneIcon /> : <i className="fa fa-trash"></i>;

  const getFunctionName = (_id) => {
    if (flag === "liked") return removeFromLikeHandler(_id);
    if (flag === "history") return removeFromHistoryHandler(_id);
    if (flag === "watchlater") return removeFromWatchLaterHandler(_id);
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
          <div>{getIcon()}</div>
        </div>
      </div>
      {showMenu && (
        <div className={styles.toggleMenu}>
          <button onClick={() => getFunctionName(item._id)}>
            Remove from {flag}
          </button>
        </div>
      )}
    </div>
  );
};
