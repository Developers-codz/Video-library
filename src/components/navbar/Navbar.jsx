import styles from "./navbar.module.css";
import StreamOutlinedIcon from "@mui/icons-material/StreamOutlined";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";
import { useAside } from "context/aside-context";
export const Navbar = () => {
  const { setActiveAside } = useAside();
  const clickHandler = () => {
    setActiveAside((status) => !status);
  };
  return (
    <>
      <div className="navbar">
        <h1 className={styles.nav}>
          <span className={styles.logowrapper} onClick={clickHandler}>
            <StreamOutlinedIcon fontSize="large" />
          </span>
          <span className={styles.navheading}>Play Arts</span>
        </h1>
        <span className={styles.loginIcon}>
          <LoginTwoToneIcon fontSize="large" />
        </span>
      </div>
    </>
  );
};
