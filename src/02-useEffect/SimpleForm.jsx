import React from 'react'
import { useState, useEffect } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({

        usename: 'hola',
        email: 'ori@gmail.com'

    });

const {username, email} = formState;

const onInputChange = ({ target}) => { 
    const {name, value} = target;
    setFormState({
        ...formState,
        [name]: value
    });
};

useEffect(() => {

    console.log('hey');
}, []);


useEffect(() =>{

    console.log('change');

}, [formState] );

useEffect(() =>{
    console.log(email);
}, [email] );






return ( 

    
    <>

    <h1> simple form</h1>
    <hr />

    <input type="text"
    className='form-control'
    placeholder='busqueda'
    name='username'
    value={username}
    onChange={onInputChange}
    />

    <input type="text"
    className='form-control mt-4' 
    placeholder='Email'
    name='email'
    value={email}
    onChange={onInputChange}
    
    />

    
   { username === email && <Message/>}
    
     
        
    </>
    
)
  
}
