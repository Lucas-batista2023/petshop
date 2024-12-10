import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const VendaList = () => {
  const [vendas, setVendas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Função para buscar todas as vendas
  const fetchVendas = async () => {
    try {
      const response = await axios.get('http://localhost:3006/vendas'); // URL da API
      setVendas(response.data); // Definindo as vendas no estado
      setLoading(false); // Remover o carregamento
    } catch (err) {
      setError('Erro ao carregar as vendas'); // Definir erro em caso de falha
      setLoading(false); // Remover o carregamento
    }
  };

  // Função para deletar uma venda
  const deleteVenda = async (id) => {
    try {
      await axios.delete(`http://localhost:3006/vendas/${id}`);
      setVendas(vendas.filter(venda => venda.id !== id)); // Remove a venda deletada da lista
    } catch (err) {
      setError('Erro ao deletar a venda');
    }
  };

  // Chamar a função quando o componente for montado
  useEffect(() => {
    fetchVendas();
  }, []);

  // Função para navegar para a página de edição de venda
  const handleEditVenda = (id) => {
    navigate(`/editar-venda/${id}`); // Navega para a página de edição da venda
  };

  if (loading) {
    return <p>Carregando vendas...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Lista de Vendas</h1>

      {/* Tabela de Vendas */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Cliente</th>
            <th>Total</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {vendas.length === 0 ? (
            <tr>
              <td colSpan="5">Nenhuma venda encontrada.</td>
            </tr>
          ) : (
            vendas.map(venda => (
              <tr key={venda.id}>
                <td>{venda.id}</td>
                <td>{new Date(venda.data).toLocaleString()}</td> {/* Exibindo a data no formato legível */}
                <td>{venda.id_cliente}</td> {/* Pode-se modificar para exibir o nome do cliente */}
                <td>{venda.total}</td>
                <td>
                  <button onClick={() => handleEditVenda(venda.id)}>Editar</button>
                  <button onClick={() => deleteVenda(venda.id)}>Deletar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VendaList;
