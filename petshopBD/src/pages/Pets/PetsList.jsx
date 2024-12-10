import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PetsList = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Usando o hook useNavigate para navegação

  // Função para buscar todos os pets
  const fetchPets = async () => {
    try {
      const response = await axios.get('http://localhost:3006/pets'); // URL da API
      setPets(response.data); // Definindo os dados dos pets no estado
      setLoading(false); // Remover o carregamento
    } catch (err) {
      setError('Erro ao carregar os pets'); // Definir erro em caso de falha
      setLoading(false); // Remover o carregamento
    }
  };

  // Função para deletar um pet
  const deletePet = async (id) => {
    try {
      await axios.delete(`http://localhost:3006/pets/${id}`);
      setPets(pets.filter(pet => pet.id !== id)); // Remove o pet deletado da lista
    } catch (err) {
      setError('Erro ao deletar o pet');
    }
  };

  // Chamar a função quando o componente for montado
  useEffect(() => {
    fetchPets();
  }, []);

  // Função para navegar para a página de edição de pet
  const handleEditPet = (id) => {
    navigate(`/editar-pet/${id}`); // Navega para a página de edição passando o ID do pet
  };

  if (loading) {
    return <p>Carregando pets...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Lista de Pets</h1>

      {/* Tabela de Pets */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Espécie</th>
            <th>Raça</th>
            <th>Idade</th>
            <th>ID Cliente</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pets.length === 0 ? (
            <tr>
              <td colSpan="7">Nenhum pet encontrado.</td>
            </tr>
          ) : (
            pets.map(pet => (
              <tr key={pet.id}>
                <td>{pet.id}</td>
                <td>{pet.nome}</td>
                <td>{pet.especie}</td>
                <td>{pet.raca || 'Não informado'}</td>
                <td>{pet.idade !== null ? pet.idade : 'Não informado'}</td>
                <td>{pet.id_cliente || 'Não associado'}</td>
                <td>
                  <button onClick={() => handleEditPet(pet.id)}>Editar</button>
                  <button onClick={() => deletePet(pet.id)}>Deletar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PetsList;
