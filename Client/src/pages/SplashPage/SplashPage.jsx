import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import HandSpeakLogo from '../../assets/Logo/logo1.png'; 
import styles from './SplashPage.module.css'; 

function SplashPage() {
    const navigate = useNavigate(); 
    const [animationEnded, setAnimationEnded] = useState(false);

    useEffect(() => {
        // Redirect to the authentication page after 4 seconds (adjust for animation time)
        const timer = setTimeout(() => {
            navigate('/auth'); 
        }, 4000); 

        
        return () => clearTimeout(timer);
    }, [navigate]);

    const handleAnimationEnd = () => {
        setAnimationEnded(true);
    };

    return (
        <div
            className={`${styles.container} ${animationEnded ? styles.fullScreen : ''}`}
            onAnimationEnd={handleAnimationEnd}
        >
            <div className={styles.circle}>
                <img src={HandSpeakLogo} alt="HandSpeak Logo" className={styles.logo1} />
                
                <div className={`${styles.textContainer} ${animationEnded ? styles.showText : ''}`}>
                    <h1 className={styles.appName}>HandSpeak</h1>
                    <p className={styles.text}>Hands to the futuristic world</p>
                </div>
            </div>
        </div>
    );
}

export default SplashPage;
