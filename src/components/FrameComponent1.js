import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameGroup}>
            <div className={styles.wrapper}>
              <div className={styles.div}>12</div>
            </div>
            <div className={styles.quiz}>Quiz</div>
          </div>
          <div className={styles.createdWrapper}>
            <div className={styles.created}>{`Created `}</div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.parent}>
          <div className={styles.div1}>110</div>
          <div className={styles.questionsWrapper}>
            <h1 className={styles.questions}>questions</h1>
          </div>
        </div>
        <div className={styles.createdContainer}>
          <h1 className={styles.created1}>{`Created `}</h1>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameInner} />
        <div className={styles.kParent}>
          <div className={styles.k}>1.4K</div>
          <div className={styles.totalWrapper}>
            <h1 className={styles.total}>Total</h1>
          </div>
        </div>
        <div className={styles.impressionsWrapper}>
          <h1 className={styles.impressions}>Impressions</h1>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
