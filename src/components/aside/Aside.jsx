import style from "./aside.module.css";
import { NavLink } from "react-router-dom";
import { useAside } from "../../context/aside-context";
export const Aside = () => {
  const { activeAside } = useAside();
  return (
    <>
      <div
        className="aside"
        style={activeAside ? { left: "0%" } : { left: "-50%" }}
      >
        <ul class={style.asideUl}>
          <NavLink
            className="decor-none light-text"
            exact
            activeClassName="active"
            to="/"
          >
            <li className={style.asideLink}>Home</li>
          </NavLink>
          <NavLink
            className="decor-none light-text"
            activeClassName="active"
            to="/playlist"
          >
            <li className={style.asideLink}>Playlist</li>
          </NavLink>
          <NavLink
            className="decor-none light-text"
            activeClassName="active"
            to="/history"
          >
            <li className={style.asideLink}>History</li>
          </NavLink>
          <NavLink
            className="decor-none light-text"
            activeClassName="active"
            to="/liked"
          >
            <li className={style.asideLink}>Liked</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};
