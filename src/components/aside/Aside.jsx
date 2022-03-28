import style from "./aside.module.css";
import { NavLink } from "react-router-dom";
import { useAside } from "context/aside-context";
import { asideData } from "data";

export const Aside = () => {
  const { activeAside } = useAside();
  return (
    <>
      <div
        className="aside"
        style={activeAside ? { left: "0%" } : { left: "-50%" }}
      >
        <ul className={style.asideUl}>
          {asideData.map(({ name, linkTo }) => {
            return (
              <NavLink
                className="decor-none light-text"
                exact="true"
                to={linkTo}
              >
                <li className={style.asideLink}>{name}</li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </>
  );
};
