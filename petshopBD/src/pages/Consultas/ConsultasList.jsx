import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../style/Consulta/editConsul.css';

const ConsultasList = () => {
    const [consultas, setConsultas] = useState([]);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    // Carrega todas as consultas ao montar o componente
    useEffect(() => {
        const fetchConsultas = async () => {
            try {
                const response = await axios.get('http://localhost:3006/consultas');
                setConsultas(response.data);
                setError(null);
            } catch (err) {
                setError('Erro ao carregar consultas');
                console.error(err);
            }
        };

        fetchConsultas();
    }, []);

    // Função para deletar uma consulta
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3006/consultas/${id}`);
            setConsultas(consultas.filter((consulta) => consulta.id !== id));
            setSuccess(true);
            setError(null);
        } catch (err) {
            setError('Erro ao deletar consulta');
            console.error('Erro:', err.response ? err.response.data : err.message);
            setSuccess(false);
        }
    };

    // Função para redirecionar para a página de atualização
    const handleUpdate = (id) => {
        navigate(`/atualizar-consulta/${id}`);
    };

    return (
        <div>
            <h2>Lista de Consultas</h2>
            {success && <p>Operação realizada com sucesso!</p>}
            {error && <p>{error}</p>}

            {/* Tabela de Consultas */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Data</th>
                        <th>Pet ID</th>
                        <th>Veterinário ID</th>
                        <th>Observações</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {consultas.length === 0 ? (
                        <tr>
                            <td colSpan="6">Nenhuma consulta encontrada.</td>
                        </tr>
                    ) : (
                        consultas.map((consulta) => (
                            <tr key={consulta.id}>
                                <td>{consulta.id}</td>
                                <td>{consulta.data}</td>
                                <td>{consulta.id_pet}</td>
                                <td>{consulta.id_veterinario}</td>
                                <td>{consulta.observacoes}</td>
                                <td>
                                    <button onClick={() => handleUpdate(consulta.id)}>Atualizar</button>
                                    <button onClick={() => handleDelete(consulta.id)}>Deletar</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ConsultasList;
