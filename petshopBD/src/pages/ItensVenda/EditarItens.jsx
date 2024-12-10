import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const EditarItens = () => {
    const { id } = useParams(); // Obtém o ID do item de venda da URL
    const navigate = useNavigate(); // Para redirecionar após a atualização
    const [item, setItem] = useState({
        id_venda: '',
        id_produto: '',
        quantidade: '',
        preco_unitario: ''
    });
    const [error, setError] = useState('');

    // Função para carregar os dados do item ao carregar a página
    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.get(`http://localhost:3006/itensvenda/${id}`);
                setItem(response.data);
            } catch (err) {
                console.error('Erro ao carregar o item', err);
            }
        };

        fetchItem();
    }, [id]);

    // Função para lidar com a alteração dos campos do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem((prevItem) => ({
            ...prevItem,
            [name]: value
        }));
    };

    // Função para enviar as alterações para o backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:3006/itensvenda/${id}`, item);
            navigate('/itens-venda'); // Redireciona para a lista de itens de venda após a atualização
        } catch (err) {
            setError('Erro ao atualizar o item. Tente novamente.');
            console.error('Erro ao atualizar o item', err);
        }
    };

    return (
        <div className="editar-item">
            <h1>Editar Item de Venda</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="id_venda">ID Venda</label>
                    <input
                        type="number"
                        id="id_venda"
                        name="id_venda"
                        value={item.id_venda || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="id_produto">ID Produto</label>
                    <input
                        type="number"
                        id="id_produto"
                        name="id_produto"
                        value={item.id_produto || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="quantidade">Quantidade</label>
                    <input
                        type="number"
                        id="quantidade"
                        name="quantidade"
                        value={item.quantidade || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="preco_unitario">Preço Unitário</label>
                    <input
                        type="number"
                        id="preco_unitario"
                        name="preco_unitario"
                        value={item.preco_unitario || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Atualizar Item</button>
            </form>
        </div>
    );
};

export default EditarItens;
