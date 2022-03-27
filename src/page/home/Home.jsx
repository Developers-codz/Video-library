import styles from "./home.module.css";
import { Category } from "../../components";
import { craftideas, sunset } from "../../Assets/gifs";
import { fiveminCraft } from "../../Assets/thumbnail";

export const Home = () => {
  return (
    <div>
      <Category />
      <div className={styles.cardContainer}>
        <div className={styles.videoCard}>
          <img src={craftideas} className={styles.image} />
          <div className={styles.videoDetail}>
            <img className={styles.videoThumbnail} src={fiveminCraft} />
            <span className={styles.videoTitle}>
              5 Minutes Crafts
              <small class={styles.views}>1M Views two weeks ago</small>
            </span>
          </div>
        </div>

        <div className={styles.videoCard}>
          <img src={sunset} className={styles.image} />
        </div>
      </div>
    </div>
  );
};
