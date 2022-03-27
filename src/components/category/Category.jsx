import styles from "./category.module.css";
import { useVideo } from "context/video-context";
export const Category = () => {
  const { videoDispatch } = useVideo();
  return (
    <div className={styles.categoryWrapper}>
      <input
        className={styles.hiddenInput}
        type="radio"
        name="category"
        id="all"
        onClick={() => videoDispatch({ type: "ALL" })}
      />
      <label htmlFor="all" className={styles.category}>
        All
      </label>
      <input
        className={styles.hiddenInput}
        type="radio"
        name="category"
        id="craftIdeas"
        onClick={() =>
          videoDispatch({ type: "CATEGORY", payload: "BY_CRAFT_IDEAS" })
        }
      />
      <label htmlFor="craftIdeas" className={styles.category}>
        Craft Ideas
      </label>
      <input
        className={styles.hiddenInput}
        type="radio"
        name="category"
        id="paintings"
        onClick={() =>
          videoDispatch({ type: "CATEGORY", payload: "BY_PAINTINGS" })
        }
      />
      <label htmlFor="paintings" className={styles.category}>
        Paintings
      </label>
      <input
        className={styles.hiddenInput}
        type="radio"
        name="category"
        id="bestOutOfWaste"
        onClick={() =>
          videoDispatch({
            type: "CATEGORY",
            payload: "BY_BEST_OUT_OF_WASTE",
          })
        }
      />
      <label htmlFor="bestOutOfWaste" className={styles.category}>
        Best out of waste
      </label>
    </div>
  );
};
