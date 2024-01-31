import styles from "./LoginSignup.module.css";

const LoginSignup = () => {
  return (
    <footer className={styles.loginSignup}>
      <div className={styles.loginSignupChild} />
      <main className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.quizzieWrapper}>
            <h1 className={styles.quizzie}>QUIZZIE</h1>
          </div>
          <div className={styles.signUpParent}>
            <div className={styles.signUp}>Sign Up</div>
            <button className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.logIn}>Log In</div>
            </button>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.emailPasswordParent}>
            <div className={styles.emailPassword}>
              <input className={styles.email} placeholder="Email" type="text" />
              <div className={styles.passwordRectangle} />
            </div>
            <div className={styles.emailPassword1}>
              <input
                className={styles.password}
                placeholder="Password"
                type="text"
              />
              <div className={styles.emailPasswordChild} />
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <button className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.logIn1}>Log In</div>
            </button>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default LoginSignup;
