import styles from "./modal.module.css";
import { useState } from "react";
import { useToast } from "context/toast-context";
export const Modal = () => {
  const { isModalOpen, setModalOpen } = useToast();
  const [isInputOpen, setInputOpen] = useState(false);
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
        <div className={styles.inputWrapper}>
          <label htmlFor="input" className="font3">
            Name:
          </label>
          <input type="text" id="input" />
        </div>
        <div className={styles.btnWrappper}>
          <button className={styles.createPlaylistBtn}>
            Create New Playlist
          </button>
        </div>
      </div>
    </>
  );
};
