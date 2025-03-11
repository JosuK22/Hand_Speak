import { useState, useEffect } from 'react';
import styles from './Automation.module.css';
import ToggleButton from '../../../../components/ToggleButtons/ToggleButtons';
import Bulb from '../../../../assets/Images/image 4.png';
import Socket from '../../../../assets/Images/sockets.png';

// Temporary BLYNK_API 
const BLYNK_API_URL = 'https://blynk.cloud/api/v1/your_token/update/V1'; 

const Automation = () => {
  const [checkedFirst, setCheckedFirst] = useState(false);  
  const [checkedSecond, setCheckedSecond] = useState(false);  

  // Fetch the initial states and set up polling to listen to the Blynk API
  useEffect(() => {
    const fetchState = async () => {
      try {
        const response = await fetch(BLYNK_API_URL);
        const data = await response.json();

        // Data returned: { "V1": 1, "V2": 0 }
        setCheckedFirst(data.V1 === 1); 
        setCheckedSecond(data.V2 === 1); 
      } catch (error) {
        console.error("Error fetching data from Blynk API:", error);
      }
    };

    // Initial fetch when the component mounts
    fetchState();

    // Set up polling to fetch every 5 seconds (5000ms)
    const interval = setInterval(() => {
      fetchState();
    }, 2000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); 

  // Function to handle when the first toggle changes (Bulb)
  const handleFirstToggleChange = async () => {
    const newCheckedFirst = !checkedFirst;
    setCheckedFirst(newCheckedFirst);

    // Send the new state to the Blynk API (update virtual pin V1 for Bulb)
    try {
      await fetch(`${BLYNK_API_URL}/V1`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({ value: newCheckedFirst ? 1 : 0 }),
      });
    } catch (error) { 
      console.error("Error updating Blynk API for Bulb:", error);
    }
  };

  // Function to handle when the second toggle changes (Socket)
  const handleSecondToggleChange = async () => {
    const newCheckedSecond = !checkedSecond;
    setCheckedSecond(newCheckedSecond);

    // Send the new state to the Blynk API (update virtual pin V2 for Socket)
    try {
      await fetch(`${BLYNK_API_URL}/V2`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: newCheckedSecond ? 1 : 0 }),
      });
    } catch (error) {
      console.error("Error updating Blynk API for Socket:", error);
    }
  };

  return (
    <div className={styles.wrapper}> 
      <h1>AUTOMATION</h1>

      {/* Bulb Control */}
      <div className={styles.card}>
        <div className={styles.left}><img src={Bulb} alt="Bulb" /><label>Bulb</label></div>
        <div className={styles.right}>
          <ToggleButton 
            id="toggle-1"
            variant="second" 
            checked={checkedFirst} 
            onChange={handleFirstToggleChange} 
          />
        </div>
      </div>

      {/* Socket Control */}
      <div className={styles.card}>
        <div className={styles.left}><img src={Socket} alt="Socket" /><label>Socket</label></div>
        <div className={styles.right}>
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
