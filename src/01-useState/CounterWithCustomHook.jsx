import React from 'react'
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

  const {counter, increment, decrement, reset} = useCounter();

    return (
      <>
        <h1>hola mundo {counter} </h1>
        <hr />
      
          <button onClick={() => increment (2)}  className='button' >+</button>
          <button className='button' onClick={ reset }>reset</button>
          <button className='button' onClick={ decrement }>-</button>
        
      </>
    )
  }
