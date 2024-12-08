const express = require('express');
const router = express.Router();
const Pets = require('../models/petsModel');

// Rota para listar todos os pets
router.get('/', async (req, res) => {
    try {
        const [rows] = await Pets.getAll();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para buscar um pet por ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await Pets.getById(req.params.id);
        if (rows.length === 0) return res.status(404).json({ error: 'Pet não encontrado' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar um novo pet
router.post('/', async (req, res) => {
    try {
        const { nome, especie, raca, idade, id_cliente } = req.body;
        if (!nome || !especie || !raca || !idade || !id_cliente) {
            return res.status(400).json({ error: 'Faltando dados para criar o pet' });
        }
        const [result] = await Pets.create({ nome, especie, raca, idade, id_cliente });
        res.status(201).json({ id_pet: result.insertId, nome, especie, raca, idade, id_cliente });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um pet
router.put('/:id', async (req, res) => {
    try {
        const { nome, especie, raca, idade, id_cliente } = req.body;
        await Pets.update(req.params.id, { nome, especie, raca, idade, id_cliente });
        res.json({ message: 'Pet atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para deletar um pet
router.delete('/:id', async (req, res) => {
    try {
        await Pets.delete(req.params.id);
        res.json({ message: 'Pet deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
