import React, { useState } from "react";
import { CountNum, InputBox, TextBox } from "./component";
import {TotalDiv} from "./component"
import { MainScreen } from "./screen";



function App() {
  const [count, setcount] = useState(0);
  
  return (
    <div className="App">
      <MainScreen />
    </div>
  );
}

export default App;
