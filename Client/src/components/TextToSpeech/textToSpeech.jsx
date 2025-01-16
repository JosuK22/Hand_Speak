import { useState, useEffect } from 'react';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  // Fetch the available voices when the component mounts
  useEffect(() => {
    const fetchVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      setVoices(allVoices);
      if (allVoices.length > 0) {
        setSelectedVoice(allVoices[0]); // Set default voice if available
      }
    };

    // Initially fetch voices
    fetchVoices();

    // Speech synthesis event listener to update voices on change
    window.speechSynthesis.onvoiceschanged = fetchVoices;
  }, []);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleVoiceChange = (event) => {
    const selectedVoice = voices.find(voice => voice.name === event.target.value);
    setSelectedVoice(selectedVoice);
  };

  const speakText = () => {
    if (text.trim() !== '') {
      const speech = new SpeechSynthesisUtterance(text);
      speech.voice = selectedVoice; // Set the selected voice
      speech.lang = selectedVoice.lang; // Set the language based on the selected voice
      speech.pitch = 1; // Set pitch
      speech.rate = 1; // Set rate
      window.speechSynthesis.speak(speech);
    } else {
      alert('Please enter some text to convert to speech');
    }
  };

  return (
    <div>
      <h1>Text-to-Speech Converter</h1>

      {/* Text input */}
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter text here..."
        rows="4"
        cols="50"
      ></textarea>

      <br />

      {/* Dropdown for selecting voice */}
      <label htmlFor="voice">Select Voice: </label>
      <select id="voice" onChange={handleVoiceChange} value={selectedVoice ? selectedVoice.name : ''}>
        {voices.map((voice, index) => (
          <option key={index} value={voice.name}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>

      <br />

      {/* Button to trigger speech */}
      <button onClick={speakText}>Convert to Speech</button>
    </div>
  );
};

export default TextToSpeech;
