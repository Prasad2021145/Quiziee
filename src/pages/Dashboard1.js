import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Dashboard1.module.css";

const Dashboard1 = () => {
  return (
    <div className={styles.dashboard}>
      <main className={styles.frameParent}>
        <FrameComponent2 />
        <section className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <FrameComponent1 />
          <FrameComponent />
        </section>
      </main>
      <div className={styles.dashboardChild} />
    </div>
  );
};

export default Dashboard1;
