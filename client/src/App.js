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
        yAxis[j] = {bomb: false, bombCount: 0};
      }
      newGrid.push(yAxis);
    }

    const generateBombs = (num) => {
      // debugger;
      let x = Math.floor(Math.random() * size);
      let y = Math.floor(Math.random() * size);
      if (num <= 0) {
        return;
      } else {
        if (newGrid[x][y].bomb === true) {
          generateBombs(num);
        } else {
          newGrid[x][y].bomb = true;
          generateBombs(num - 1);
        }
      }
    }

    const findBombCount = (xAxis, yAxis) => {
      let count = 0;
      //debugger;
      // handle corners
      if ([0, 9].includes(xAxis) && [0, 9].includes(yAxis)) {
        // handle top left
        if (xAxis === 0 && yAxis === 0) {
          for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
              if (newGrid[xAxis + (i)][yAxis + (j)].bomb === true) {
                count++;
              }
            }
          }
          // handle top right
        } else if (xAxis === 9 && yAxis === 0) {
          for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
              if (newGrid[xAxis + (i - 1)][yAxis + (j)].bomb === true) {
                count++;
              }
            }
          }
          // handle bottem left
        } else if (xAxis === 0 && yAxis === 9) {
          for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
              if (newGrid[xAxis + (i)][yAxis + (j - 1)].bomb === true) {
                count++;
              }
            }
          }
          // handle bottem right
        } else {
          for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
              if (newGrid[xAxis + (i - 1)][yAxis + (j - 1)].bomb === true) {
                count++;
              }
            }
          }
        }
        // handle edges
      } else if ([0, 9].includes(xAxis) || [0, 9].includes(yAxis)) {
        // handle top
        if (xAxis === 0) {
          for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 3; j++) {
              if (newGrid[xAxis + (i)][yAxis + (j - 1)].bomb === true) {
                count++;
              }
            }
          }
          // handle right
        } else if (xAxis === 9) {
          for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 3; j++) {
              if (newGrid[xAxis + (i - 1)][yAxis + (j - 1)].bomb === true) {
                count++;
              }
            }
          }
          // handle bottem
        } else if (yAxis === 9) {
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 2; j++) {
              if (newGrid[xAxis + (i - 1)][yAxis + (j - 1)].bomb === true) {
                count++;
              }
            }
          }
          // handle left
        } else {
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 2; j++) {
              if (newGrid[xAxis + (i - 1)][yAxis + (j)].bomb === true) {
                count++;
              }
            }
          }
        }
        // handle middle
      } else {
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (newGrid[xAxis + (i - 1)][yAxis + (j - 1)].bomb === true) {
              count++;
            }
          }
        }

      }

      return count;
    }

    generateBombs(bombs);

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        newGrid[i][j].bombCount = findBombCount(i, j);
      }
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
