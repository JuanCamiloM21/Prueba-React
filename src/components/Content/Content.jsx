import React, { useState } from 'react';
import { useDataValue } from '../../contex';
import './Content.scss';

const Content = () => {
  const { data, itemId } = useDataValue();

  const initialStateValues = {
    name: '',
    email: '',
    phone: '',
    age: '',
  };

  const [dataInput, setDataInput] = useState();

  const handleInput = (e) => {
    setDataInput({
      ...dataInput,
      [e.target.name]: e.target.value,
    });
  };

  const send = (e) => {
    e.preventDefault();
    console.log(
      `Datos enviados: Nombre: ${dataInput.name} EMail: ${dataInput.email} Telefono: ${dataInput.phone} Edad: ${dataInput.age}`
    );
    setDataInput(initialStateValues);
  };

  return (
    <div>
      <h1>BIENVENIDO</h1>
      <p>
        Hola, bienvenido, sabemos que quieres viajar en un{' '}
        {data !== undefined && data[itemId - 1].name}, por favor diligencia el
        siguiente formulario:
      </p>
      <form onSubmit={send}>
        <input
          type='text'
          placeholder='Nombre'
          name='name'
          required
          value={dataInput?.name}
          onChange={handleInput}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          required
          value={dataInput?.email}
          onChange={handleInput}
        />
        <input
          type='text'
          placeholder='Celular'
          name='phone'
          required
          value={dataInput?.phone}
          onChange={handleInput}
        />
        <input
          type='number'
          min='18'
          max='100'
          placeholder='Edad'
          name='age'
          required
          value={dataInput?.age}
          onChange={handleInput}
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};

export default Content;
