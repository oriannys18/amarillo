import React, { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    //const { username, email, password } = formState;

    useEffect(() => {
        console.log('Form initialized');
    }, []); // Este efecto se ejecuta solo una vez, cuando el componente se monta.

    useEffect(() => {
        console.log('Form state changed');
    }, [formState]); // Este efecto se ejecuta cada vez que `formState` cambia.

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Usuario"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="text"
                className="form-control mt-4"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-4"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <hr />

            <button onClick={onResetForm} className='btn btn-primary'>Borrar</button>
        </>
    );
};
