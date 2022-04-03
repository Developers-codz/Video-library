import styles from "../../page/liked/liked.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { usePlaylist } from "context/playlist-context";
export const Playlistcard = ({ item, currentPlaylistId, title }) => {
  const [showMenu, setShowMenu] = useState(false);
  const clickHandler = () => {
    setShowMenu(!showMenu);
  };
  const { deleteFromPlaylistHandler } = usePlaylist();
  return (
    <div className={styles.videoCard}>
      <Link to={`/${item._id}`} className="decor-none light-text">
        <img src={item.gif} className={styles.image} />
      </Link>
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
            <i class="fa fa-trash"></i>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className={styles.toggleMenu}>
          <button
            onClick={() =>
              deleteFromPlaylistHandler(currentPlaylistId, item._id, title)
            }
          >
            Remove from playlist
          </button>
        </div>
      )}
    </div>
  );
};
