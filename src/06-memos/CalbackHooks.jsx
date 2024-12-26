import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';
import { use } from 'react';

export const CalbackHooks = () => {

    const [counter, setCounter] = useState(10);

    const incrementFathers = useCallback(
        (value) => {
        setCounter( (c) => c + value );
    },
    [],
);
   
  return (
    <>
   <h1>hola mundo: {counter}</h1>
   <hr />

   <ShowIncrement increment={incrementFathers}/>
  

   </>
  )
}
