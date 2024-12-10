import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddServicos = () => {
  const [servico, setServico] = useState({
    nome: '',
    descricao: '',
    preco: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServico(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!servico.nome || !servico.descricao || !servico.preco) {
      setError('Todos os campos são obrigatórios!');
      return;
    }

    try {
      await axios.post('http://localhost:3006/servicos', servico);
      alert('Serviço adicionado com sucesso!');
      navigate('/servicos'); // Redireciona para a lista de serviços
    } catch (err) {
      setError('Erro ao adicionar serviço');
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2>Adicionar Serviço</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={servico.nome}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descricao" className="form-label">Descrição</label>
          <textarea
            className="form-control"
            id="descricao"
            name="descricao"
            value={servico.descricao}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="preco" className="form-label">Preço</label>
          <input
            type="number"
            className="form-control"
            id="preco"
            name="preco"
            value={servico.preco}
            onChange={handleChange}
            step="0.01"
          />
        </div>
        <button type="submit" className="btn btn-primary">Adicionar Serviço</button>
      </form>
    </div>
  );
};

export default AddServicos;
