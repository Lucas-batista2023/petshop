const express = require('express');
const router = express.Router();
const Veterinarios = require('../models/veterinariosModel');

// Rota para listar todos os veterinários
router.get('/', async (req, res) => {
    try {
        const [rows] = await Veterinarios.getAll();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para buscar um veterinário por ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await Veterinarios.getById(req.params.id);
        if (rows.length === 0) return res.status(404).json({ error: 'Veterinário não encontrado' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar um novo veterinário
router.post('/', async (req, res) => {
    try {
        const { nome, especialidade, telefone, email } = req.body;
        if (!nome || !especialidade || !telefone || !email) {
            return res.status(400).json({ error: 'Faltando dados para criar o veterinário' });
        }
        const [result] = await Veterinarios.create({ nome, especialidade, telefone, email });
        res.status(201).json({ id_veterinario: result.insertId, nome, especialidade, telefone, email });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um veterinário
router.put('/:id', async (req, res) => {
    try {
        const { nome, especialidade, telefone, email } = req.body;
        await Veterinarios.update(req.params.id, { nome, especialidade, telefone, email });
        res.json({ message: 'Veterinário atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para deletar um veterinário
router.delete('/:id', async (req, res) => {
    try {
        await Veterinarios.delete(req.params.id);
        res.json({ message: 'Veterinário deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
