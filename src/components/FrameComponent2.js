import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <h1 className={styles.quizzie}>QUIZZIE</h1>
      <nav className={styles.frameParent}>
        <button className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.dashboard}>Dashboard</div>
        </button>
        <div className={styles.analyticsWrapper}>
          <h2 className={styles.analytics}>Analytics</h2>
        </div>
        <div className={styles.createQuizWrapper}>
          <h2 className={styles.createQuiz}>Create Quiz</h2>
        </div>
        <div className={styles.vectorParent}>
          <img
            className={styles.frameInner}
            loading="eager"
            alt=""
            src="/vector-1.svg"
          />
          <h2 className={styles.logout}>Logout</h2>
        </div>
      </nav>
    </div>
  );
};

export default FrameComponent2;
