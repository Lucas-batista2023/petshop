import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConsultasList = () => {
    const [consultas, setConsultas] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Função para buscar todas as consultas do backend
        const fetchConsultas = async () => {
            try {
                const response = await axios.get('http://localhost:3006/consultas');
                setConsultas(response.data); // Atualiza o estado com os dados retornados
            } catch (err) {
                setError('Erro ao carregar consultas');
                console.error(err);
            }
        };

        fetchConsultas();
    }, []); // O array vazio [] garante que a requisição seja feita apenas uma vez

    return (
        <div>
            <h2>Lista de Consultas</h2>
            {error && <p>{error}</p>}
            <ul>
                {consultas.map((consulta) => (
                    <li key={consulta.id_consulta || `${consulta.data}-${consulta.id_pet}`}>
                        <strong>Data:</strong> {consulta.data} <br />
                        <strong>Pet ID:</strong> {consulta.id_pet} <br />
                        <strong>Veterinário ID:</strong> {consulta.id_veterinario} <br />
                        <strong>Observações:</strong> {consulta.observacoes}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ConsultasList;
