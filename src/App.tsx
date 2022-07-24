import React, { useEffect, useState } from "react";
//=====================Style=====================
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";
//===================Components==================
import Overview from "./components/Overview";
import Menu from "./components/Menu";
import Robot from "./components/Robot";
import RobotAdd from "./components/RobotAdd";
import RobotList from "./components/RobotList";
//===================Interfaces==================
import IRobot from "./interfaces/IRobot";
import IOverview from "./interfaces/IOverview";
import RobotModal from "./components/RobotModal";

function App() {
  const [robotList, setRobotList] = useState<IRobot[]>();
  const [loadingRobots, setLoadingRobots] = useState<boolean>(false);
  const [loadingOverview, setLoadingOverview] = useState<boolean>(false);
  const [overview, setOverview] = useState<IOverview>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const getRobots = async () => {
    setLoadingRobots(true);
    const response = await fetch(
      "https://api-front-test.k8s.smarttbot.com/api/v1/robot"
    );
    const json = await response.json();
    const data: IRobot[] = json.data;
    setLoadingRobots(false);
    return data;
  };

  const getRobotsOverview = async () => {
    setLoadingOverview(true);
    const response = await fetch(
      "https://api-front-test.k8s.smarttbot.com/api/v1/robot/overview"
    );
    const json = await response.json();
    const data: IOverview = json.data;
    setLoadingOverview(false);
    return data;
  };

  useEffect(() => {
    getRobots().then((data) => setRobotList(data));
    getRobotsOverview().then((data) => setOverview(data));
  }, []);

  return (
    <div className="App">
      <>{console.log(robotList)}</>
      {isModalOpen && <RobotModal modalSetter={setIsModalOpen} />}
      <Menu />
      {loadingOverview && <p>Loading...</p>}
      {!loadingOverview && overview && <Overview overviewData={overview} />}
      <RobotAdd robotQtd={3} modalSetter={setIsModalOpen} />

      <section className="robot_wrapper">
        {robotList && <RobotList robots={robotList} />}
      </section>
    </div>
  );
}

export default App;
