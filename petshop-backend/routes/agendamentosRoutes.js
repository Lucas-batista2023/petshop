const express = require('express');
const router = express.Router();
const Agendamentos = require('../models/agendamentosModel');

// Rota para listar todos os agendamentos
router.get('/', async (req, res) => {
    try {
        const [rows] = await Agendamentos.getAll();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para buscar um agendamento por ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await Agendamentos.getById(req.params.id);
        if (rows.length === 0) return res.status(404).json({ error: 'Agendamento não encontrado' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar um novo agendamento
router.post('/', async (req, res) => {
    try {
        const { data, id_cliente, id_servico, status } = req.body;
        if (!data || !id_cliente || !id_servico || !status) {
            return res.status(400).json({ error: 'Faltando dados para criar o agendamento' });
        }
        const [result] = await Agendamentos.create({ data, id_cliente, id_servico, status });
        res.status(201).json({ id_agendamento: result.insertId, data, id_cliente, id_servico, status });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um agendamento
router.put('/:id', async (req, res) => {
    try {
        const { data, id_cliente, id_servico, status } = req.body;
        await Agendamentos.update(req.params.id, { data, id_cliente, id_servico, status });
        res.json({ message: 'Agendamento atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para deletar um agendamento
router.delete('/:id', async (req, res) => {
    try {
        await Agendamentos.delete(req.params.id);
        res.json({ message: 'Agendamento deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;