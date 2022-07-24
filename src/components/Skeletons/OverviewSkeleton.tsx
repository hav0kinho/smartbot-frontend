import React from "react";
import styles from "./OverviewSkeleton.module.css";
import Skeleton from "react-loading-skeleton";
type Props = {};

/*Componente de Skeleton para a "pre-renderização" do resumo de operações/overview */

const OverviewSkeleton = (props: Props) => {
  return (
    <section className={styles.wrapper}>
      <div>
        <Skeleton width={300} height={30} />
      </div>
      <div className={styles.overviewWrapper}>
        <div className={styles.dailyMovimetation}>
          <div>
            <Skeleton width={200} />
          </div>
          <div>
            <Skeleton width={120} height={25} />
          </div>
        </div>
        <div className={styles.dailyTrades}>
          <div>
            <Skeleton width={200} />
          </div>
          <div className={styles.dailyTrades}>
            <Skeleton width={100} height={25} />
          </div>
        </div>
      </div>
      <div>
        <Skeleton width={200} />
      </div>
      <div className={styles.papersWrapper}>
        <div>
          <Skeleton width={215} className={styles.paper} />
          <Skeleton width={215} className={styles.paper} />
          <Skeleton width={215} className={styles.paper} />
        </div>
        <div>
          <Skeleton width={215} className={styles.paper} />
          <Skeleton width={215} className={styles.paper} />
          <Skeleton width={215} className={styles.paper} />
        </div>
      </div>
    </section>
  );
};

export default OverviewSkeleton;
