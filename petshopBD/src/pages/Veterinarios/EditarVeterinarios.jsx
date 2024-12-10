import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditarVeterinario = () => {
  const { id } = useParams();  // Pega o ID do veterinário na URL
  const navigate = useNavigate();

  const [veterinario, setVeterinario] = useState({
    nome: '',
    especialidade: '',
    telefone: '',
    email: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    // Fazendo a requisição para buscar o veterinário a ser editado
    axios.get(`http://localhost:3006/veterinarios/${id}`)
      .then(response => {
        setVeterinario(response.data);
      })
      .catch(err => {
        setError('Erro ao carregar veterinário');
        console.error(err);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVeterinario(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3006/veterinarios/${id}`, veterinario)
      .then(response => {
        alert('Veterinário atualizado com sucesso');
        navigate('/veterinarios');  // Redireciona para a lista de veterinários
      })
      .catch(err => {
        setError('Erro ao atualizar veterinário');
        console.error(err);
      });
  };

  return (
    <div className="container">
      <h2>Editar Veterinário</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={veterinario.nome}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="especialidade" className="form-label">Especialidade</label>
          <input
            type="text"
            className="form-control"
            id="especialidade"
            name="especialidade"
            value={veterinario.especialidade}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefone" className="form-label">Telefone</label>
          <input
            type="text"
            className="form-control"
            id="telefone"
            name="telefone"
            value={veterinario.telefone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={veterinario.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Atualizar</button>
      </form>
    </div>
  );
};

export default EditarVeterinario;
