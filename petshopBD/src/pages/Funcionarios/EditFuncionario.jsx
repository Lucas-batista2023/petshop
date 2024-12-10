import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditFuncionario = () => {
  const { id } = useParams(); // Pega o ID do funcionário da URL
  const navigate = useNavigate(); // Usado para navegar após a edição
  const [funcionario, setFuncionario] = useState({
    nome: '',
    cargo: '',
    telefone: '',
    email: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para carregar os dados do funcionário
  useEffect(() => {
    const fetchFuncionario = async () => {
      try {
        const response = await axios.get(`http://localhost:3006/funcionarios/${id}`); // Altere a URL conforme necessário
        setFuncionario(response.data);
      } catch (err) {
        setError('Erro ao carregar os dados do funcionário');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFuncionario();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFuncionario({ ...funcionario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3006/funcionarios/${id}`, funcionario); // Altere a URL conforme necessário
      navigate('/funcionarios'); // Redireciona para a lista de funcionários após salvar
    } catch (err) {
      setError('Erro ao atualizar os dados do funcionário');
      console.error(err);
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Editar Funcionário</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={funcionario.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cargo">Cargo</label>
          <input
            type="text"
            className="form-control"
            id="cargo"
            name="cargo"
            value={funcionario.cargo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="text"
            className="form-control"
            id="telefone"
            name="telefone"
            value={funcionario.telefone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={funcionario.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Atualizar
        </button>
      </form>
      <br />
      <a href="/funcionarios" className="btn btn-secondary mt-3">
        Voltar
      </a>
    </div>
  );
};

export default EditFuncionario;
