import styles from "./category.module.css";
export const Category = () => {
  return (
    <div className={styles.categoryWrapper}>
      <input
        className={styles.hiddenInput}
        type="radio"
        name="category"
        id="all"
      />
      <label for="all" className={styles.category}>
        All
      </label>
      <input
        className={styles.hiddenInput}
        type="radio"
        name="category"
        id="craftIdeas"
      />
      <label for="craftIdeas" className={styles.category}>
        Craft Ideas
      </label>
      <input
        className={styles.hiddenInput}
        type="radio"
        name="category"
        id="paintings"
      />
      <label for="paintings" className={styles.category}>
        Paintings
      </label>
      <input
        className={styles.hiddenInput}
        type="radio"
        name="category"
        id="bestOutOfWaste"
      />
      <label for="bestOutOfWaste" className={styles.category}>
        Best out of waste
      </label>
    </div>
  );
};
