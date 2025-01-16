import styles from "./signup.module.css";

const Signup = () => {
  return (
    <form className={styles.form}>
      <div className={styles.inputGroup}>
        <input type="email" placeholder="* Email" />
      </div>
      <div className={styles.inputGroup}>
        <input type="password" placeholder="* Password" />
      </div>
      <div className={styles.inputGroup}>
        <input type="password" placeholder="* Confirm your password" />
      </div>
      <button type="submit" className={styles.button}>
        Sign up
      </button>
    </form>
  );
};

export default Signup;
