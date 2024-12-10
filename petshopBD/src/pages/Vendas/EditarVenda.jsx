import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditarVenda = () => {
  const { id } = useParams(); // Obtém o id da venda da URL
  const [venda, setVenda] = useState(null); // Estado para armazenar os dados da venda
  const [clientes, setClientes] = useState([]); // Estado para armazenar os clientes
  const [error, setError] = useState(null); // Estado para erros
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const navigate = useNavigate();

  // Função para buscar a venda por ID
  const fetchVenda = async () => {
    try {
      const response = await axios.get(`http://localhost:3006/vendas/${id}`);
      setVenda(response.data);
    } catch (err) {
      setError('Erro ao carregar a venda');
    } finally {
      setLoading(false);
    }
  };

  // Função para buscar todos os clientes
  const fetchClientes = async () => {
    try {
      const response = await axios.get('http://localhost:3006/clientes');
      setClientes(response.data);
    } catch (err) {
      setError('Erro ao carregar clientes');
    }
  };

  // Função para atualizar a venda
  const updateVenda = async (data) => {
    try {
      await axios.put(`http://localhost:3006/vendas/${id}`, data);
      navigate('/vendas'); // Após salvar, redireciona para a lista de vendas
    } catch (err) {
      setError('Erro ao atualizar a venda');
    }
  };

  // Função para lidar com o submit do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedVenda = {
      data: venda.data,
      id_cliente: venda.id_cliente,
      total: venda.total,
    };
    updateVenda(updatedVenda);
  };

  // Chamar as funções quando o componente for montado
  useEffect(() => {
    fetchVenda();
    fetchClientes();
  }, [id]);

  // Exibir mensagem de erro ou carregamento
  if (loading) {
    return <p>Carregando dados da venda...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Editar Venda</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Data:</label>
          <input
            type="datetime-local"
            value={venda.data}
            onChange={(e) => setVenda({ ...venda, data: e.target.value })}
            required
          />
        </div>

        <div>
          <label>Cliente:</label>
          <select
            value={venda.id_cliente || ''}
            onChange={(e) => setVenda({ ...venda, id_cliente: e.target.value })}
            required
          >
            <option value="">Selecione um cliente</option>
            {clientes.map((cliente) => (
              <option key={cliente.id} value={cliente.id}>
                {cliente.nome}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Total:</label>
          <input
            type="number"
            step="0.01"
            value={venda.total || ''}
            onChange={(e) => setVenda({ ...venda, total: e.target.value })}
            required
          />
        </div>

        <div>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default EditarVenda;
