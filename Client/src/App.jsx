import AppRoutes from './routes'; // Import AppRoutes
import './App.css';
//import TextToSpeech from './components/TextToSpeech/textToSpeech';
//import ToggleButton from './components/TextToSpeech/ToggleButtons/ToggleButtons';

function App() {
  return (
    <div className='container'>

      <AppRoutes /> 
      {/* <div className='contents'>
      <ToggleButton/>
      
      </div> */}
      

    </div>
  );
}

export default App;
