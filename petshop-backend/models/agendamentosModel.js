const db = require('../database/db');

// Modelo de Agendamentos
const Agendamentos = {
    // Recuperar todos os agendamentos
    getAll: () => db.query('SELECT * FROM agendamentos'),
    
    // Recuperar um agendamento por ID
    getById: (id) => db.query('SELECT * FROM agendamentos WHERE id_agendamento = ?', [id]),

    // Criar um novo agendamento
    create: (data) =>
        db.query(
            'INSERT INTO agendamentos (data, id_cliente, id_servico, status) VALUES (?, ?, ?, ?)',
            [data.data, data.id_cliente, data.id_servico, data.status]
        ),

    // Atualizar um agendamento
    update: (id, data) =>
        db.query(
            'UPDATE agendamentos SET data = ?, id_cliente = ?, id_servico = ?, status = ? WHERE id_agendamento = ?',
            [data.data, data.id_cliente, data.id_servico, data.status, id]
        ),

    // Deletar um agendamento
    delete: (id) => db.query('DELETE FROM agendamentos WHERE id_agendamento = ?', [id]),
};

module.exports = Agendamentos;
