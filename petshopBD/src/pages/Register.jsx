import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [role, setRole] = useState('cliente'); // Valor padrão
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await axios.post('http://localhost:3006/users', {
        nome,
        email,
        senha,
        role,
      });

      if (response.status === 201) {
        setSuccess('Usuário registrado com sucesso!');
        setNome('');
        setEmail('');
        setSenha('');
        setRole('cliente');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao registrar o usuário.');
    }
  };

  return (
    <div className="register-container">
      <h2>Registrar Usuário</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="cliente">Cliente</option>
            <option value="funcionario">Funcionário</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
