import { NotfoundIcon } from "Assets/icons";
import { Link } from "react-router-dom";
import styles from "./pagenotfound.module.css";
import { useDocumentTitle } from "functions";

export const Pagenotfound = () => {
  useDocumentTitle("Page not Found");
  return (
    <div className={styles.notFoundContainer}>
      <NotfoundIcon width="150" height="150" color="#ff8a8a" />
      <p>Page Not Found</p>
      <Link to="/" className={styles.toHomeBtn}>
        Back To home
      </Link>
    </div>
  );
};
