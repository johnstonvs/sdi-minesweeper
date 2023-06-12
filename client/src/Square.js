import { useState, useEffect, useContext } from 'react';
import { GridContext } from './App';

const Square = ({ setBomb, position }) => {

  const { grid, seGrid } = useContext(GridContext);
  const [clicked, setClicked] = useState(false);
  const [isBomb, setIsBomb] = useState(false);
  const [bombCount, setBombCount] = useState();

  const findBombCount = () => {
    const [xAxis, yAxis] = position;
    let count = 0;
    try {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (grid[xAxis + (i - 1)][yAxis + (j - 1)] === true) {
            count++;
          }
        }
      }
    }
    catch {
      // findBombCount();
    }

    return count;
  }

  useEffect(() => {
    setIsBomb(setBomb);
    setBombCount(findBombCount())

  }, [])

  return (
    <div className='Square'>
      {clicked ? <button onClick={setClicked(true)} /> : isBomb ? <div>!!!</div> : <div>{bombCount}</div>}
    </div>
  )
}

export default Square;