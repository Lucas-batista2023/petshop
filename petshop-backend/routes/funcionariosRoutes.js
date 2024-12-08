const express = require('express');
const router = express.Router();
const Funcionarios = require('../models/funcionariosModel');

// Rota para listar todos os funcionários
router.get('/', async (req, res) => {
    try {
        const [rows] = await Funcionarios.getAll();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para buscar um funcionário por ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await Funcionarios.getById(req.params.id);
        if (rows.length === 0) return res.status(404).json({ error: 'Funcionário não encontrado' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar um novo funcionário
router.post('/', async (req, res) => {
    try {
        const { nome, cargo, telefone, email } = req.body;
        if (!nome || !cargo || !telefone || !email) {
            return res.status(400).json({ error: 'Faltando dados para criar o funcionário' });
        }
        const [result] = await Funcionarios.create({ nome, cargo, telefone, email });
        res.status(201).json({ id_funcionario: result.insertId, nome, cargo, telefone, email });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um funcionário
router.put('/:id', async (req, res) => {
    try {
        const { nome, cargo, telefone, email } = req.body;
        await Funcionarios.update(req.params.id, { nome, cargo, telefone, email });
        res.json({ message: 'Funcionário atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para deletar um funcionário
router.delete('/:id', async (req, res) => {
    try {
        await Funcionarios.delete(req.params.id);
        res.json({ message: 'Funcionário deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
