import styles from "./modal.module.css";
import { useState } from "react";
import { useToast } from "context/toast-context";
import { usePlaylist } from "context/playlist-context";
export const Modal = () => {
  const [inputText, setInputText] = useState("");
  const { isModalOpen, setModalOpen, setToastVal } = useToast();

  const {
    addToPlaylistHandler,
    playlistState: { playlistList },
  } = usePlaylist();

  const clickHandler = () => {
    if (inputText === "") {
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "please enter playlist name",
        bg: "red",
        isOpen: true,
      }));
    }
    addToPlaylistHandler(inputText);
    setInputText("");
  };
  return (
    <>
      <div
        className={styles.modalWrapper}
        style={isModalOpen ? { display: "block" } : { display: "none" }}
      >
        <div className={styles.modalHead}>
          <h3>Save to:</h3>
          <i
            class="fa fa-times reset"
            onClick={() => setModalOpen((open) => !open)}
          ></i>
        </div>
        {playlistList.length > 0 &&
          playlistList.map((playlist) => {
            return (
              <div className={styles.selectInputWrapper}>
                <input type="checkbox" id={playlist.title} />
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
