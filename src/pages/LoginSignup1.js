import styles from "./LoginSignup1.module.css";

const LoginSignup1 = () => {
  return (
    <div className={styles.loginSignup}>
      <div className={styles.loginSignupChild} />
      <main className={styles.frameLoginSignup}>
        <div className={styles.frameLoginSignupChild} />
        <div className={styles.frameQuizzieParent}>
          <div className={styles.frameQuizzie}>
            <div className={styles.quizzie}>QUIZZIE</div>
          </div>
          <div className={styles.frameContainerSignUp}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.signUp}>Sign Up</div>
            </div>
            <div className={styles.logIn}>Log In</div>
          </div>
        </div>
        <form className={styles.frameContainerEmail}>
          <div className={styles.rectangleEmail}>
            <div className={styles.containerNameEmailPassword}>
              <input className={styles.name} placeholder="Name" type="text" />
              <div className={styles.rectangleConfirmPassword} />
            </div>
            <div className={styles.containerNameEmailPassword1}>
              <input className={styles.email} placeholder="Email" type="text" />
              <div className={styles.containerNameEmailPasswordChild} />
            </div>
            <div className={styles.containerNameEmailPassword2}>
              <input
                className={styles.password}
                placeholder="Password"
                type="text"
              />
              <div className={styles.containerNameEmailPasswordItem} />
            </div>
            <div className={styles.containerNameEmailPassword3}>
              <input
                className={styles.confirmPassword}
                placeholder="Confirm Password"
                type="text"
              />
              <div className={styles.containerNameEmailPasswordInner} />
            </div>
          </div>
          <div className={styles.frameSignUpButton}>
            <button className={styles.textSignUpButton}>
              <div className={styles.textSignUpButtonChild} />
              <div className={styles.signUp1}>Sign-Up</div>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default LoginSignup1;
