import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {

    const{counter, increment } = useCounter(10);
    const [show, setShow] = React.useState(true);


  return (
<>
    <h1>counter: <Small value={ counter} /> </h1>
    <hr />

    <button className='btn btn-primary'
    onClick={ () =>increment()}
    >+1</button>

    <button
    className='btn btn-outline-primary'
    onClick={() => setShow(!show)}

    >show/hide {JSON.stringify(show)}</button>

</>
  )
}
