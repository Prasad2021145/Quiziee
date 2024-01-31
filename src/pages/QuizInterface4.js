import QuestionFormContainer1 from "../components/QuestionFormContainer1";
import styles from "./QuizInterface4.module.css";

const QuizInterface4 = () => {
  return (
    <div className={styles.quizInterface}>
      <main className={styles.frameContainer}>
        <div className={styles.frameContainerChild} />
        <section className={styles.questionFrame}>
          <div className={styles.questionFrameChild} />
          <div className={styles.answerFrames}>
            <div className={styles.optionGroup}>
              <b className={styles.textLabel}>01/04</b>
              <b className={styles.s}>00:10s</b>
            </div>
          </div>
          <QuestionFormContainer1
            buttonText="NEXT "
            option1Border="5px solid var(--color-royalblue)"
            groupButtonBorder="5px solid var(--color-royalblue)"
            propWidth="352px"
            propPadding="var(--padding-7xs) var(--padding-8xs) var(--padding-8xs)"
            propFlex="1"
          />
        </section>
      </main>
    </div>
  );
};

export default QuizInterface4;
