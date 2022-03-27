import styles from "./home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Category } from "../../components";

export const Home = () => {
  const [videos, setVideos] = useState([]);
  useEffect(async () => {
    try {
      const response = await axios.get("/api/videos");
      console.log(response);
      setVideos(response.data.videos);
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(videos);
  return (
    <div>
      <Category />
      <div className={styles.cardContainer}>
        {videos.map((video) => {
          return (
            <div className={styles.videoCard} key={video._id}>
              <img src={video.gif} className={styles.image} />
              <div className={styles.videoDetail}>
                <img className={styles.videoThumbnail} src={video.thumbnail} />
                <span className={styles.videoTitle}>
                  {video.title}
                  <small className={styles.views}>
                    {video.views} Views {video.created} ago
                  </small>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
