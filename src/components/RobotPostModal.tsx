import React, { useState } from "react";
import styles from "./RobotPostModal.module.css";

import RobotSucess from "./Icones/RobotSucess";
import RobotFailed from "./Icones/RobotFailed";

type Props = {
  popupSetter: React.Dispatch<React.SetStateAction<boolean>>;
  fatherDisabledSetter: React.Dispatch<React.SetStateAction<boolean>>;
  requestStatus: number;
};

const RobotPostModal = (props: Props) => {
  const [sucessColor] = useState("#00b39d");
  const [failedColor] = useState("#ff4501");
  return (
    <div className={styles.wrapper}>
      <div>
        {props.requestStatus === 200 ? (
          <RobotSucess color={sucessColor} backgroundColor="white" />
        ) : (
          <RobotSucess color={failedColor} backgroundColor="white" />
        )}
      </div>
      <div>
        <h2 className={props.requestStatus === 200 ? styles.green : styles.red}>
          Robô criado com sucesso
        </h2>
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className={
            props.requestStatus === 200
              ? styles.continueButtonGreen
              : styles.red
          }
          onClick={() => {
            props.popupSetter(false);
            props.fatherDisabledSetter(false);
          }}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default RobotPostModal;
