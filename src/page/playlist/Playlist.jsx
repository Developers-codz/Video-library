import { Toast } from "components";
import { PlaylistIcon } from "Assets/icons";
import styles from "./playlist.module.css";
import { Link, Navigate, useParams, useNavigate } from "react-router-dom";
import { usePlaylist } from "context/playlist-context";
import { Playlistcard } from "components";
export const Playlist = () => {
  const param = useParams();
  const navigate = useNavigate();
  const playlistAction = param.playlistAction;
  const {
    playlistState: { playlistList },
    deletePlaylistHandler,
  } = usePlaylist();
  const currentPlaylist = playlistList.find(
    ({ _id }) => _id === playlistAction
  );
  console.log(currentPlaylist);
  return (
    <>
      <Toast />
      {playlistList.length === 0 ? (
        <div className={styles.emptyLikeContainer}>
          <PlaylistIcon width="100" height="100" color="#ff8a8a" />
          <h1>Your Playlist is Empty ☹️</h1>
          <Link className={styles.exploreBtn} to="/">
            Explore now
          </Link>
        </div>
      ) : (
        <div className={styles.playlistContainer}>
          <div className={styles.leftPane}>
            {playlistList.map(({ title, _id, videos }) => {
              return (
                <div className={styles.playlistCards}>
                  <Link
                    to={`/playlist/${_id}`}
                    key={_id}
                    className={styles.links}
                  >
                    <h3>{title}</h3>
                  </Link>
                  <i
                    className="fa fa-trash"
                    onClick={() => {
                      deletePlaylistHandler(_id);
                      navigate("/playlist");
                    }}
                  ></i>
                  <div className={styles.showPlaylistnum}>
                    <h1>+{videos.length}</h1>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.rightPane}>
            {playlistAction === undefined ? (
              <h2>Click on a particular playlist to see videos</h2>
            ) : (
              currentPlaylist.videos.map((video) => {
                return (
                  <Playlistcard
                    item={video}
                    currentPlaylistId={currentPlaylist._id}
                    title={currentPlaylist.title}
                  />
                );
              })
            )}
          </div>
        </div>
      )}
    </>
  );
};
