import React from "react";
import Skeleton from "react-loading-skeleton";
import styles from "./RobotSkeleton.module.css";

type Props = {};

/*Componente de Skeleton para a "pre-renderização" dos robôs */

const RobotSkeleton = (props: Props) => {
  return (
    <>
      {Array(12)
        .fill(0)
        .map((_, i) => (
          <div key={i} className={styles.wrapper}>
            <div className={styles.headerWrapper}>
              <div>
                <Skeleton width={150} />
              </div>
              <div className={styles.rightCol}>
                <Skeleton
                  className={styles.executionCircle}
                  circle
                  width={20}
                  height={20}
                />
                <Skeleton width={100} />
              </div>
            </div>
            <div>
              <Skeleton width={80} />
            </div>
            <div className={styles.propetiesWrapper}>
              <div>
                <Skeleton width={60} />
              </div>
              <div>
                <Skeleton width={60} />
              </div>
              <div>
                <Skeleton width={60} />
              </div>
            </div>
            <div className={styles.paperWrapper}>
              <div className={styles.leftCol}>
                <div className={styles.paperPosition}>
                  <Skeleton width={40} height={40} />
                </div>
                <div className={styles.paperName}>
                  <div>
                    <Skeleton width={120} />
                  </div>
                  <div>
                    <Skeleton width={50} />
                  </div>
                </div>
              </div>
              <div className={styles.rightCol}>
                <div>
                  <Skeleton width={100} />
                </div>
                <div>
                  <Skeleton width={80} />
                </div>
              </div>
            </div>
            <div className={styles.footerPropetiesWrapper}>
              <div className={styles.dailyBalance}>
                <div>
                  <Skeleton width={100} />
                </div>
                <div>
                  <Skeleton width={120} height={25} />
                </div>
              </div>
              <div className={styles.dailyTrades}>
                <div>
                  <Skeleton width={100} />
                </div>
                <div>
                  <Skeleton width={50} height={25} />
                </div>
              </div>
            </div>
          </div>
        ))}
      ;
    </>
  );
};

export default RobotSkeleton;
