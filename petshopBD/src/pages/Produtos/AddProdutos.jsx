import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProdutos = () => {
  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    preco: '',
    estoque: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Função para lidar com as mudanças nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto((prevState) => ({ ...prevState, [name]: value }));
  };

  // Função para enviar os dados do formulário para a API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3006/produtos', produto);
      alert('Produto adicionado com sucesso');
      navigate('/produtos');  // Redireciona para a lista de produtos
    } catch (err) {
      setError('Erro ao adicionar produto');
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2>Adicionar Produto</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome do Produto</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={produto.nome}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descricao" className="form-label">Descrição</label>
          <textarea
            className="form-control"
            id="descricao"
            name="descricao"
            value={produto.descricao}
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
            value={produto.preco}
            onChange={handleChange}
            step="0.01"
            min="0"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="estoque" className="form-label">Estoque</label>
          <input
            type="number"
            className="form-control"
            id="estoque"
            name="estoque"
            value={produto.estoque}
            onChange={handleChange}
            min="0"
          />
        </div>
        <button type="submit" className="btn btn-primary">Adicionar Produto</button>
      </form>
    </div>
  );
};

export default AddProdutos;
