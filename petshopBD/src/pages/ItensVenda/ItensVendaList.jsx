import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../style/formulario.css';


const ItensVendaList = () => {
  const [itensVenda, setItensVenda] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook para navegação

  // Função para buscar os itens de venda da API
  const fetchItensVenda = async () => {
    try {
      const response = await axios.get('http://localhost:3006/itensvenda'); // Ajuste a URL conforme sua API
      setItensVenda(response.data);
      setLoading(false);
    } catch (err) {
      setError('Erro ao carregar os itens de venda');
      setLoading(false);
    }
  };

  // Função para deletar um item de venda
  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3006/itensvenda/${id}`); // Deleta o item pelo ID
      setItensVenda(itensVenda.filter((item) => item.id !== id)); // Atualiza a lista de itens
    } catch (err) {
      setError('Erro ao deletar o item de venda');
    }
  };

  // Função para redirecionar para a página de edição do item de venda
  const editItem = (id) => {
    navigate(`/edit-itemvenda/${id}`); // Redireciona para a página de edição
  };

  // Chama a função para carregar os itens de venda quando o componente é montado
  useEffect(() => {
    fetchItensVenda();
  }, []);

  if (loading) {
    return <div>Carregando itens de venda...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Lista de Itens de Venda</h2>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>ID Venda</th>
            <th>ID Produto</th>
            <th>Quantidade</th>
            <th>Preço Unitário</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {itensVenda.length === 0 ? (
            <tr>
              <td colSpan="6">Nenhum item de venda encontrado.</td>
            </tr>
          ) : (
            itensVenda.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.id_venda}</td>
                <td>{item.id_produto}</td>
                <td>{item.quantidade}</td>
                <td>{item.preco_unitario ? Number(item.preco_unitario).toFixed(2) : 'N/A'}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => editItem(item.id)}>
                    Editar
                  </button>
                  <button className="btn btn-danger" onClick={() => deleteItem(item.id)}>
                    Deletar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ItensVendaList;
