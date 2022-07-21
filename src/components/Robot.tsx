import React from "react";
//Styles
import styles from "./Robot.module.css";

const Robot = () => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.basic_flex + " " + styles.space_between}>
        <div>
          <h2 className={styles.robot_title}>Título do Robô</h2>
        </div>
        <div>
          <span>i</span>
          <span className={styles.robot_state}>Em execução</span>
        </div>
      </div>
      <div className={styles.basic_flex}>
        <span className={styles.robot_id}>#1782301</span>
      </div>
      <div className={styles.basic_flex + " " + styles.robot_propeties_wrapper}>
        <div className={styles.robot_propeties}>
          <span>Pessimista</span>
        </div>
        <div className={styles.robot_propeties}>
          <span>WIN%</span>
        </div>
        <div className={styles.robot_propeties}>
          <span>Price action</span>
        </div>
      </div>
      <div
        className={
          styles.basic_flex +
          " " +
          styles.space_between +
          " " +
          styles.robot_last_paper
        }
      >
        <div className={styles.basic_flex}>
          <div className={styles.paper_position}>
            <span>30</span>
          </div>
          <div>
            <div className={styles.paper_name}>
              <span>WING20</span>
            </div>
            <div className={styles.paper_type}>
              <span>Compra</span>
            </div>
          </div>
        </div>

        <div className={styles.paper_values}>
          <div>
            <span className={styles.paper_value}>144.093.33</span>
          </div>
          <div>
            <span>^</span>
            <span className={styles.paper_profit + " " + styles.red}>
              R$32,33
            </span>
          </div>
        </div>
      </div>
      <div className={styles.basic_flex + " " + styles.space_between}>
        <div className={styles.daily_balance}>
          <span className={styles.small + " " + styles.gray}>
            Saldo diário ^
          </span>
          <br />
          <span>R$120,00</span>
        </div>
        <div className={styles.daily_trades}>
          <span className={styles.small + " " + styles.gray}>
            Trades no dia
          </span>
          <br />
          <span>4</span>
        </div>
      </div>
    </article>
  );
};

export default Robot;
