const express = require('express');
const router = express.Router();
const ItensVenda = require('../models/itensVendaModel');

// Rota para listar todos os itens de venda
router.get('/', async (req, res) => {
    try {
        const [rows] = await ItensVenda.getAll();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para buscar um item de venda por ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await ItensVenda.getById(req.params.id);
        if (rows.length === 0) return res.status(404).json({ error: 'Item de venda não encontrado' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar um novo item de venda
router.post('/', async (req, res) => {
    try {
        const { id_venda, id_produto, quantidade, preco_unitario } = req.body;
        if (!id_venda || !id_produto || !quantidade || !preco_unitario) {
            return res.status(400).json({ error: 'Faltando dados para criar o item de venda' });
        }
        const [result] = await ItensVenda.create({ id_venda, id_produto, quantidade, preco_unitario });
        res.status(201).json({ id_item: result.insertId, id_venda, id_produto, quantidade, preco_unitario });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um item de venda
router.put('/:id', async (req, res) => {
    try {
        const { id_venda, id_produto, quantidade, preco_unitario } = req.body;
        await ItensVenda.update(req.params.id, { id_venda, id_produto, quantidade, preco_unitario });
        res.json({ message: 'Item de venda atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para deletar um item de venda
router.delete('/:id', async (req, res) => {
    try {
        await ItensVenda.delete(req.params.id);
        res.json({ message: 'Item de venda deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;