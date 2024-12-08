const db = require('../database/db');

// Modelo de Funcionarios
const Funcionarios = {
    // Recuperar todos os funcionários
    getAll: () => db.query('SELECT * FROM funcionarios'),

    // Recuperar um funcionário por ID
    getById: (id) => db.query('SELECT * FROM funcionarios WHERE id_funcionario = ?', [id]),

    // Criar um novo funcionário
    create: (data) =>
        db.query(
            'INSERT INTO funcionarios (nome, cargo, telefone, email) VALUES (?, ?, ?, ?)',
            [data.nome, data.cargo, data.telefone, data.email]
        ),

    // Atualizar um funcionário
    update: (id, data) =>
        db.query(
            'UPDATE funcionarios SET nome = ?, cargo = ?, telefone = ?, email = ? WHERE id_funcionario = ?',
            [data.nome, data.cargo, data.telefone, data.email, id]
        ),

    // Deletar um funcionário
    delete: (id) => db.query('DELETE FROM funcionarios WHERE id_funcionario = ?', [id]),
};

module.exports = Funcionarios;
