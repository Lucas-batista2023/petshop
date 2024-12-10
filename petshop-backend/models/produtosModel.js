const db = require('../database/db');

// Modelo de Produtos
const Produtos = {
    // Recuperar todos os produtos
    getAll: () => db.query('SELECT * FROM produtos'),
    
    // Recuperar um produto por ID
    getById: (id) => db.query('SELECT * FROM produtos WHERE id = ?', [id]),

    // Criar um novo produto
    create: (data) =>
        db.query(
            'INSERT INTO produtos (nome, descricao, preco, estoque) VALUES (?, ?, ?, ?)',
            [data.nome, data.descricao, data.preco, data.estoque]
        ),

    // Atualizar um produto
    update: (id, data) =>
        db.query(
            'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, estoque = ? WHERE id = ?',
            [data.nome, data.descricao, data.preco, data.estoque, id]
        ),

    // Deletar um produto
    delete: (id) => db.query('DELETE FROM produtos WHERE id = ?', [id]),
};

module.exports = Produtos;
