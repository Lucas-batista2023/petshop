import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const VeterinariosList = () => {
  const [veterinarios, setVeterinarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Usando o hook useNavigate para navegação

  // Função para buscar todos os veterinários
  const fetchVeterinarios = async () => {
    try {
      const response = await axios.get('http://localhost:3006/veterinarios'); // URL da API
      setVeterinarios(response.data); // Definindo os dados dos veterinários no estado
      setLoading(false); // Remover o carregamento
    } catch (err) {
      setError('Erro ao carregar os veterinários'); // Definir erro em caso de falha
      setLoading(false); // Remover o carregamento
    }
  };

  // Função para deletar um veterinário
  const deleteVeterinario = async (id) => {
    try {
      await axios.delete(`http://localhost:3006/veterinarios/${id}`);
      setVeterinarios(veterinarios.filter(veterinario => veterinario.id !== id)); // Remove o veterinário deletado da lista
    } catch (err) {
      setError('Erro ao deletar o veterinário');
    }
  };

  // Chamar a função quando o componente for montado
  useEffect(() => {
    fetchVeterinarios();
  }, []);

  // Função para navegar para a página de edição de veterinário
  const handleEditVeterinario = (id) => {
    navigate(`/editar-veterinario/${id}`);  // Navega para a página de edição passando o ID do veterinário
  };

  if (loading) {
    return <p>Carregando veterinários...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Lista de Veterinários</h1>

      {/* Tabela de Veterinários */}
      <table className="clientes">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Especialidade</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {veterinarios.length === 0 ? (
            <tr>
              <td colSpan="6">Nenhum veterinário encontrado.</td>
            </tr>
          ) : (
            veterinarios.map(veterinario => (
              <tr key={veterinario.id}>
                <td>{veterinario.id}</td>
                <td>{veterinario.nome}</td>
                <td>{veterinario.especialidade}</td>
                <td>{veterinario.telefone}</td>
                <td>{veterinario.email}</td>
                <td>
                  <button className="btn btn-editar" onClick={() => handleEditVeterinario(veterinario.id)}>Editar</button>
                  <button className="btn btn-excluir" onClick={() => deleteVeterinario(veterinario.id)}>Deletar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VeterinariosList;
