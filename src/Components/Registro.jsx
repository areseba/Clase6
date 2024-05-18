import React from 'react'

const Registro = ({usuario}) => {
    const {nombreCompleto, edad, dibujoFavorito} = usuario
  return (
    <>
      <h3>Nombre Completo: {nombreCompleto}</h3>
      <h3>Edad: {edad}</h3>
      <h3>Dibujo Favorito: {dibujoFavorito}</h3>
    </>
  );
}

export default Registro