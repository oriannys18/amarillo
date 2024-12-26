import React from 'react'
import { useFetch } from '../hooks/useFetch'
import{ useCounter } from '../hooks/useCounter'

import '../index.css'
import { PokemonCard } from '../03-useExample/pokemonCard';
import { LoadingMessage } from '../03-useExample/LoadingMessage';

export const Layout = () => {

const { counter, decrement, increment} = useCounter(1);
 const{data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);
 const {name, id, sprites} = data || {}

  return (

    <>

    <h3>informacion de pokemon</h3>

    <hr />

    {isLoading ? ( 
       <LoadingMessage/> 
      ) :(
        data && ( 
          <> 
          <PokemonCard  className='pokemon-image' id={id} name={name} sprites= {[data.sprites.front_default, data.sprites.front_shiny, data.sprites.back_default, data.sprites.back_shiny]}/>
    </>
        )
      )}

    
   

    <button className='floating-buttons' onClick={ () => counter > 1 ? decrement() : null }>anterior</button>

    <button className='floating-buttons-2' onClick={ () => increment() }>siguiente</button>
    
    </>
  )
}
