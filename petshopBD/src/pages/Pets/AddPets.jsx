import React, { useState } from 'react';
import axios from 'axios';

const AddPets = () => {
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('');
  const [raca, setRaca] = useState('');
  const [idade, setIdade] = useState('');
  const [idCliente, setIdCliente] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPet = {
      nome,
      especie,
      raca: raca || null,
      idade: idade ? parseInt(idade, 10) : null,
      id_cliente: idCliente ? parseInt(idCliente, 10) : null,
    };

    try {
      await axios.post('http://localhost:3006/pets', newPet);
      setMessage('Pet adicionado com sucesso!');
      // Limpar o formulário
      setNome('');
      setEspecie('');
      setRaca('');
      setIdade('');
      setIdCliente('');
    } catch (error) {
      console.error(error);
      setMessage('Erro ao adicionar o pet.');
    }
  };

  return (
    <div>
      <h2>Adicionar Novo Pet</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Espécie:</label>
          <input
            type="text"
            value={especie}
            onChange={(e) => setEspecie(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Raça:</label>
          <input
            type="text"
            value={raca}
            onChange={(e) => setRaca(e.target.value)}
          />
        </div>
        <div>
          <label>Idade:</label>
          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </div>
        <div>
          <label>ID do Cliente:</label>
          <input
            type="number"
            value={idCliente}
            onChange={(e) => setIdCliente(e.target.value)}
          />
        </div>
        <button type="submit">Adicionar Pet</button>
      </form>
    </div>
  );
};

export default AddPets;
