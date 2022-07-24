import React, { useState } from "react";
import styles from "./RobotAdd.module.css";
//SVG Components
import RobotAddIcon from "./Icones/RobotAddIcon";

type Props = {
  robotQtd: Number;
  modalSetter: React.Dispatch<React.SetStateAction<boolean>>;
};

const RobotAdd = (props: Props) => {
  const robotQtd = props.robotQtd.toString();
  const [robotQtdText, setRobotQtdText] = useState<String>(robotQtd);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.add_button}
        onClick={() => props.modalSetter(true)}
      >
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
            Você possui{" "}
            <span className={styles.number_green}>{robotQtdText} Robôs</span>{" "}
            disponíveis
          </span>
        </div>
      </div>
    </div>
  );
};

export default RobotAdd;
