import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../../style/Clientes/editClien.css';


const EditarCliente = () => {
  const { id } = useParams();  // Pega o ID do cliente na URL
  const navigate = useNavigate();

  const [cliente, setCliente] = useState({
    nome: '',
    telefone: '',
    email: '',
    endereco: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    // Fazendo a requisição para buscar o cliente a ser editado
    axios.get(`http://localhost:3006/clientes/${id}`)
      .then(response => {
        setCliente(response.data);
      })
      .catch(err => {
        setError('Erro ao carregar cliente');
        console.error(err);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3006/clientes/${id}`, cliente)
      .then(response => {
        alert('Cliente atualizado com sucesso');
        navigate('/clientes');  // Redireciona para a lista de clientes
      })
      .catch(err => {
        setError('Erro ao atualizar cliente');
        console.error(err);
      });
  };

  return (
    <div className="container">
      <h2>Editar Cliente</h2>
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
        <button type="submit" className="btn btn-primary">Atualizar</button>
      </form>
    </div>
  );
};

export default EditarCliente;
