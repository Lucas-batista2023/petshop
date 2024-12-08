const express = require('express');
const router = express.Router();
const Clientes = require('../models/clientesModel');

// Rota para listar todos os clientes
router.get('/', async (req, res) => {
    try {
        const [rows] = await Clientes.getAll();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para buscar um cliente por ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await Clientes.getById(req.params.id);
        if (rows.length === 0) return res.status(404).json({ error: 'Cliente não encontrado' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar um novo cliente
router.post('/', async (req, res) => {
    try {
        const [result] = await Clientes.create(req.body);
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um cliente
router.put('/:id', async (req, res) => {
    try {
        await Clientes.update(req.params.id, req.body);
        res.json({ message: 'Cliente atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para deletar um cliente
router.delete('/:id', async (req, res) => {
    try {
        await Clientes.delete(req.params.id);
        res.json({ message: 'Cliente deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
