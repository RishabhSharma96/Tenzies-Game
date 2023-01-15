import React from "react"
import ContentArea from "./components/ContentArea"
import './css/styles.css'
import { GameContextProvider } from "./components/Context";

function App() {
  return (
    <GameContextProvider>
      <div className="App">
        <ContentArea />
      </div>
    </GameContextProvider>
  );
}

export default App;
