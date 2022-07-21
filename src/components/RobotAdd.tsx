import React from "react";
import styles from "./RobotAdd.module.css";
//SVG Components
import RobotAddIcon from "./Icones/RobotAddIcon";

const RobotAdd = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.add_button}>
        <div className={styles.icon_wrapper}>
          <RobotAddIcon />
        </div>
      </button>
      <div className={styles.robot_text_wrapper}>
        <div>
          <span className={styles.robot_add_text}>Adicionar novo Robô</span>
        </div>
        <div>
          <span className={styles.robot_number_text}>
            Você possui <span className={styles.number_green}>02 Robôs</span>{" "}
            disponíveis
          </span>
        </div>
      </div>
    </div>
  );
};

export default RobotAdd;
