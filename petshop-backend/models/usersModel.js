const db = require('../database/db');

// Modelo de Usuários
const Users = {
    getAll: () => db.query('SELECT * FROM users'),

    getById: (id) => db.query('SELECT * FROM users WHERE id = ?', [id]),

    getByEmail: (email) => db.query('SELECT * FROM users WHERE email = ?', [email]),

    create: (data) =>
        db.query(
            'INSERT INTO users (nome, email, senha, role) VALUES (?, ?, ?, ?)',
            [data.nome, data.email, data.senha, data.role || 'cliente']
        ),

    update: (id, data) =>
        db.query(
            'UPDATE users SET nome = ?, email = ?, senha = ?, role = ? WHERE id = ?',
            [data.nome, data.email, data.senha, data.role, id]
        ),

    delete: (id) => db.query('DELETE FROM users WHERE id = ?', [id]),
};

module.exports = Users;
