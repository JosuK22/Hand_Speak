import { useState, useEffect } from "react";
import styles from "./Communication.module.css";

const Communication = () => {
  const [text, setText] = useState("Loading...");

  // Function to convert text to speech
  const speakText = (textToSpeak) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);

      // Optional: Set the voice and other properties
      utterance.lang = "en-US"; 
      utterance.pitch = 0.05; 
      utterance.rate = 0.5; 
      utterance.volume = 1; 

      // Speak the text
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Your browser does not support text-to-speech functionality.");
    }
  };

  // Polling to simulate receiving new messages from the API
  useEffect(() => {
    const fetchTextPeriodically = () => {
      // Simulate receiving new text from an API
      const newReceivedText = "I am Hungry"; // You can change this to simulate different messages

      setText(newReceivedText); // Update state with new text
      speakText(newReceivedText); // Speak the updated text
    };

    // Initial text fetch (simulating API call)
    fetchTextPeriodically();

    // Set up polling every 5 seconds (5000ms)
    const interval = setInterval(() => {
      fetchTextPeriodically();
    }, 2000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty array means the effect runs once on mount, then starts the polling

  return (
    <div className={styles.wrapper}>
      <h1>COMMUNICATION</h1>
      <div className={styles.card}>
        <div className={styles.textBar}>
          <h1>{text}</h1> {/* Display the current text */}
        </div>
        <div className={styles.voice}>
          <i className="fas fa-volume-up"></i> {/* Speaker icon */}
        </div>
      </div>
    </div>
  );
};

export default Communication;
