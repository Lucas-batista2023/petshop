const db = require('../database/db');

// Modelo de Vendas
const Vendas = {
    // Recuperar todas as vendas
    getAll: () => db.query('SELECT * FROM vendas'),
    
    // Recuperar uma venda por ID
    getById: (id) => db.query('SELECT * FROM vendas WHERE id = ?', [id]),

    // Criar uma nova venda
    create: (data) =>
        db.query(
            'INSERT INTO vendas (data, id_cliente, total) VALUES (?, ?, ?)',
            [data.data, data.id_cliente, data.total]
        ),

    // Atualizar uma venda
    update: (id, data) =>
        db.query(
            'UPDATE vendas SET data = ?, id_cliente = ?, total = ? WHERE id = ?',
            [data.data, data.id_cliente, data.total, id]
        ),

    // Deletar uma venda
    delete: (id) => db.query('DELETE FROM vendas WHERE id = ?', [id]),
};

module.exports = Vendas;
