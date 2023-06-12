import { useState, useEffect, useContext } from 'react';
import Square from './Square';
import { GridContext } from './App';

const Field = () => {

  const { grid, setGrid } = useContext(GridContext);


  useEffect( () => {
    // console.log(grid)
  }, [])

  return (
    <div className='Field'>
      <Square setBomb={false} position={[ 3, 6 ]}/>
    </div>
  )
}

export default Field;