import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProdutosList = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Usando o hook useNavigate para navegação

  // Função para buscar todos os produtos
  const fetchProdutos = async () => {
    try {
      const response = await axios.get('http://localhost:3006/produtos'); // URL da API
      setProdutos(response.data); // Definindo os dados dos produtos no estado
      setLoading(false); // Remover o carregamento
    } catch (err) {
      setError('Erro ao carregar os produtos'); // Definir erro em caso de falha
      setLoading(false); // Remover o carregamento
    }
  };

  // Função para deletar um produto
  const deleteProduto = async (id) => {
    try {
      await axios.delete(`http://localhost:3006/produtos/${id}`);
      setProdutos(produtos.filter(produto => produto.id !== id)); // Remove o produto deletado da lista
    } catch (err) {
      setError('Erro ao deletar o produto');
    }
  };

  // Chamar a função quando o componente for montado
  useEffect(() => {
    fetchProdutos();
  }, []);

  // Função para navegar para a página de edição de produto
  const handleEditProduto = (id) => {
    navigate(`/editar-produto/${id}`);  // Navega para a página de edição passando o ID do produto
  };

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Lista de Produtos</h1>

      {/* Tabela de Produtos */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.length === 0 ? (
            <tr>
              <td colSpan="6">Nenhum produto encontrado.</td>
            </tr>
          ) : (
            produtos.map(produto => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>{produto.preco}</td>
                <td>{produto.estoque}</td>
                <td>
                  <button onClick={() => handleEditProduto(produto.id)}>Editar</button>
                  <button onClick={() => deleteProduto(produto.id)}>Deletar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProdutosList;
