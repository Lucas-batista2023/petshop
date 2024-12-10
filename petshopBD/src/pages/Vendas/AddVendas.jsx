import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddVendas = () => {
  const [venda, setVenda] = useState({
    data: '',
    id_cliente: '',
    total: ''
  });
  const [clientes, setClientes] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Carrega a lista de clientes para o campo de seleção
    axios.get('http://localhost:3006/clientes')
      .then(response => {
        setClientes(response.data);
      })
      .catch(err => {
        setError('Erro ao carregar clientes');
        console.error(err);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVenda(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3006/vendas', venda)
      .then(response => {
        alert('Venda adicionada com sucesso');
        navigate('/vendas'); // Redireciona para a lista de vendas
      })
      .catch(err => {
        setError('Erro ao adicionar venda');
        console.error(err);
      });
  };

  return (
    <div className="container">
      <h2>Adicionar Venda</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="data" className="form-label">Data</label>
          <input
            type="datetime-local"
            className="form-control"
            id="data"
            name="data"
            value={venda.data}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="id_cliente" className="form-label">Cliente</label>
          <select
            className="form-select"
            id="id_cliente"
            name="id_cliente"
            value={venda.id_cliente}
            onChange={handleChange}
          >
            <option value="">Selecione o Cliente</option>
            {clientes.map(cliente => (
              <option key={cliente.id} value={cliente.id}>
                {cliente.nome}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="total" className="form-label">Total</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="total"
            name="total"
            value={venda.total}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Adicionar Venda</button>
      </form>
    </div>
  );
};

export default AddVendas;
