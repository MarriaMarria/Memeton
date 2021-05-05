import React, { useState } from 'react'
import MyMessage from "./components/MyMessage";
import Navbar from "./components/FirstComponent";

import './App.css';

function App() {

  const [counter, setCounter] = useState<number>(0);
  const [text, setText] = useState<string | null>("")
  const displayMessage = (message: string) => {
    console.log(message)
  }

  return (
    <div className="App">
      
      <Navbar />

      <h1>Typescript to JavaScript</h1>

      {counter}

      <button onClick={() => {
        setCounter(counter + 1)
      }}
      >
        Increase 1
      </button>

      <br></br>
      <br></br>

      {text}

      <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
      }}
      />

      <button onClick={() => {displayMessage("Hello nice people")}}>Show mymessage</button>

      <MyMessage message="Wassup, who ever codes in php???" age={19}/>
      
      

    </div>
  );
}



export default App;
