import { useState } from 'react';
import styles from './Automation.module.css';
import ToggleButton from '../../../../components/TextToSpeech/ToggleButtons/ToggleButtons';
import Bulb from '../../../../assets/Images/image 4.png';
import Socket from '../../../../assets/Images/sockets.png';

const Automation = () => {
  
  const [checkedFirst, setCheckedFirst] = useState(false);
  const [checkedSecond, setCheckedSecond] = useState(false);

  
  const handleFirstToggleChange = () => {
    setCheckedFirst(!checkedFirst); 
  };

  const handleSecondToggleChange = () => {
    setCheckedSecond(!checkedSecond); 
  };

  return (
    <div className={styles.wrapper}> 
      <h1>AUTOMATION</h1>

      <div className={styles.card}>
        <div className={styles.left}><img src={Bulb} alt="Bulb" /><label>Bulb</label></div>
        <div className={styles.right}>
            
          {/* First toggle button with variant and state */}
          <ToggleButton 
          id="toggle-1"
            variant="second" 
            checked={checkedFirst} 
            onChange={handleFirstToggleChange} 
          />
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.left}><img src={Socket} alt="Socket"/><label>Socket</label></div>
        <div className={styles.right}>
          {/* Second toggle button with variant and state */}
          <ToggleButton 
            id="toggle-2"
            variant="second" 
            checked={checkedSecond} 
            onChange={handleSecondToggleChange} 
          />
        </div>
      </div>
    </div>
  );
};

export default Automation;
