import { useNavigate } from 'react-router-dom';  
import styles from "./signin.module.css";

const SignIn = () => {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();  
    navigate('/dashboard');  
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
