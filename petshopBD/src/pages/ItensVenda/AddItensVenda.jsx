import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddItensVenda = () => {
    const [idVenda, setIdVenda] = useState('');
    const [idProduto, setIdProduto] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [precoUnitario, setPrecoUnitario] = useState('');
    const [vendas, setVendas] = useState([]);
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        // Buscar todas as vendas e produtos disponíveis
        const fetchVendasProdutos = async () => {
            try {
                const vendasResponse = await axios.get('http://localhost:3006/vendas'); // Ajuste a URL conforme necessário
                const produtosResponse = await axios.get('http://localhost:3006/produtos'); // Ajuste a URL conforme necessário
                setVendas(vendasResponse.data);
                setProdutos(produtosResponse.data);
            } catch (error) {
                console.error('Erro ao carregar vendas ou produtos:', error);
            }
        };

        fetchVendasProdutos();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!idVenda || !idProduto || !quantidade || !precoUnitario) {
            alert('Por favor, preencha todos os campos');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3006/itensvenda', {
                id_venda: idVenda,
                id_produto: idProduto,
                quantidade: quantidade,
                preco_unitario: precoUnitario,
            });

            if (response.status === 201) {
                alert('Item adicionado à venda com sucesso!');
                // Limpar os campos após o envio bem-sucedido
                setIdVenda('');
                setIdProduto('');
                setQuantidade('');
                setPrecoUnitario('');
            }
        } catch (error) {
            console.error('Erro ao adicionar item à venda:', error);
            alert('Erro ao adicionar item à venda');
        }
    };

    return (
        <div>
            <h2>Adicionar Item à Venda</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Venda</label>
                    <select
                        value={idVenda}
                        onChange={(e) => setIdVenda(e.target.value)}
                        required
                    >
                        <option value="">Selecione uma venda</option>
                        {vendas.map((venda) => (
                            <option key={venda.id} value={venda.id}>
                                Venda #{venda.id}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Produto</label>
                    <select
                        value={idProduto}
                        onChange={(e) => setIdProduto(e.target.value)}
                        required
                    >
                        <option value="">Selecione um produto</option>
                        {produtos.map((produto) => (
                            <option key={produto.id} value={produto.id}>
                                {produto.nome} - R${produto.preco}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Quantidade</label>
                    <input
                        type="number"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Preço Unitário</label>
                    <input
                        type="number"
                        step="0.01"
                        value={precoUnitario}
                        onChange={(e) => setPrecoUnitario(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Adicionar Item</button>
            </form>
        </div>
    );
};

export default AddItensVenda;
