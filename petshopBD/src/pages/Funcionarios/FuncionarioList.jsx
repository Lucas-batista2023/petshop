import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FuncionarioList = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Usando o hook useNavigate para navegação

  // Função para buscar os funcionários
  const fetchFuncionarios = async () => {
    try {
      const response = await axios.get('http://localhost:3006/funcionarios');  // Fazendo requisição para a API
      setFuncionarios(response.data);  // Definindo os funcionários no estado
      setLoading(false);  // Atualizando o estado para remover o carregamento
    } catch (err) {
      setError('Erro ao carregar os funcionários');
      setLoading(false);
    }
  };

  // Função para deletar um funcionário
  const deleteFuncionario = async (id) => {
    try {
      await axios.delete(`http://localhost:3006/funcionarios/${id}`);
      setFuncionarios(funcionarios.filter(funcionario => funcionario.id !== id));  // Remove o funcionário da lista
    } catch (err) {
      setError('Erro ao deletar o funcionário');
    }
  };

  // Função para redirecionar para a página de edição do funcionário
  const editFuncionario = (id) => {
    navigate(`/edit-funcionario/${id}`);  // Redireciona para a página de edição
  };

  // Chama a função para carregar os funcionários quando o componente for montado
  useEffect(() => {
    fetchFuncionarios();
  }, []);

  if (loading) {
    return <p>Carregando funcionários...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Lista de Funcionários</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.length === 0 ? (
            <tr>
              <td colSpan="6">Nenhum funcionário encontrado.</td>
            </tr>
          ) : (
            funcionarios.map(funcionario => (
              <tr key={funcionario.id}>
                <td>{funcionario.id}</td>
                <td>{funcionario.nome}</td>
                <td>{funcionario.cargo}</td>
                <td>{funcionario.telefone}</td>
                <td>{funcionario.email}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => editFuncionario(funcionario.id)}>
                    Editar
                  </button>
                  <button className="btn btn-danger" onClick={() => deleteFuncionario(funcionario.id)}>
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

export default FuncionarioList;
