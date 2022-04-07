import styles from "./home.module.css";
import { useVideo } from "context/video-context";
import { useHistory } from "context/history-context";
import { Category } from "components";
import { getCategorisedVideos } from "functions";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useDocumentTitle } from "functions";

export const Home = () => {
  useDocumentTitle("Home");
  const param = useParams();
  let id = param.videoId;
  const {
    videoState: { categoryBy },
    videos,
  } = useVideo();
  const { addToHistoryHandler } = useHistory();

  const categoryFilteredVideos = getCategorisedVideos(videos, categoryBy);

  return id === undefined ? (
    <div>
      <Category />
      <div className={styles.cardContainer}>
        {categoryFilteredVideos.map((video) => {
          return (
            <NavLink
              to={`/video/${video._id}`}
              key={video._id}
              className={styles.videoCardLink}
              onClick={() => addToHistoryHandler(video)}
            >
              <div className={styles.videoCard}>
                <img src={video.gif} className={styles.image} />
                <div className={styles.videoDetail}>
                  <img
                    className={styles.videoThumbnail}
                    src={video.thumbnail}
                  />
                  <span className={styles.videoTitle}>
                    {video.title}
                    <small className={styles.views}>
                      {video.views} Views {video.created} ago
                    </small>
                  </span>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  ) : (
    <Outlet />
  );
};
