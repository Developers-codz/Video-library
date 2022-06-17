import { useParams } from "react-router-dom";
import { useVideo } from "context/video-context";
import styles from "./video.module.css";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import BookmarkAddTwoToneIcon from "@mui/icons-material/BookmarkAddTwoTone";
import FeaturedPlayListTwoToneIcon from "@mui/icons-material/FeaturedPlayListTwoTone";
import { useLike } from "context/like-context";
import { useToast } from "context/toast-context";
import { useWatchLater } from "context/watchlater-context";
import { useDocumentTitle } from "functions";

export const Video = () => {
  useDocumentTitle("Video");
  const { videos } = useVideo();
  const { addToLikeHandler } = useLike();
  const { addWatchcLaterHandler } = useWatchLater();
  let params = useParams();
  const getVideo = (id) => videos?.find(({ videoLink }) => videoLink === id);
  let video = getVideo(params.videoId, 10);

  const { setModalOpen } = useToast();

  // const { title, views, creator, videoLink, created } = video;

  return (
    <div className={styles.videoContainer}>
      <div className={styles.iframeWrapper}>
        <iframe
          className={styles.iframe}
          src={`https://www.youtube.com/embed/${video?.videoLink}`}
        ></iframe>
      </div>
      <div className={styles.videoPageName}>
        <h1>{video?.title}</h1>
        <h2>By {video?.creator}</h2>
        <small>
          {video?.views} Views | {video?.created} ago
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
        <div
          className={styles.videoActionBtn}
          onClick={() => addWatchcLaterHandler(video)}
        >
          <BookmarkAddTwoToneIcon fontSize="large" />
          <small>Save</small>
        </div>
        <div
          className={styles.videoActionBtn}
          onClick={() =>
            setModalOpen((modal) => ({
              ...modal,
              modalState: true,
              videoData: video,
            }))
          }
        >
          <FeaturedPlayListTwoToneIcon fontSize="large" />
          <small>Playlist</small>
        </div>
      </div>
      <div className={styles.videoDescription}>
        <h4 className="mb-lg">Description</h4>
        <p>{video?.description}</p>
      </div>
    </div>
  );
};
