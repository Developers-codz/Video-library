import styles from "./profile.module.css";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "context/auth-context";
import { useDocumentTitle } from "functions";
import { useLike } from "context/like-context";
import { useWatchLater } from "context/watchlater-context";
import { usePlaylist } from "context/playlist-context";
import { useHistory } from "context/history-context";

export const Profile = () => {
  useDocumentTitle("Profile");
  const param = useParams();
  let profileAction = param.profileAction;
  const {
    authState: { firstName, email },
    logoutHandler,
  } = useAuth();
  const {likeLogoutHandler} = useLike();
  const {watchlaterLogoutHandler} = useWatchLater();
  const {playlistLogoutHandler} = usePlaylist();
  const {historyLogoutHandler} = useHistory()
  const handleLogout = () =>{
    logoutHandler();
    likeLogoutHandler();
    watchlaterLogoutHandler();
    playlistLogoutHandler();
    historyLogoutHandler();
  }
  return (
    <>
      <div className={styles.profileWrapper}>
        <div className={styles.leftPane}>
          <ul className={styles.listWrapper}>
            <li className={styles.userDetail}>
              <Link to="/profile/user" className="decor-none font2 light-text">
                User
              </Link>
            </li>

            <li>
              <Link
                to="/profile/settings"
                className="decor-none font2 light-text"
              >
                Settings
              </Link>
            </li>
          </ul>
        </div>
        {profileAction === "settings" ? (
          <div className={styles.rightPane}>
            <h3>Account Settings</h3>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        ) : (
          <div className={styles.rightPane}>
            <h3>Profile Details</h3>
            <div className={styles.emailRow}>
              <h2>Name</h2>
              <h2>{firstName}</h2>
            </div>
            <div className={styles.emailRow}>
              <h2>Email Id</h2>
              <h2>{email}</h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
