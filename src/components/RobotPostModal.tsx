import React, { useState } from "react";
import styles from "./RobotPostModal.module.css";

import RobotSucess from "./Icones/RobotSucess";
import RobotFailed from "./Icones/RobotFailed";

type Props = {
  popupSetter: React.Dispatch<React.SetStateAction<boolean>>;
  fatherDisabledSetter: React.Dispatch<React.SetStateAction<boolean>>;
  requestStatus: number;
};

{
  /*Componente de Modal que é renderizado quando se recebe a resposta do POST da api. Dependendo da resposta recebida, renderiza uma mensagem
de sucesso com o icone do robô feliz ou uma mensagem de erro com o icone do robo vermelho */
}
const RobotPostModal = (props: Props) => {
  const [sucessColor] = useState("#00b39d");
  const [failedColor] = useState("#ff4501");
  return (
    <div className={styles.wrapper}>
      <div>
        {props.requestStatus === 200 ? (
          <RobotSucess color={sucessColor} backgroundColor="white" />
        ) : (
          <RobotFailed color={failedColor} backgroundColor="white" />
        )}
      </div>
      <div>
        {props.requestStatus === 200 ? (
          <h2 className={styles.green}>Robô criado com sucesso</h2>
        ) : (
          <h2 className={styles.red}>Ops.. algo deu errado!</h2>
        )}
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className={
            props.requestStatus === 200
              ? styles.continueButtonGreen
              : styles.continueButtonRed
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
