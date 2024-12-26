import React, { useRef } from 'react'

export const FocusScreen = () => {

const inputRef = useRef();  

const onClick = () => {
    inputRef.current.select();
}


  return (
<> 

   <h1>Focous screnn</h1>
   <hr />

<input 

ref={inputRef}
type="text" 
placeholder=' ingrese su nombre'
className='form-control'
/>
<hr />

<button onClick={onClick} className='btn btn-primary'>set focus</button>
   </>

  )
}
