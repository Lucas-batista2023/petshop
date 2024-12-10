import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddFuncionarios = () => {
  const [funcionario, setFuncionario] = useState({
    nome: '',
    cargo: '',
    telefone: '',
    email: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Usando o hook useNavigate para navegação

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFuncionario(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Função para enviar os dados do funcionário para a API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3006/funcionarios', funcionario);  // Envia os dados para o servidor
      navigate('/funcionarios');  // Redireciona para a lista de funcionários após o cadastro
    } catch (err) {
      setError('Erro ao adicionar funcionário');
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2>Adicionar Funcionário</h2>
      {error && <div className="alert alert-danger">{error}</div>}  {/* Exibe erro se houver */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={funcionario.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cargo" className="form-label">Cargo</label>
          <input
            type="text"
            className="form-control"
            id="cargo"
            name="cargo"
            value={funcionario.cargo}
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
            value={funcionario.telefone}
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
            value={funcionario.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Adicionar Funcionário</button>
      </form>
    </div>
  );
};

export default AddFuncionarios;
