import GroupComponent from "./GroupComponent";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.trendingQuizsParent}>
        <h1 className={styles.trendingQuizs}>Trending Quizs</h1>
        <div className={styles.frameContainer}>
          <div className={styles.frameParent}>
            <GroupComponent />
            <GroupComponent />
            <GroupComponent />
            <GroupComponent />
            <GroupComponent />
            <GroupComponent />
            <GroupComponent />
            <GroupComponent />
            <GroupComponent />
            <GroupComponent />
            <GroupComponent />
            <GroupComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
