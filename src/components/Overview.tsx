import React from "react";
import { TypeFlags } from "typescript";
import IOverview from "../interfaces/IOverview";
//Style
import styles from "./Overview.module.css";
import Paper from "./Paper";

type Props = {
  overviewData: IOverview;
};

const Overview = (props: Props) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.margin_bottom}>
        <span className={styles.bolder}>Resumo geral operações</span>
      </div>
      <div className={styles.spacebetween + " " + styles.margin_bottom}>
        <div>
          <span className={styles.small + " " + styles.gray}>
            Resumo de movimentação
          </span>
          <br />
          <span className={styles.value + " " + styles.red}>
            <>
              {props.overviewData.moviment_summary < 0
                ? "-R$" + Math.abs(props.overviewData.moviment_summary)
                : props.overviewData.moviment_summary}
            </>
          </span>
        </div>
        <div>
          <span className={styles.small + " " + styles.gray}>
            Total de transações realizadas
          </span>
          <br />
          <div className={styles.align_right}>
            <span className={styles.value}>
              {props.overviewData.transactions}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.negotiated_papers}>
        <div className={styles.margin_top_bottom}>
          <span className={styles.small + " " + styles.gray}>
            Papéis negociados
          </span>
        </div>

        <div className={styles.negotiated_papers_wrapper}>
          {props.overviewData &&
            props.overviewData.papers.map((paper, i) => (
              <Paper key={i} paperPropeties={paper} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
