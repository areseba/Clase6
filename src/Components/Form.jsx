import React, { useState } from 'react'
import Registro from './Registro';
import '../Styles/Form.css'

const Form = () => {
  const [usuario, setUsuario] = useState({
    nombreCompleto: "",
    edad: "",
    dibujoFavorito: "",
  });

  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const handleNombreCompleto = (evento) =>
    setUsuario({ ...usuario, nombreCompleto: evento.target.value });
  const handleEdad = (evento) =>
    setUsuario({ ...usuario, edad: evento.target.value });
  const handleDibujoFavorito = (evento) =>
    setUsuario({ ...usuario, dibujoFavorito: evento.target.value });

  const handleEnvio = (evento) => {
    evento.preventDefault();
    if (
      usuario.nombreCompleto.trim().includes(" ") &&
      usuario.nombreCompleto.trim().length > 8 &&
      usuario.edad.trim().length > 0 &&
      usuario.dibujoFavorito.trim().length > 3
    ) {
      setMostrar(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleEnvio}>
        <label>Nombre Completo</label>
        <input
          type="text"
          value={usuario.nombreCompleto}
          onChange={handleNombreCompleto}
        />
        <label>Edad</label>
        <input type="number" value={usuario.edad} onChange={handleEdad} />
        <label>Dibujo Favorito</label>
        <input
          type="text"
          value={usuario.dibujoFavorito}
          onChange={handleDibujoFavorito}
        />
        <button type="submit">Regristrar</button>
      </form>
      {mostrar && <Registro usuario={usuario} />}
      {error && (
        <p style={{ color: "red" }}>
          Debe colocar la información correctamente
        </p>
      )}
    </>
  );
};

export default Form;
