import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditarProduto = () => {
  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    preco: '',
    estoque: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Obtém o ID do produto da URL
  const navigate = useNavigate();

  // Função para buscar um produto pelo ID
  const fetchProduto = async () => {
    try {
      const response = await axios.get(`http://localhost:3006/produtos/${id}`);
      setProduto(response.data);
      setLoading(false); // Remover o carregamento
    } catch (err) {
      setError('Erro ao carregar o produto');
      setLoading(false); // Remover o carregamento
    }
  };

  // Função para atualizar os dados do produto
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  // Função para salvar as alterações
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3006/produtos/${id}`, produto);
      navigate('/produtos'); // Navega de volta para a lista de produtos após salvar
    } catch (err) {
      setError('Erro ao salvar o produto');
    }
  };

  // Chamar a função quando o componente for montado
  useEffect(() => {
    fetchProduto();
  }, [id]);

  if (loading) {
    return <p>Carregando produto...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Editar Produto</h1>
      <form onSubmit={handleSave}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={produto.nome}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            name="descricao"
            value={produto.descricao}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Preço:</label>
          <input
            type="number"
            name="preco"
            value={produto.preco}
            onChange={handleInputChange}
            required
            step="0.01"
          />
        </div>
        <div>
          <label>Estoque:</label>
          <input
            type="number"
            name="estoque"
            value={produto.estoque}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditarProduto;
