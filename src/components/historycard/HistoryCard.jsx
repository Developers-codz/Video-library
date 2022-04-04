import styles from "../../page/history/history.module.css";
import style from "../../page/liked/liked.module.css";
import { useHistory } from "context/history-context";
export const HistoryCard = ({ video }) => {
  const { removeFromHistoryHandler } = useHistory();
  return (
    <div className={styles.card}>
      <img src={video.gif} alt={video.title} />
      <div className={style.videoDetailWrapper}>
        <div className={style.videoDetail}>
          <img className={style.videoThumbnail} src={video.thumbnail} />
          <span className={style.videoTitle}>
            {video.title}
            <small className={style.views}>
              {video.views} Views {video.created} ago
            </small>
          </span>
        </div>
        <div className={style.iconWrapper}>
          <div>
            <i
              class="fa fa-trash reset"
              onClick={() => removeFromHistoryHandler(video._id)}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
