import { useParams } from "react-router-dom";
import { useVideo } from "context/video-context";
import styles from "./video.module.css";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import BookmarkAddTwoToneIcon from "@mui/icons-material/BookmarkAddTwoTone";
import FeaturedPlayListTwoToneIcon from "@mui/icons-material/FeaturedPlayListTwoTone";
import { useLike } from "context/like-context";
import { usePlaylist } from "context/playlist-context";
import { useToast } from "context/toast-context";

import { Toast } from "components";
export const Video = () => {
  const { videos } = useVideo();
  const { addToLikeHandler } = useLike();
  const { addToPlaylistHandler } = usePlaylist();
  let params = useParams();
  const getVideo = (id) => videos.find(({ _id }) => _id === id);
  let video = getVideo(params.videoId, 10);

  const { setModalOpen } = useToast();

  const { title, views, creator, videoLink, created } = video;

  return (
    <div className={styles.videoContainer}>
      <Toast />
      <div className={styles.iframeWrapper}>
        <iframe
          className={styles.iframe}
          src={`https://www.youtube.com/embed/${videoLink}`}
        ></iframe>
      </div>
      <div className={styles.videoPageName}>
        <h1>{title}</h1>
        <h2>By {creator}</h2>
        <small>
          {views} Views | {created} ago
        </small>
      </div>
      <div className={styles.videoBtnWrapper}>
        <div
          className={styles.videoActionBtn}
          onClick={() => addToLikeHandler(video)}
        >
          <ThumbUpTwoToneIcon fontSize="large" />
          <small>Like</small>
        </div>
        <div className={styles.videoActionBtn}>
          <BookmarkAddTwoToneIcon fontSize="large" />
          <small>Save</small>
        </div>
        <div
          className={styles.videoActionBtn}
          onClick={() => setModalOpen((open) => !open)}
        >
          <FeaturedPlayListTwoToneIcon fontSize="large" />
          <small>Playlist</small>
        </div>
      </div>
      <div className={styles.videoDescription}>
        <h4 className="mb-lg">Description</h4>
        <p>{video.description}</p>
      </div>
    </div>
  );
};
