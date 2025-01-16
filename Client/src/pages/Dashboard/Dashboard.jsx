import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCommunicationClick = () => {
    navigate('/modes/communication'); // Navigate to the Communication route
  };

  const handleAutomationClick = () => {
    navigate('/modes/automation'); // Navigate to the Automation route
  };

  return (
    <div className={styles.wrapper}>
      <h1>MODE</h1>

      <button className={styles.switch} onClick={handleCommunicationClick}>
        <div className={styles.button}>
          <p>COMMUNICATION</p>
        </div>
      </button>

      <button className={styles.switch} onClick={handleAutomationClick}>
        <div className={styles.button}>
          <p>AUTOMATION</p>
        </div>
      </button>
    </div>
  );
};

export default Dashboard;


