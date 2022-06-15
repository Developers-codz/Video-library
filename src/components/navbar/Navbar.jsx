import styles from "./navbar.module.css";
import StreamOutlinedIcon from "@mui/icons-material/StreamOutlined";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";
import { useAside } from "context/aside-context";
import { useAuth } from "context/auth-context";
import { UserIcon } from "Assets/icons";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const { setActiveAside } = useAside();
  const clickHandler = () => {
    setActiveAside((status) => !status);
  };
  const {
    authState: { authToken },
  } = useAuth();
  return (
    <>
      <div className="navbar">
        <h1 className={styles.nav}>
          <span className={styles.logowrapper} onClick={clickHandler}>
            <StreamOutlinedIcon fontSize="large" />
          </span>
          <span className={styles.navheading}>Play Arts</span>
        </h1>
        <div className={styles.searchBoxWrapper}>
        <input className={styles.searchBox} placeholder="SEARCH......" />
        <i class="fa fa-search fa-lg" aria-hidden="true"></i>


        </div>
        {authToken === "" ? (
          <Link to="/login">
            <span className={styles.loginIcon}>
              <LoginTwoToneIcon fontSize="large" />
            </span>
          </Link>
        ) : (
          <Link to="/profile">
            <span className={styles.loginIcon}>
              <UserIcon />
            </span>
          </Link>
        )}
      </div>
    </>
  );
};
