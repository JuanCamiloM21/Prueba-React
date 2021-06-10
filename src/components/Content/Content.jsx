import React, { useState } from 'react';
import { useDataValue } from '../../contex';
import Modal from '../Modal/Modal';
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

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const send = (e) => {
    e.preventDefault();
    console.log(
      `Datos enviados: Nombre: ${dataInput.name} Email: ${dataInput.email} Telefono: ${dataInput.phone} Edad: ${dataInput.age}`
    );
    setIsOpen(true);
    setDataInput(initialStateValues);
  };

  return (
    <div className='content'>
      <h1 className='content-title'>BIENVENIDO</h1>
      <p className='content-text'>
        Hola, bienvenido, sabemos que quieres viajar con{' '}
        <strong>{data !== undefined && data[itemId - 1].name}</strong>, por
        favor diligencia el siguiente formulario:
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
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          Tu información fue enviada con éxito, estaremos en contacto contigo
        </Modal>
      </form>
    </div>
  );
};

export default Content;
