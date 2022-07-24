import React, { useState } from "react";
import Robot from "./Robot";
import IRobot from "../interfaces/IRobot";

type Props = {
  robots: IRobot[];
};

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
