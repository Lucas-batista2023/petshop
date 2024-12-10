import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditarPet = () => {
  const { id } = useParams();  // Pega o ID do pet na URL
  const navigate = useNavigate();

  const [pet, setPet] = useState({
    nome: '',
    especie: '',
    raca: '',
    idade: '',
    id_cliente: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    // Fazendo a requisição para buscar o pet a ser editado
    axios.get(`http://localhost:3006/pets/${id}`)
      .then(response => {
        setPet(response.data);
      })
      .catch(err => {
        setError('Erro ao carregar pet');
        console.error(err);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPet(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3006/pets/${id}`, pet)
      .then(response => {
        alert('Pet atualizado com sucesso');
        navigate('/pets');  // Redireciona para a lista de pets
      })
      .catch(err => {
        setError('Erro ao atualizar pet');
        console.error(err);
      });
  };

  return (
    <div className="container">
      <h2>Editar Pet</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={pet.nome}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="especie" className="form-label">Espécie</label>
          <input
            type="text"
            className="form-control"
            id="especie"
            name="especie"
            value={pet.especie}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="raca" className="form-label">Raça</label>
          <input
            type="text"
            className="form-control"
            id="raca"
            name="raca"
            value={pet.raca}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="idade" className="form-label">Idade</label>
          <input
            type="number"
            className="form-control"
            id="idade"
            name="idade"
            value={pet.idade}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="id_cliente" className="form-label">ID Cliente</label>
          <input
            type="number"
            className="form-control"
            id="id_cliente"
            name="id_cliente"
            value={pet.id_cliente}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Atualizar</button>
      </form>
    </div>
  );
};

export default EditarPet;
