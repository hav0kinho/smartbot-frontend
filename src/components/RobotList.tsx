import React, { useState } from "react";
import Robot from "./Robot";
import IRobot from "../interfaces/IRobot";

type Props = {
  robots: IRobot[];
};

{
  /*Componente da lista de robôs. Simplesmente ele recebe uma lista de IRobot, que é a interface que representa as informações que o robô precisa
para se renderizada, e usa o map para renderizar elas de uma vez */
}
const RobotList = (props: Props) => {
  return (
    <>
      {props.robots &&
        props.robots.map((robot) => (
          <Robot
            key={robot.id}
            robotParams={robot}
            robotLastPaper={robot.last_paper}
          />
        ))}
    </>
  );
};

export default RobotList;
