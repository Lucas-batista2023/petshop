const express = require('express');
const router = express.Router();
const Produtos = require('../models/produtosModel');

// Rota para listar todos os produtos
router.get('/', async (req, res) => {
    try {
        const [rows] = await Produtos.getAll();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para buscar um produto por ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await Produtos.getById(req.params.id);
        if (rows.length === 0) return res.status(404).json({ error: 'Produto não encontrado' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar um novo produto
router.post('/', async (req, res) => {
    try {
        const { nome, descricao, preco, estoque } = req.body;
        if (!nome || !descricao || !preco || !estoque) {
            return res.status(400).json({ error: 'Faltando dados para criar o produto' });
        }
        const [result] = await Produtos.create({ nome, descricao, preco, estoque });
        res.status(201).json({ id_produto: result.insertId, nome, descricao, preco, estoque });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um produto
router.put('/:id', async (req, res) => {
    try {
        const { nome, descricao, preco, estoque } = req.body;
        await Produtos.update(req.params.id, { nome, descricao, preco, estoque });
        res.json({ message: 'Produto atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para deletar um produto
router.delete('/:id', async (req, res) => {
    try {
        await Produtos.delete(req.params.id);
        res.json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
