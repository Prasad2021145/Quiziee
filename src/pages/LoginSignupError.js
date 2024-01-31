import styles from "./LoginSignupError.module.css";

const LoginSignupError = () => {
  return (
    <div className={styles.loginSignupError}>
      <div className={styles.loginSignupErrorChild} />
      <main className={styles.frameLoginSignup}>
        <div className={styles.frameLoginSignupChild} />
        <div className={styles.frameParent}>
          <div className={styles.quizzieWrapper}>
            <h1 className={styles.quizzie}>QUIZZIE</h1>
          </div>
          <div className={styles.frameSignUp}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.signUp}>Sign Up</div>
            </div>
            <div className={styles.logIn}>Log In</div>
          </div>
        </div>
        <form className={styles.errorFrames}>
          <div className={styles.nameFieldParent}>
            <div className={styles.nameField}>
              <div className={styles.emailField}>
                <div className={styles.name}>Name</div>
              </div>
              <div className={styles.confirmField}>
                <div className={styles.emailWrapper}>
                  <div className={styles.email}>Email</div>
                </div>
                <div className={styles.invalidEmailError}>
                  <div className={styles.weakPasswordError}>
                    <div className={styles.password}>Password</div>
                  </div>
                  <div className={styles.confirmPassword}>Confirm Password</div>
                </div>
              </div>
            </div>
            <div className={styles.invalidInputFrame}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <input
                  className={styles.invalidName}
                  placeholder="Invalid name"
                  type="text"
                />
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameInner} />
                <input
                  className={styles.invalidEmail}
                  placeholder="Invalid Email"
                  type="text"
                />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.rectangleDiv} />
                <input
                  className={styles.weakPassword}
                  placeholder="Weak password"
                  type="text"
                />
              </div>
              <div className={styles.rectangleParent1}>
                <div className={styles.frameChild1} />
                <input
                  className={styles.passwordDoesntMatch}
                  placeholder="password doesn’t match"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className={styles.signUpPromptWrapper}>
            <button className={styles.signUpPrompt}>
              <div className={styles.signUpPromptChild} />
              <div className={styles.signUp1}>Sign-Up</div>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default LoginSignupError;
