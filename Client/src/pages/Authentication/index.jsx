import { useState } from "react";
import styles from "./styles.module.css";
import SignIn from "./SignIn/signin";
import Signup from "./SignUp/signup";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1>HandSpeak</h1>
        </div>

        <div className={styles.authWrapper}>
            <div className={styles.toggleButtons}>
                <button
                className={isLogin ? styles.active : ""}
                onClick={() => setIsLogin(true)}
                >
                Sign in
                </button>
                <button
                className={!isLogin ? styles.active : ""}
                onClick={() => setIsLogin(false)}
                >
                Sign up
                </button>
            </div>
            <div className={styles.formContainer}>
                {isLogin ? <SignIn /> : <Signup />}
            </div>

        </div>
        
        <div className={styles.circle}></div>
    </div>
  );
};

export default Auth;
