import styles from "./QuizzieFormContainer.module.css";

const QuizzieFormContainer = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.quizzie}>QUIZZIE</div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.dashboard}>Dashboard</div>
          </div>
          <div className={styles.analyticsWrapper}>
            <div className={styles.analytics}>Analytics</div>
          </div>
        </div>
        <div className={styles.createQuiz}>Create Quiz</div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.frameInner} alt="" src="/vector-1.svg" />
        <b className={styles.logout}>Logout</b>
      </div>
    </div>
  );
};

export default QuizzieFormContainer;
