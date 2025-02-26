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

  const handleLogoutClick = () => {
    navigate('/auth');
  }

  return (
    <div className={styles.wrapper}>
       {/* -----Navbar----- */}

            <nav className={styles.navbar}>
              <div className={styles.navLeft}>
                <i className="fas fa-sign-out-alt" onClick={handleLogoutClick}></i> {/* Logout icon */}
              </div>

              <div className={styles.navRight}>
                {/* History / Device On-off */}
              </div>
              
            </nav>
      
      <h1>MODE</h1>

      <div className={styles.switchContainer}>

        <button className={styles.button} onClick={handleCommunicationClick}>
          <div className={styles.wrap}>
            <p>COMMUNICATION</p>
          </div>
        </button>

        <button className={styles.button} onClick={handleAutomationClick}>
          <div className={styles.wrap}>
            <p>AUTOMATION</p>
          </div>
        </button>

      </div>
      
    </div>
  );
};

export default Dashboard;


