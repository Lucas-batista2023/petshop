import React, { useState } from 'react';
import axios from 'axios';

const DeleteConsulta = () => {
    const [idConsulta, setIdConsulta] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            // Enviar requisição DELETE para o backend
            await axios.delete(`http://localhost:3006/consultas/${idConsulta}`);
            setSuccess(true);
            setError(null);
            // Limpar o campo após a deleção
            setIdConsulta('');
        } catch (err) {
            setError('Erro ao deletar consulta');
            console.error('Erro:', err.response ? err.response.data : err.message);
        }
    };
    

    return (
        <div>
            <h2>Deletar Consulta</h2>
            {success && <p>Consulta deletada com sucesso!</p>}
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    ID da Consulta:
                    <input
                        type="number"
                        value={idConsulta}
                        onChange={(e) => setIdConsulta(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Deletar Consulta</button>
            </form>
        </div>
    );
};

export default DeleteConsulta;
