const express = require('express');
const router = express.Router();
const Consultas = require('../models/consultasModel');

// Rota para listar todas as consultas
router.get('/', async (req, res) => {
    try {
        const [rows] = await Consultas.getAll();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para buscar uma consulta por ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await Consultas.getById(req.params.id);
        if (rows.length === 0) return res.status(404).json({ error: 'Consulta não encontrada' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar uma nova consulta
router.post('/', async (req, res) => {
    try {
        const { data, id_pet, id_veterinario, observacoes } = req.body;
        if (!data || !id_pet || !id_veterinario || !observacoes) {
            return res.status(400).json({ error: 'Faltando dados para criar a consulta' });
        }
        const [result] = await Consultas.create({ data, id_pet, id_veterinario, observacoes });
        res.status(201).json({ id_consulta: result.insertId, data, id_pet, id_veterinario, observacoes });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar uma consulta
router.put('/:id', async (req, res) => {
    try {
        const { data, id_pet, id_veterinario, observacoes } = req.body;
        await Consultas.update(req.params.id, { data, id_pet, id_veterinario, observacoes });
        res.json({ message: 'Consulta atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para deletar uma consulta
router.delete('/:id', async (req, res) => {
    try {
        await Consultas.delete(req.params.id);
        res.json({ message: 'Consulta deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
