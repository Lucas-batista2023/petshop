import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ServicosList = () => {
  const [servicos, setServicos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Usando o hook useNavigate para navegação

  // Função para buscar todos os serviços
  const fetchServicos = async () => {
    try {
      const response = await axios.get('http://localhost:3006/servicos'); // URL da API
      setServicos(response.data); // Definindo os dados dos serviços no estado
      setLoading(false); // Remover o carregamento
    } catch (err) {
      setError('Erro ao carregar os serviços'); // Definir erro em caso de falha
      setLoading(false); // Remover o carregamento
    }
  };

  // Função para deletar um serviço
  const deleteServico = async (id) => {
    try {
      await axios.delete(`http://localhost:3006/servicos/${id}`);
      setServicos(servicos.filter(servico => servico.id !== id)); // Remove o serviço deletado da lista
    } catch (err) {
      setError('Erro ao deletar o serviço');
    }
  };

  // Chamar a função quando o componente for montado
  useEffect(() => {
    fetchServicos();
  }, []);

  // Função para navegar para a página de edição de serviço
  const handleEditServico = (id) => {
    navigate(`/editar-servico/${id}`);  // Navega para a página de edição passando o ID do serviço
  };

  if (loading) {
    return <p>Carregando serviços...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Lista de Serviços</h1>

      {/* Tabela de Serviços */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {servicos.length === 0 ? (
            <tr>
              <td colSpan="5">Nenhum serviço encontrado.</td>
            </tr>
          ) : (
            servicos.map(servico => (
              <tr key={servico.id}>
                <td>{servico.id}</td>
                <td>{servico.nome}</td>
                <td>{servico.descricao}</td>
                <td>{servico.preco}</td>
                <td>
                  <button onClick={() => handleEditServico(servico.id)}>Editar</button>
                  <button onClick={() => deleteServico(servico.id)}>Deletar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ServicosList;
