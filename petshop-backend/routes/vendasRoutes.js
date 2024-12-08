const express = require('express');
const router = express.Router();
const Vendas = require('../models/vendasModel');

// Rota para listar todas as vendas
router.get('/', async (req, res) => {
    try {
        const [rows] = await Vendas.getAll();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para buscar uma venda por ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await Vendas.getById(req.params.id);
        if (rows.length === 0) return res.status(404).json({ error: 'Venda não encontrada' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar uma nova venda
router.post('/', async (req, res) => {
    try {
        const { data, id_cliente, total } = req.body;
        if (!data || !id_cliente || !total) {
            return res.status(400).json({ error: 'Faltando dados para criar a venda' });
        }
        const [result] = await Vendas.create({ data, id_cliente, total });
        res.status(201).json({ id_venda: result.insertId, data, id_cliente, total });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar uma venda
router.put('/:id', async (req, res) => {
    try {
        const { data, id_cliente, total } = req.body;
        await Vendas.update(req.params.id, { data, id_cliente, total });
        res.json({ message: 'Venda atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para deletar uma venda
router.delete('/:id', async (req, res) => {
    try {
        await Vendas.delete(req.params.id);
        res.json({ message: 'Venda deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
