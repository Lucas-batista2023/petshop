import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../../style/Agendamentos/editAgen.css';


const EditarAgendamento = () => {
  const { id } = useParams();  // Pega o ID do agendamento na URL
  const navigate = useNavigate();
  
  const [agendamento, setAgendamento] = useState({
    data: '',
    id_cliente: '',
    id_servico: '',
    status: 'agendado'
  });
  const [error, setError] = useState('');

  useEffect(() => {
    // Fazendo a requisição para buscar o agendamento a ser editado
    axios.get(`http://localhost:3006/agendamentos/${id}`)
      .then(response => {
        setAgendamento(response.data);
      })
      .catch(err => {
        setError('Erro ao carregar agendamento');
        console.error(err);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgendamento(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3006/agendamentos/${id}`, agendamento)
      .then(response => {
        alert('Agendamento atualizado com sucesso');
        navigate('/agendamentos');  // Redireciona para a lista de agendamentos
      })
      .catch(err => {
        setError('Erro ao atualizar agendamento');
        console.error(err);
      });
  };

  return (
    <div className="container">
      <h2>Editar Agendamento</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="data" className="form-label">Data</label>
          <input
            type="datetime-local"
            className="form-control"
            id="data"
            name="data"
            value={agendamento.data}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="id_cliente" className="form-label">ID Cliente</label>
          <input
            type="number"
            className="form-control"
            id="id_cliente"
            name="id_cliente"
            value={agendamento.id_cliente}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="id_servico" className="form-label">ID Serviço</label>
          <input
            type="number"
            className="form-control"
            id="id_servico"
            name="id_servico"
            value={agendamento.id_servico}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            className="form-control"
            id="status"
            name="status"
            value={agendamento.status}
            onChange={handleChange}
          >
            <option value="agendado">Agendado</option>
            <option value="confirmado">Confirmado</option>
            <option value="cancelado">Cancelado</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Atualizar</button>
      </form>
    </div>
  );
};

export default EditarAgendamento;
