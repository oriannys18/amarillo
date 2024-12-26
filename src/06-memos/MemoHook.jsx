import {useMemo, useState} from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small';

const heavyStuff = (interations = 100) => {
  for (let i =0; i< interations; i++) {
    console.log('Here we go');
  }
  return `${interations} iterations done`;
}

export const MemoHook = () => {

    const{counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true);
  const memorizedValue = useMemo( () => heavyStuff( counter), [counter]);

  return (
<>
<h1>counter: <Small value={ counter} /> </h1>
    <hr />

    <h4>{memorizedValue}</h4>

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
