import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import styles from "../../page/liked/liked.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLike } from "context/like-context";

export const LikedCard = ({ item }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { removeFromLikeHandler } = useLike();
  const clickHandler = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className={styles.videoCard}>
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
          <div>
            <ThumbUpTwoToneIcon />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className={styles.toggleMenu}>
          <button onClick={() => removeFromLikeHandler(item._id)}>
            Remove from liked
          </button>
        </div>
      )}
    </div>
  );
};
