import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Initialize the banner visibility from sessionStorage or default to true
  const [isBannerVisible, setIsBannerVisible] = useState(() => {
    return sessionStorage.getItem('topBannerVisible') !== 'false'; 
  });

  const handleCommunicationClick = () => {
    navigate('/modes/communication'); 
  };

  const handleAutomationClick = () => {
    navigate('/modes/automation');
  };

  // Clear the sessionStorage on logout to reset banner visibility
  const handleLogoutClick = () => {
    sessionStorage.removeItem('topBannerVisible');
    navigate('/auth'); 
  };
  

  // Function to hide the topBanner
  const handleIconClick = () => {
    setIsBannerVisible(false); 
  };

  // Function to show the topBanner again
  const handleNavRightClick = () => {
    setIsBannerVisible(true); 
  };

  // Store the state of topBanner in sessionStorage when it changes
  useEffect(() => {
    sessionStorage.setItem('topBannerVisible', isBannerVisible); 
  }, [isBannerVisible]);

  return (
    <div className={styles.wrapper}>
      {/* -----Navbar----- */}

      {/* -----Device Not Connected----- */}
      {isBannerVisible && ( 
        <div className={styles.topBanner}>
          <button className={styles.iconWrap} onClick={handleIconClick}>
            <i className="fas fa-power-off"></i>
          </button>
          <h3 className={styles.message}>Device not connected</h3>
        </div>
      )}

      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <i className="fas fa-sign-out-alt" onClick={handleLogoutClick}></i> 
        </div>

        <div className={styles.navRight} onClick={handleNavRightClick}>
          <i className="fas fa-power-off"></i> 
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
