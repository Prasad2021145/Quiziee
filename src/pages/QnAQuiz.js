import CardWithImage from "../components/CardWithImage";
import styles from "./QnAQuiz.module.css";

const QnAQuiz = () => {
  return (
    <div className={styles.qnaQuiz}>
      <div className={styles.questionFrame}>
        <b className={styles.emptyFrame}>01/04</b>
      </div>
      <section className={styles.textFrame}>
        <b className={styles.yourQuestionText}>
          Your question text comes here, its a sample text.
        </b>
        <div className={styles.imageGroup}>
          <CardWithImage
            propBorder="2px solid var(--color-royalblue)"
            propPadding="var(--padding-3xs) var(--padding-xl) var(--padding-4xs) var(--padding-3xl)"
            propBorder1="2px solid var(--color-royalblue)"
          />
          <CardWithImage
            propBorder="none"
            propPadding="var(--padding-3xs) var(--padding-lg) var(--padding-4xs) var(--padding-5xl)"
            propBorder1="unset"
          />
          <CardWithImage
            propBorder="none"
            propPadding="var(--padding-3xs) var(--padding-lg) var(--padding-4xs) var(--padding-5xl)"
            propBorder1="unset"
          />
          <CardWithImage
            propBorder="none"
            propPadding="var(--padding-3xs) var(--padding-lg) var(--padding-4xs) var(--padding-5xl)"
            propBorder1="unset"
          />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.next}>{`NEXT `}</div>
        </div>
      </section>
    </div>
  );
};

export default QnAQuiz;
