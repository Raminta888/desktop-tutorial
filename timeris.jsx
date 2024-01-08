import { useState, useEffect} from "react";
import "./buttons.scss";
import './App.scss';


export default function App() {

  const [timer, setTimer] = useState('');
  const [timeInterval, setTimeInterval] = useState(null);
  const [singleText, setSingleText] = useState('');

  const audio = new Audio("https://dl.dropboxusercontent.com/s/1cdwpm3gca9mlo0/kick.mp3");

  
  const startTimer = () => {
   
    setTimeInterval(setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000));
  }

  const pauseTimer = () => {
    clearInterval(timeInterval);
  }

  const resetTimer = () => {
    setTimer(0);
  }

  const handleSingleText = e => {
        setSingleText(e.target.value);
    }

    useEffect(() => {
           if (timer === 0) { 
           return pauseTimer();
          }})


  return (
    <div className="App">
      <input type="number" placeholder="Time" value={singleText} onChange={handleSingleText}/>
      <h1>Timer: {timer}</h1>
      <div className="buttons">
        <button className="yellow" onClick={_ => {setTimer(singleText); startTimer()}}>Start</button>
        <button className="green" onClick={pauseTimer}>Pause</button>
        <button className="red" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}