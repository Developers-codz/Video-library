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
      <label htmlFor="all" className={styles.category}>
        All
      </label>
      <input
        className={styles.hiddenInput}
        type="radio"
        name="category"
        id="craftIdeas"
      />
      <label htmlFor="craftIdeas" className={styles.category}>
        Craft Ideas
      </label>
      <input
        className={styles.hiddenInput}
        type="radio"
        name="category"
        id="paintings"
      />
      <label htmlFor="paintings" className={styles.category}>
        Paintings
      </label>
      <input
        className={styles.hiddenInput}
        type="radio"
        name="category"
        id="bestOutOfWaste"
      />
      <label htmlFor="bestOutOfWaste" className={styles.category}>
        Best out of waste
      </label>
    </div>
  );
};
