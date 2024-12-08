const db = require('../database/db');

// Modelo de Consultas
const Consultas = {
    // Recuperar todas as consultas
    getAll: () => db.query('SELECT * FROM consultas'),

    // Recuperar uma consulta por ID
    getById: (id) => db.query('SELECT * FROM consultas WHERE id_consulta = ?', [id]),

    // Criar uma nova consulta
    create: (data) =>
        db.query(
            'INSERT INTO consultas (data, id_pet, id_veterinario, observacoes) VALUES (?, ?, ?, ?)',
            [data.data, data.id_pet, data.id_veterinario, data.observacoes]
        ),

    // Atualizar uma consulta
    update: (id, data) =>
        db.query(
            'UPDATE consultas SET data = ?, id_pet = ?, id_veterinario = ?, observacoes = ? WHERE id_consulta = ?',
            [data.data, data.id_pet, data.id_veterinario, data.observacoes, id]
        ),

    // Deletar uma consulta
    delete: (id) => db.query('DELETE FROM consultas WHERE id_consulta = ?', [id]),
};

module.exports = Consultas;
