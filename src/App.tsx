import React, { useEffect, useState } from "react";
//=====================Style=====================
import "./App.css";
//===================Components==================
import Overview from "./components/Overview";
import Menu from "./components/Menu";
import Robot from "./components/Robot";
import RobotAdd from "./components/RobotAdd";
import RobotList from "./components/RobotList";
//=-=-=-=-=-=-Skeleton=-=-=-=-=-=-
import RobotSkeleton from "./components/Skeletons/RobotSkeleton";
import OverviewSkeleton from "./components/Skeletons/OverviewSkeleton";
import "react-loading-skeleton/dist/skeleton.css";
//===================Interfaces==================
import IRobot from "./interfaces/IRobot";
import IOverview from "./interfaces/IOverview";
import RobotModal from "./components/RobotModal";

function App() {
  //=============================UseStates============================
  const [robotList, setRobotList] = useState<IRobot[]>();
  const [loadingRobots, setLoadingRobots] = useState<boolean>(false);
  const [loadingOverview, setLoadingOverview] = useState<boolean>(false);
  const [overview, setOverview] = useState<IOverview>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  //========================GetRobots================================
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
  //==========================GetRobotsOverview========================
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
  //==========================Pegar os Dados na API========================
  useEffect(() => {
    getRobots().then((data) => setRobotList(data));
    getRobotsOverview().then((data) => setOverview(data));
  }, []);

  return (
    <div className="App">
      {/*=-=-=-=-=-=-Modal de Cadastro=-=-=-=-=-=-*/}
      {isModalOpen && <RobotModal modalSetter={setIsModalOpen} />}
      <Menu />
      {/*=-=-=-=-=-=-Skeleton Overview=-=-=-=-=-=-*/}
      {loadingOverview && <OverviewSkeleton />}
      {/*=-=-=-=-=-=-=-=-Overview=-=-==-=--=-=-=-*/}
      {!loadingOverview && overview && <Overview overviewData={overview} />}
      <RobotAdd robotQtd={3} modalSetter={setIsModalOpen} />

      {/*=-=-=-=-=-Wrapper da lista de robôs=-=-==-=-*/}
      <section className="robot_wrapper">
        {loadingRobots && <RobotSkeleton />}
        {robotList && <RobotList robots={robotList} />}
      </section>
    </div>
  );
}

export default App;
