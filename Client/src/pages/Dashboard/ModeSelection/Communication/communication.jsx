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
    utterance.pitch = .05; 
    utterance.rate = .5; 
    utterance.volume = 1; 

    // Speak the text
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Your browser does not support text-to-speech functionality.");
  }
};

// Simulate API call
useEffect(() => {
  // Mock API response
  setTimeout(() => {
    const receivedText = "I am Hungry"; 
    setText(receivedText);
    speakText(receivedText); 
  }, 1000); 
}, []);


  return (
    <div className={styles.wrapper}>

      <h1>COMMUNICATION</h1>
      <div className={styles.card}>
        <div className={styles.textBar}>
          <h1>{text}</h1>
        </div>
        <div className={styles.voice}>
          <i className="fas fa-volume-up"></i>
        </div>
      </div>
    </div>
  );
};

export default Communication;
