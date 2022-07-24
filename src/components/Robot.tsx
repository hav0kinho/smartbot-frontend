import React, { useState } from "react";
import ILastPaper from "../interfaces/ILastPaper";
import IRobot from "../interfaces/IRobot";
//Styles
import styles from "./Robot.module.css";

type Props = {
  robotParams: IRobot;
  robotLastPaper: ILastPaper;
};
{
  /*Componente dos robôs. Recebe como parâmetro a resposta da API que se refere aos robôs, como a ação que está investindo e o valor da mesma
    O componente recebe cerca de 13 informações da API, podendo ser vistas nas interfaces acima.
  */
}
const Robot = (props: Props) => {
  const [robotLastPaper] = useState(props.robotLastPaper);
  return (
    <article className={styles.wrapper}>
      <div className={styles.basic_flex + " " + styles.space_between}>
        <div>
          {/*Titulo */}
          <h2 className={styles.robot_title}>{props.robotParams.title}</h2>
        </div>
        <div>
          <span
            className={
              props.robotParams.running === 0
                ? styles.robot_circle_red
                : styles.robot_circle_green
            }
          >
            ⬤
          </span>
          <span className={styles.robot_state}>
            {/*Estado atual */}
            <>{props.robotParams.running === 0 ? "Parado" : "Em execução"}</>
          </span>
        </div>
      </div>
      <div className={styles.basic_flex}>
        {/*ID */}
        <span className={styles.robot_id}>
          <>#{props.robotParams.id}</>
        </span>
      </div>
      <div className={styles.basic_flex + " " + styles.robot_propeties_wrapper}>
        {/*PROPRIEDADES */}
        <div className={styles.robot_propeties}>
          <span>
            <>
              {props.robotParams.simulation === 0 ? "Otimista" : "Pessimista"}
            </>
          </span>
        </div>
        <div className={styles.robot_propeties}>
          <span>
            <>{props.robotParams.stock_codes}</>
          </span>
        </div>
        <div className={styles.robot_propeties}>
          <span>
            <>{props.robotParams.type}</>
          </span>
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
        {/*PAPER INFORMATIONS */}
        <div className={styles.basic_flex}>
          <div className={styles.paper_position}>
            <span>
              <>{props.robotLastPaper?.position}</>
            </span>
          </div>
          <div>
            <div className={styles.paper_name}>
              <span>
                <>{props.robotLastPaper?.paper}</>
              </span>
            </div>
            <div className={styles.paper_type}>
              <span>
                <>{props.robotLastPaper?.type === 0 ? "Compra" : "Venda"}</>
              </span>
            </div>
          </div>
        </div>
        {/*PAPER VALUES */}
        <div className={styles.paper_values}>
          <div>
            <span className={styles.paper_value}>
              <>{props.robotLastPaper?.paper_value}</>
            </span>
          </div>
          <div>
            <span
              className={
                props.robotLastPaper?.profit >= 0
                  ? styles.paper_profit_green
                  : styles.paper_profit_red
              }
            >
              <span>{props.robotLastPaper?.profit >= 0 ? "▲" : "▼"}</span>
              <>{props.robotLastPaper?.profit}</>
            </span>
          </div>
        </div>
      </div>
      {/*FOOTER VALUES */}
      <div className={styles.basic_flex + " " + styles.space_between}>
        <div className={styles.daily_balance}>
          <span className={styles.small + " " + styles.gray}>
            Saldo diário ^
          </span>
          <br />
          <span
            className={
              props.robotParams.daily_balance >= 0 ? styles.green : styles.red
            }
          >
            {props.robotParams.daily_balance < 0
              ? "-R$" + Math.abs(props.robotParams.daily_balance)
              : "R$" + props.robotParams.daily_balance}{" "}
          </span>
        </div>
        <div className={styles.daily_trades}>
          <span className={styles.small + " " + styles.gray}>
            Trades no dia
          </span>
          <br />
          <span>
            <>{props.robotParams.number_trades}</>
          </span>
        </div>
      </div>
    </article>
  );
};

export default Robot;
