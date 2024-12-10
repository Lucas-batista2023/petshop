import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import '../../style/formulario.css';
import '../../style/Clientes/listClien.css';



const ClientesList = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Usando o hook useNavigate para navegação

  // Função para buscar todos os clientes
  const fetchClientes = async () => {
    try {
      const response = await axios.get('http://localhost:3006/clientes'); // URL da API
      setClientes(response.data); // Definindo os dados dos clientes no estado
      setLoading(false); // Remover o carregamento
    } catch (err) {
      setError('Erro ao carregar os clientes'); // Definir erro em caso de falha
      setLoading(false); // Remover o carregamento
    }
  };

  // Função para deletar um cliente
  const deleteCliente = async (id) => {
    try {
      await axios.delete(`http://localhost:3006/clientes/${id}`);
      setClientes(clientes.filter(cliente => cliente.id !== id)); // Remove o cliente deletado da lista
    } catch (err) {
      setError('Erro ao deletar o cliente');
    }
  };

  // Chamar a função quando o componente for montado
  useEffect(() => {
    fetchClientes();
  }, []);

  // Função para navegar para a página de edição de cliente
  const handleEditCliente = (id) => {
    navigate(`/editar-cliente/${id}`);  // Navega para a página de edição passando o ID do cliente
  };

  if (loading) {
    return <p>Carregando clientes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Lista de Clientes</h1>

      {/* Tabela de Clientes */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.length === 0 ? (
            <tr>
              <td colSpan="6">Nenhum cliente encontrado.</td>
            </tr>
          ) : (
            clientes.map(cliente => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.email}</td>
                <td>{cliente.endereco}</td>
                <td>
                  <button onClick={() => handleEditCliente(cliente.id)}>Editar</button>
                  <button onClick={() => deleteCliente(cliente.id)}>Deletar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ClientesList;
