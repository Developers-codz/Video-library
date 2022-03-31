import styles from "./aside.module.css";
import { NavLink } from "react-router-dom";
import { useAside } from "context/aside-context";
import { asideData } from "data";
import { Home } from "Assets/icons";

export const Aside = () => {
  const { activeAside } = useAside();
  return (
    <>
      <div
        className="aside"
        styles={activeAside ? { left: "0%" } : { left: "-50%" }}
      >
        <ul className={styles.asideUl}>
          {asideData.map(({ id, name, linkTo, icon }) => {
            return (
              <NavLink
                className="decor-none light-text"
                exact="true"
                to={linkTo}
                key={id}
              >
                <li className={styles.asideLink}>
                  <span className={styles.icons}>{icon}</span>
                  <span className={styles.navLinkName}>{name}</span>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </>
  );
};
