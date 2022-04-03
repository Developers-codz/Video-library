import styles from "./modal.module.css";
import { useState } from "react";
import { useToast } from "context/toast-context";
import { usePlaylist } from "context/playlist-context";
import { useVideo } from "context/video-context";
import { removePlaylistHandler } from "backend/controllers/PlaylistController";
export const Modal = () => {
  const [inputText, setInputText] = useState("");
  const {
    isModalOpen: { modalState, videoData },
    setModalOpen,
    setToastVal,
  } = useToast();
  const { videos } = useVideo();

  const {
    addPlaylistHandler,
    playlistState: { playlistList },
    addToPlaylistHandler,
    deleteFromPlaylistHandler,
  } = usePlaylist();
  console.log(playlistList);

  const clickHandler = () => {
    const token = localStorage.getItem("token");
    if (inputText === "") {
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "please enter playlist name",
        bg: "red",
        isOpen: true,
      }));
    } else if (token === "") {
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "please login first to create playlist",
        bg: "red",
        isOpen: true,
      }));
    } else {
      addPlaylistHandler(inputText);
      setInputText("");
    }
  };

  return (
    <>
      <div
        className={styles.modalWrapper}
        style={modalState ? { display: "block" } : { display: "none" }}
      >
        <div className={styles.modalHead}>
          <h3>Save to:</h3>
          <i
            class="fa fa-times reset"
            onClick={() =>
              setModalOpen((modal) => ({ ...modal, modalState: false }))
            }
          ></i>
        </div>
        {playlistList.length > 0 &&
          playlistList.map((playlist) => {
            return (
              <div className={styles.selectInputWrapper} key={playlist._id}>
                <input
                  type="checkbox"
                  id={playlist.title}
                  checked={playlist.videos.find(
                    ({ _id }) => _id === videoData._id
                  )}
                  onClick={() => {
                    playlist.videos.find(({ _id }) => _id === videoData._id)
                      ? deleteFromPlaylistHandler(playlist._id, videoData._id)
                      : addToPlaylistHandler(videoData, playlist._id);
                  }}
                />
                <label htmlFor={playlist.title}>{playlist.title}</label>
              </div>
            );
          })}
        <div className={styles.inputWrapper}>
          <label htmlFor="input" className="font3">
            Name:
          </label>
          <input
            type="text"
            id="input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <div className={styles.btnWrappper}>
          <button className={styles.createPlaylistBtn} onClick={clickHandler}>
            Create New Playlist
          </button>
        </div>
      </div>
    </>
  );
};
