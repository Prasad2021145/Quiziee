import styles from "./GroupComponent.module.css";

const GroupComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.quiz1Parent}>
        <h1 className={styles.quiz1}>Quiz 1</h1>
        <div className={styles.parent}>
          <div className={styles.div}>667</div>
          <img
            className={styles.iconParkOutlineeyes}
            loading="eager"
            alt=""
            src="/iconparkoutlineeyes.svg"
          />
        </div>
      </div>
      <div className={styles.createdOn04Sep2023Wrapper}>
        <div className={styles.createdOn}>Created on : 04 Sep, 2023</div>
      </div>
    </div>
  );
};

export default GroupComponent;
