import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddAgendamentos = () => {
  const [data, setData] = useState('');
  const [id_cliente, setIdCliente] = useState('');
  const [id_servico, setIdServico] = useState('');
  const [status, setStatus] = useState('agendado');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação dos campos
    if (!data || !id_cliente || !id_servico) {
      setError('Todos os campos são obrigatórios');
      return;
    }

    const agendamento = {
      data,
      id_cliente,
      id_servico,
      status,
    };

    // Fazendo a requisição para criar o agendamento
    axios.post('http://localhost:3006/agendamentos', agendamento) // Alterar para o seu backend real
      .then((response) => {
        alert('Agendamento criado com sucesso');
        navigate('/agendamentos');  // Redireciona para a lista de agendamentos
      })
      .catch((err) => {
        setError('Erro ao criar agendamento');
        console.error(err);
      });
  };

  return (
    <div className="container">
      <h2>Adicionar Agendamento</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="data" className="form-label">Data</label>
          <input
            type="datetime-local"
            className="form-control"
            id="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="id_cliente" className="form-label">ID Cliente</label>
          <input
            type="number"
            className="form-control"
            id="id_cliente"
            value={id_cliente}
            onChange={(e) => setIdCliente(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="id_servico" className="form-label">ID Serviço</label>
          <input
            type="number"
            className="form-control"
            id="id_servico"
            value={id_servico}
            onChange={(e) => setIdServico(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            className="form-control"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="agendado">Agendado</option>
            <option value="confirmado">Confirmado</option>
            <option value="cancelado">Cancelado</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Adicionar</button>
      </form>
    </div>
  );
};

export default AddAgendamentos;
