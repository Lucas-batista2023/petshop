import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import '../../style/Agendamentos/listAgen.css';

const ListarAgendamentos = () => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fazendo a requisição para listar todos os agendamentos
    axios.get('http://localhost:3006/agendamentos')  // Alterar para o seu backend real
      .then(response => {
        setAgendamentos(response.data);
      })
      .catch(err => {
        setError('Erro ao carregar agendamentos');
        console.error(err);
      });
  }, []);

  // Função para excluir um agendamento
  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este agendamento?')) {
      axios.delete(`http://localhost:3006/agendamentos/${id}`)
        .then(response => {
          setAgendamentos(agendamentos.filter(agendamento => agendamento.id !== id));  // Atualiza a lista removendo o agendamento excluído
          alert('Agendamento excluído com sucesso');
        })
        .catch(err => {
          setError('Erro ao excluir agendamento');
          console.error(err);
        });
    }
  };

  // Função para editar um agendamento
  const handleEdit = (id) => {
    navigate(`/editar-agendamento/${id}`);  // Redireciona para a página de edição do agendamento
  };

  return (
    <div className="container">
      <h2>Lista de Agendamentos</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>ID Cliente</th>
            <th>ID Serviço</th>
            <th>Status</th>
            <th>Ações</th> {/* Coluna para os botões de ação */}
          </tr>
        </thead>
        <tbody>
          {agendamentos.map((agendamento) => (
            <tr key={agendamento.id}>
              <td>{agendamento.id}</td>
              <td>{new Date(agendamento.data).toLocaleString()}</td> {/* Formatando a data */}
              <td>{agendamento.id_cliente}</td>
              <td>{agendamento.id_servico}</td>
              <td>{agendamento.status}</td>
              <td>
                <button className="btn btn-warning" onClick={() => handleEdit(agendamento.id)}>Editar</button>
                <button className="btn btn-danger" onClick={() => handleDelete(agendamento.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarAgendamentos;
