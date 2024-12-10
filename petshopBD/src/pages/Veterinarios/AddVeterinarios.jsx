import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import '../../style/add.css';


const AddVeterinarios = () => {
  const [nome, setNome] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validando se todos os campos estão preenchidos
    if (!nome || !especialidade || !telefone || !email) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const novoVeterinario = {
      nome,
      especialidade,
      telefone,
      email,
    };

    try {
      // Envia o novo veterinário para o backend
      await axios.post('http://localhost:3006/veterinarios', novoVeterinario);
      alert('Veterinário adicionado com sucesso!');
      navigate('/veterinarios'); // Redireciona para a lista de veterinários após adicionar
    } catch (error) {
      console.error('Erro ao adicionar veterinário:', error);
      alert('Ocorreu um erro ao adicionar o veterinário. Tente novamente.');
    }
  };

  return (
    <div className="add-veterinarios-container">
      <h2>Adicionar Veterinário</h2>
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
          <label>Especialidade:</label>
          <input
            type="text"
            value={especialidade}
            onChange={(e) => setEspecialidade(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Telefone:</label>
          <input
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
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
        <button type="submit">Adicionar Veterinário</button>
      </form>
    </div>
  );
};

export default AddVeterinarios;
