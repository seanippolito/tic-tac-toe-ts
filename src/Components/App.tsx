import React from 'react';
import '../Styles/App.css';
import {Game} from "./Game";

export const App: React.FC = () => {
    return (
      <div className="App">
          <Game />
      </div>
  )
}