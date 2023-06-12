import './App.css';
import { useState, useEffect, createContext } from 'react';
import Field from './Field';

export const GridContext = createContext();

function App() {

  const generateGrid = (size, bombs) => {
    let newGrid = [];

    for (let i = 0; i < size; i++) {
      let yAxis = [];
      for (let j = 0; j < size; j++) {
        yAxis[j] = false;
      }
      newGrid.push(yAxis);
    }

    for (let i = 0; i < bombs; i++) {
      let x = Math.floor(Math.random() * size);
      let y = Math.floor(Math.random() * size);

      newGrid[x][y] = true;
    }

    return newGrid;
  }

  const [grid, setGrid] = useState(generateGrid(10, 10));

  return (
    <GridContext.Provider value={{ grid, setGrid }}>
      <div className="App">
        <Field />
      </div>
    </GridContext.Provider>
  );
}

export default App;
