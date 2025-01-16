import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import styles from "./signin.module.css";

const SignIn = () => {
  const navigate = useNavigate();  // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload on form submit
    navigate('/dashboard');  // Redirect to the /navigate route
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input type="email" placeholder="* Email" />
      </div>
      <div className={styles.inputGroup}>
        <input type="password" placeholder="* Password" />
      </div>
      <div className={styles.forgotPassword}>
        <a href="#">Forgot Password?</a>
      </div>
      <button type="submit" className={styles.button}>
        Sign in
      </button>
    </form>
  );
};

export default SignIn;
