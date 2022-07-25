import React from "react";
import styles from "./RobotFailed.module.css";
type Props = {
  color: string;
  backgroundColor: string;
};

/*Componente de Icone que desenha um robô vermelho */

const RobotFailed = (props: Props) => {
  return (
    <svg
      className={styles.svg}
      width="200"
      height="200"
      viewBox="0 0 37 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={props.color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 19.16 11.612 C 18.123 12.255 15.927 13.209 12.029 13.209 C 8.132 13.209 5.935 12.255 4.898 11.612 C 4.425 11.32 4.144 10.822 4.144 10.291 L 4.144 8.009 C 4.144 7.422 4.653 6.947 5.281 6.947 L 12.029 6.947 L 18.778 6.947 C 19.405 6.947 19.914 7.422 19.914 8.009 L 19.914 10.291 C 19.914 10.822 19.633 11.32 19.16 11.612 Z M 12.029 0.444 C 6.408 0.444 1.851 4.703 1.851 9.957 C 1.851 15.211 6.408 19.47 12.029 19.47 C 17.65 19.47 22.207 15.211 22.207 9.957 C 22.207 4.703 17.65 0.444 12.029 0.444 Z M 8.411 8.488 C 7.763 8.488 7.238 8.979 7.238 9.584 C 7.238 10.189 7.763 10.68 8.411 10.68 C 9.058 10.68 9.583 10.189 9.583 9.584 C 9.583 8.979 9.058 8.488 8.411 8.488 Z M 14.475 9.584 C 14.475 8.979 15 8.488 15.648 8.488 C 16.295 8.488 16.82 8.979 16.82 9.584 C 16.82 10.189 16.295 10.68 15.648 10.68 C 15 10.68 14.475 10.189 14.475 9.584 Z"
      />
    </svg>
  );
};

export default RobotFailed;
