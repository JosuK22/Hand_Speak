import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import HandSpeakLogo from '../../assets/Logo/logo1.png'; // Path to your logo image
import styles from './SplashPage.module.css'; // Your CSS module

function SplashPage() {
    const navigate = useNavigate(); // Hook for navigation
    const [animationEnded, setAnimationEnded] = useState(false);

    useEffect(() => {
        // Redirect to the authentication page after 4 seconds (adjust for animation time)
        const timer = setTimeout(() => {
            navigate('/auth'); // Redirect to /auth after animation ends
        }, 5000); // Adjust time to match animation duration

        // Clear the timer if the component is unmounted
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
                {/* Text should appear below logo once animation is complete */}
                <div className={`${styles.textContainer} ${animationEnded ? styles.showText : ''}`}>
                    <h1 className={styles.appName}>HandSpeak</h1>
                    <p className={styles.text}>Hands to the futuristic world</p>
                </div>
            </div>
        </div>
    );
}

export default SplashPage;
