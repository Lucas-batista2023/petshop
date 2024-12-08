const db = require('../database/db');

// Modelo de Clientes
const Clientes = {
    getAll: () => db.query('SELECT * FROM clientes'),
    getById: (id) => db.query('SELECT * FROM clientes WHERE id = ?', [id]),
    create: (data) =>
        db.query('INSERT INTO clientes (nome, telefone, email, endereco) VALUES (?, ?, ?, ?)', [
            data.nome,
            data.telefone,
            data.email,
            data.endereco,
        ]),
    update: (id, data) =>
        db.query('UPDATE clientes SET nome = ?, telefone = ?, email = ?, endereco = ? WHERE id = ?', [
            data.nome,
            data.telefone,
            data.email,
            data.endereco,
            id,
        ]),
    delete: (id) => db.query('DELETE FROM clientes WHERE id = ?', [id]),
};

module.exports = Clientes;
