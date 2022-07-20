import React from "react";
import { TypeFlags } from "typescript";
//Style
import styles from "./Principal.module.css";

const Principal = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.margin_bottom}>
        <span className={styles.bolder}>Resumo geral operações</span>
      </div>
      <div className={styles.spacebetween + " " + styles.margin_bottom}>
        <div>
          <span
            className={styles.small + " " + styles.gray + " " + styles.test}
          >
            Resumo de movimentação
          </span>
          <br />
          <span className={styles.value + " " + styles.red}>R$220,00</span>
        </div>
        <div>
          <span className={styles.small + " " + styles.gray}>
            Total de transações realizadas
          </span>
          <br />
          <span className={styles.value}>443</span>
        </div>
      </div>
      <div className={styles.negotiated_papers}>
        <div className={styles.margin_top}>
          <span className={styles.small + " " + styles.gray}>
            Papéis negociados
          </span>
          <div className={styles.margin_top}>
            <span className={styles.paper}>WING20</span>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Principal;
