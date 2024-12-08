import React, { useState } from 'react';
import axios from 'axios';

const AddConsulta = () => {
    const [data, setData] = useState('');
    const [idPet, setIdPet] = useState('');
    const [idVeterinario, setIdVeterinario] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const novaConsulta = {
            data,
            id_pet: idPet,
            id_veterinario: idVeterinario,
            observacoes,
        };

        try {
            await axios.post('http://localhost:3006/consultas', novaConsulta);
            setSuccess(true);
            // Limpar os campos após o envio
            setData('');
            setIdPet('');
            setIdVeterinario('');
            setObservacoes('');
        } catch (err) {
            setError('Erro ao adicionar consulta');
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Adicionar Consulta</h2>
            {success && <p>Consulta adicionada com sucesso!</p>}
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Data e Hora:
                    <input
                        type="datetime-local"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    ID do Pet:
                    <input
                        type="number"
                        value={idPet}
                        onChange={(e) => setIdPet(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    ID do Veterinário:
                    <input
                        type="number"
                        value={idVeterinario}
                        onChange={(e) => setIdVeterinario(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Observações:
                    <textarea
                        value={observacoes}
                        onChange={(e) => setObservacoes(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Adicionar Consulta</button>
            </form>
        </div>
    );
};

export default AddConsulta;
