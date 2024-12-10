import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditarServicos = () => {
  const [servico, setServico] = useState({
    nome: '',
    descricao: '',
    preco: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Obtendo o ID do serviço da URL
  const navigate = useNavigate(); // Hook para navegação

  // Função para buscar os dados do serviço pelo ID
  const fetchServico = async () => {
    try {
      const response = await axios.get(`http://localhost:3006/servicos/${id}`); // URL da API
      setServico(response.data); // Definindo os dados do serviço no estado
      setLoading(false); // Remover o carregamento
    } catch (err) {
      setError('Erro ao carregar os dados do serviço');
      setLoading(false);
    }
  };

  // Função para atualizar os dados do serviço
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3006/servicos/${id}`, servico); // Atualizando serviço na API
      navigate('/servicos'); // Após salvar, redireciona para a lista de serviços
    } catch (err) {
      setError('Erro ao atualizar o serviço');
    }
  };

  // Chama a função para buscar o serviço quando o componente for montado
  useEffect(() => {
    fetchServico();
  }, [id]);

  if (loading) {
    return <p>Carregando dados do serviço...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Editar Serviço</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={servico.nome}
            onChange={(e) => setServico({ ...servico, nome: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            value={servico.descricao}
            onChange={(e) => setServico({ ...servico, descricao: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="preco">Preço:</label>
          <input
            type="number"
            id="preco"
            value={servico.preco}
            onChange={(e) => setServico({ ...servico, preco: e.target.value })}
            required
          />
        </div>

        <div>
          <button type="submit">Salvar Alterações</button>
        </div>
      </form>
    </div>
  );
};

export default EditarServicos;
