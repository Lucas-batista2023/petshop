const db = require('../database/db');

// Modelo de Agendamentos
const Agendamentos = {
    // Recuperar todos os agendamentos
    getAll: () => db.query('SELECT * FROM agendamentos'),

    // Recuperar um agendamento por ID
    getById: (id) => db.query('SELECT * FROM agendamentos WHERE id = ?', [id]),  // Alterado para 'id'

    // Criar um novo agendamento
    create: (data) =>
        db.query(
            'INSERT INTO agendamentos (data, id_cliente, id_servico, status) VALUES (?, ?, ?, ?)',
            [data.data, data.id_cliente, data.id_servico, data.status]
        ),

    // Atualizar um agendamento
    update: (id, data) => {
        console.log('Dados recebidos no backend:', data);  // Verificando os dados recebidos
        return db.query(
            'UPDATE agendamentos SET data = ?, id_cliente = ?, id_servico = ?, status = ? WHERE id = ?',  // Alterado para 'id'
            [data.data, data.id_cliente, data.id_servico, data.status, id]  // Alterado para 'id'
        );
    },

    // Deletar um agendamento
    delete: (id) => {
        return db.query('DELETE FROM agendamentos WHERE id = ?', [id])  // Alterado para 'id'
            .then(result => {
                if (result.affectedRows === 0) {
                    throw new Error('Agendamento não encontrado');
                }
                return result;
            })
            .catch(error => {
                console.error('Erro ao deletar agendamento:', error);
                throw error;
            });
    },
};

module.exports = Agendamentos;
