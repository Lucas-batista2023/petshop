const db = require('../database/db');

// Modelo de ItensVenda
const ItensVenda = {
    // Recuperar todos os itens de venda
    getAll: () => db.query('SELECT * FROM itensvenda'),

    // Recuperar um item de venda por ID
    getById: (id) => db.query('SELECT * FROM itensvenda WHERE id_item = ?', [id]),

    // Criar um novo item de venda
    create: (data) =>
        db.query(
            'INSERT INTO itensvenda (id_venda, id_produto, quantidade, preco_unitario) VALUES (?, ?, ?, ?)',
            [data.id_venda, data.id_produto, data.quantidade, data.preco_unitario]
        ),

    // Atualizar um item de venda
    update: (id, data) =>
        db.query(
            'UPDATE itensvenda SET id_venda = ?, id_produto = ?, quantidade = ?, preco_unitario = ? WHERE id_item = ?',
            [data.id_venda, data.id_produto, data.quantidade, data.preco_unitario, id]
        ),

    // Deletar um item de venda
    delete: (id) => db.query('DELETE FROM itensvenda WHERE id_item = ?', [id]),
};

module.exports = ItensVenda;
