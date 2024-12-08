const express = require('express');
const router = express.Router();
const Servicos = require('../models/servicosModel');

// Rota para listar todos os serviços
router.get('/', async (req, res) => {
    try {
        const [rows] = await Servicos.getAll();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para buscar um serviço por ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await Servicos.getById(req.params.id);
        if (rows.length === 0) return res.status(404).json({ error: 'Serviço não encontrado' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar um novo serviço
router.post('/', async (req, res) => {
    try {
        const { nome, descricao, preco } = req.body;
        if (!nome || !descricao || !preco) {
            return res.status(400).json({ error: 'Faltando dados para criar o serviço' });
        }
        const [result] = await Servicos.create({ nome, descricao, preco });
        res.status(201).json({ id_servico: result.insertId, nome, descricao, preco });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um serviço
router.put('/:id', async (req, res) => {
    try {
        const { nome, descricao, preco } = req.body;
        await Servicos.update(req.params.id, { nome, descricao, preco });
        res.json({ message: 'Serviço atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para deletar um serviço
router.delete('/:id', async (req, res) => {
    try {
        await Servicos.delete(req.params.id);
        res.json({ message: 'Serviço deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
