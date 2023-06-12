import { useState, useEffect, useContext } from 'react';
import { GridContext } from './App';

const Square = ({ position }) => {

  const { grid, setGrid } = useContext(GridContext);
  const [clicked, setClicked] = useState(false);
  const [isBomb, setIsBomb] = useState(false);
  const [bombCount, setBombCount] = useState();
  const [xAxis, yAxis] = position;

  const revealMore = () => {
    const newGrid = grid;
          // // handle corners
          // if ([0, 9].includes(xAxis) && [0, 9].includes(yAxis)) {
          //   // handle top left
          //   if (xAxis === 0 && yAxis === 0) {
          //     for (let i = 0; i < 2; i++) {
          //       for (let j = 0; j < 2; j++) {
          //         if (newGrid[xAxis + (i)][yAxis + (j)].bomb === true) {
          //           count++;
          //         }
          //       }
          //     }
          //     // handle top right
          //   } else if (xAxis === 9 && yAxis === 0) {
          //     for (let i = 0; i < 2; i++) {
          //       for (let j = 0; j < 2; j++) {
          //         if (newGrid[xAxis + (i - 1)][yAxis + (j)].bomb === true) {
          //           count++;
          //         }
          //       }
          //     }
          //     // handle bottem left
          //   } else if (xAxis === 0 && yAxis === 9) {
          //     for (let i = 0; i < 2; i++) {
          //       for (let j = 0; j < 2; j++) {
          //         if (newGrid[xAxis + (i)][yAxis + (j - 1)].bomb === true) {
          //           count++;
          //         }
          //       }
          //     }
          //     // handle bottem right
          //   } else {
          //     for (let i = 0; i < 2; i++) {
          //       for (let j = 0; j < 2; j++) {
          //         if (newGrid[xAxis + (i - 1)][yAxis + (j - 1)].bomb === true) {
          //           count++;
          //         }
          //       }
          //     }
          //   }
          //   // handle edges
          // } else if ([0, 9].includes(xAxis) || [0, 9].includes(yAxis)) {
          //   // handle top
          //   if (xAxis === 0) {
          //     for (let i = 0; i < 2; i++) {
          //       for (let j = 0; j < 3; j++) {
          //         if (newGrid[xAxis + (i)][yAxis + (j - 1)].bomb === true) {
          //           count++;
          //         }
          //       }
          //     }
          //     // handle right
          //   } else if (xAxis === 9) {
          //     for (let i = 0; i < 2; i++) {
          //       for (let j = 0; j < 3; j++) {
          //         if (newGrid[xAxis + (i - 1)][yAxis + (j - 1)].bomb === true) {
          //           count++;
          //         }
          //       }
          //     }
          //     // handle bottem
          //   } else if (yAxis === 9) {
          //     for (let i = 0; i < 3; i++) {
          //       for (let j = 0; j < 2; j++) {
          //         if (newGrid[xAxis + (i - 1)][yAxis + (j - 1)].bomb === true) {
          //           count++;
          //         }
          //       }
          //     }
          //     // handle left
          //   } else {
          //     for (let i = 0; i < 3; i++) {
          //       for (let j = 0; j < 2; j++) {
          //         if (newGrid[xAxis + (i - 1)][yAxis + (j)].bomb === true) {
          //           count++;
          //         }
          //       }
          //     }
          //   }
          //   // handle middle
          // } else {
          //   for (let i = 0; i < 3; i++) {
          //     for (let j = 0; j < 3; j++) {
          //       if (newGrid[xAxis + (i - 1)][yAxis + (j - 1)].bomb === true) {
          //         count++;
          //       }
          //     }
          //   }

          // }
  }

  const unveil = () => {
    setClicked(true);

    if (isBomb) {
      alert(`You exploded.`)
    } else if (bombCount === 0) {
      revealMore();
    }
  }

  useEffect(() => {
    setIsBomb(grid[xAxis][yAxis].bomb);
  }, [])

  return (
    <div className='Square'>
      {clicked ? <button onClick={unveil}>???</button> : (isBomb ? <div>!!!</div> : <div>{grid[xAxis][yAxis].bombCount}</div>)}
    </div>
  )
}

export default Square;