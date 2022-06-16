import styles from "./bottomNav.module.css";
import { NavLink } from "react-router-dom";
import { asideData } from "data/aside-data";
export const BottomNavigation = () => {
  return (
    <nav className="bottom-nav">
      <ul className={styles.bottomNavWrapper}>
        {asideData.map((item) => {
          return (
            <li key={item.id}>
              <NavLink to={item.linkTo} className="light-text">
                {item.icon}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
