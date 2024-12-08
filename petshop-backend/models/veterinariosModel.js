const db = require('../database/db');

// Modelo de Veterinários
const Veterinarios = {
    // Recuperar todos os veterinários
    getAll: () => db.query('SELECT * FROM veterinarios'),
    
    // Recuperar um veterinário por ID
    getById: (id) => db.query('SELECT * FROM veterinarios WHERE id_veterinario = ?', [id]),

    // Criar um novo veterinário
    create: (data) =>
        db.query(
            'INSERT INTO veterinarios (nome, especialidade, telefone, email) VALUES (?, ?, ?, ?)',
            [data.nome, data.especialidade, data.telefone, data.email]
        ),

    // Atualizar um veterinário
    update: (id, data) =>
        db.query(
            'UPDATE veterinarios SET nome = ?, especialidade = ?, telefone = ?, email = ? WHERE id_veterinario = ?',
            [data.nome, data.especialidade, data.telefone, data.email, id]
        ),

    // Deletar um veterinário
    delete: (id) => db.query('DELETE FROM veterinarios WHERE id_veterinario = ?', [id]),
};

module.exports = Veterinarios;
