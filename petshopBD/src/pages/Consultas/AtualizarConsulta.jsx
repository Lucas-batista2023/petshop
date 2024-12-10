import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const AtualizarConsulta = () => {
    const { id } = useParams();  // Pega o ID da URL
    const navigate = useNavigate();
    
    const [data, setData] = useState('');  // Valor inicial para o campo de data
    const [id_pet, setIdPet] = useState('');  // Valor inicial para o campo de ID do Pet
    const [id_veterinario, setIdVeterinario] = useState('');  // Valor inicial para o campo de ID do Veterinário
    const [observacoes, setObservacoes] = useState('');  // Valor inicial para o campo de observações
    const [error, setError] = useState('');  // Valor para erros

    // Carrega os dados da consulta ao montar o componente
    useEffect(() => {
        axios.get(`http://localhost:3006/consultas/${id}`)
            .then(response => {
                const consulta = response.data;
                if (consulta) {
                    setData(consulta.data || '');  // Garantindo que a data não seja undefined
                    setIdPet(consulta.id_pet || '');  // Garantindo que id_pet não seja undefined
                    setIdVeterinario(consulta.id_veterinario || '');  // Garantindo que id_veterinario não seja undefined
                    setObservacoes(consulta.observacoes || '');  // Garantindo que observacoes não seja undefined
                } else {
                    setError('Consulta não encontrada');
                }
            })
            .catch(err => {
                setError('Erro ao carregar dados da consulta');
                console.error(err);
            });
    }, [id]);

    // Função para atualizar a consulta
    const atualizarConsulta = () => {
        if (!data || !id_pet || !id_veterinario || !observacoes) {
            setError('Todos os campos são obrigatórios');
            return;
        }

        // Formata a data para o padrão esperado
        const updatedConsulta = { 
            data: new Date(data).toISOString().slice(0, 19).replace('T', ' '),  // Formata a data
            id_pet, 
            id_veterinario, 
            observacoes 
        };
        
        // Envia a requisição PUT para atualizar a consulta
        axios.put(`http://localhost:3006/consultas/${id}`, updatedConsulta)
            .then(response => {
                alert('Consulta atualizada com sucesso');
                navigate('/consultas');  // Redireciona para a lista de consultas
            })
            .catch(err => {
                setError('Erro ao atualizar consulta');
                console.error(err);
            });
    };

    return (
        <div className="container">
            <h2>Atualizar Consulta</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={(e) => e.preventDefault()}>
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
                    <label htmlFor="id_pet" className="form-label">ID do Pet</label>
                    <input
                        type="number"
                        className="form-control"
                        id="id_pet"
                        value={id_pet}
                        onChange={(e) => setIdPet(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="id_veterinario" className="form-label">ID do Veterinário</label>
                    <input
                        type="number"
                        className="form-control"
                        id="id_veterinario"
                        value={id_veterinario}
                        onChange={(e) => setIdVeterinario(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="observacoes" className="form-label">Observações</label>
                    <textarea
                        className="form-control"
                        id="observacoes"
                        value={observacoes}
                        onChange={(e) => setObservacoes(e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={atualizarConsulta}>Atualizar</button>
            </form>
        </div>
    );
};

export default AtualizarConsulta;
