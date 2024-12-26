import React, { useRef } from 'react'

export const PokemonCard = ({ id, name, sprites = [] }) => {



    return (
        <section style={{ height: 200 }}>
            <h2 className='text-capitalize' >#{id} - {name} </h2>



            <div style={{
                display: 'flex',        /* Flexbox para alinear las imágenes horizontalmente */
                justifyContent: 'center', /* Centra las imágenes horizontalmente */
                gap: '15px',            /* Espaciado entre las imágenes */
                marginTop: '20px'       /* Margen superior para separar */
            }}>
                {
                    sprites.map(sprite => (
                        <img key={sprite} src={sprite} alt={name} style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s',
                        }} />

                    ))
                }
            </div>
        </section>
    )
}
