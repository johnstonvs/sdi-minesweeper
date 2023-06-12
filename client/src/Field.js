import { useState, useEffect, useContext } from 'react';
import Square from './Square';
import { GridContext } from './App';
import './Field.css';

const Field = () => {

  const { grid, setGrid } = useContext(GridContext);


  useEffect( () => {
    // console.log(grid)
  }, [])

  return (
    <div className='Field'>
      {grid.map((x, xIndex)=> x.map((y, yIndex) => {
        return (<Square className={`div0`} setBomb={grid[xIndex][yIndex]} position={[xIndex, yIndex]}></Square>)
      }))}
    </div>
  )
}

export default Field;