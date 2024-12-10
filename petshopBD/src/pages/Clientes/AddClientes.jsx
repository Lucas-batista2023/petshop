import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddClientes = () => {
  const [cliente, setCliente] = useState({
    nome: '',
    telefone: '',
    email: '',
    endereco: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Função para lidar com as mudanças no formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Função para enviar os dados do cliente para o backend
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    axios.post('http://localhost:3006/clientes', cliente)
      .then(response => {
        setLoading(false);
        alert('Cliente adicionado com sucesso!');
        navigate('/clientes');  // Redireciona para a lista de clientes
      })
      .catch(err => {
        setLoading(false);
        setError('Erro ao adicionar cliente');
        console.error(err);
      });
  };

  return (
    <div className="container">
      <h2>Adicionar Cliente</h2>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={cliente.nome}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="telefone" className="form-label">Telefone</label>
          <input
            type="text"
            className="form-control"
            id="telefone"
            name="telefone"
            value={cliente.telefone}
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
            value={cliente.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="endereco" className="form-label">Endereço</label>
          <input
            type="text"
            className="form-control"
            id="endereco"
            name="endereco"
            value={cliente.endereco}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Adicionando...' : 'Adicionar Cliente'}
        </button>
      </form>
    </div>
  );
};

export default AddClientes;
