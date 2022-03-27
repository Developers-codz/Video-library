import style from "./aside.module.css";
import { NavLink } from "react-router-dom";
import { useAside } from "context/aside-context";
export const Aside = () => {
  const { activeAside } = useAside();
  return (
    <>
      <div
        className="aside"
        style={activeAside ? { left: "0%" } : { left: "-50%" }}
      >
        <ul className={style.asideUl}>
          <NavLink className="decor-none light-text" exact="true" to="/">
            <li className={style.asideLink}>Home</li>
          </NavLink>
          <NavLink className="decor-none light-text" to="/playlist">
            <li className={style.asideLink}>Playlist</li>
          </NavLink>
          <NavLink className="decor-none light-text" to="/history">
            <li className={style.asideLink}>History</li>
          </NavLink>
          <NavLink className="decor-none light-text" to="/liked">
            <li className={style.asideLink}>Liked</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};
