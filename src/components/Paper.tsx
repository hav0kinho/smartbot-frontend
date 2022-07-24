import React from "react";
import IPaper from "../interfaces/IPaper";
import styles from "./Paper.module.css";
//Interfaces

type Props = {
  paperPropeties: IPaper;
};

const Paper = (props: Props) => {
  return (
    <article className={styles.paper_wrapper}>
      <div className={styles.paper_name}>{props.paperPropeties.name}</div>
      <div className={styles.divider}></div>
      <div className={styles.paper_transations}>
        <span className={styles.bolder}>
          <>{props.paperPropeties.trasactions}</>
        </span>{" "}
        transações
      </div>
    </article>
  );
};

export default Paper;

/*<article className={styles.margin_top}>
      <div className={styles.paper}>
        <h2 className={styles.test + " " + styles.paper_name}>
          <span>WING20</span>
        </h2>
        <h2 className={styles.test}>157 transações</h2>
      </div>
    </article> */
