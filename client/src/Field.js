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
        return (<Square setBomb={grid[xIndex][yIndex].bomb} position={[xIndex, yIndex]}/>)
      }))}
    </div>
  )
}

export default Field;