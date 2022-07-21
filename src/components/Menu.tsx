import React from "react";
import { GiNetworkBars } from "react-icons/gi";
//Style
import styles from "./Menu.module.css";
const Menu = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.nav_icon}>
        <GiNetworkBars className={styles.green} />
      </div>
      <div className={styles.nav_routes}>
        <span className={styles.nav_routes_actual}>
          <a href="#" className={styles.disabled_link}>
            Análise Geral
          </a>
        </span>
        <span> / </span>
        <span className={styles.nav_routes_other}>
          <a href="#">Principal</a>
        </span>
      </div>
    </nav>
  );
};

export default Menu;
