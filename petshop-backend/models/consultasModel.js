const db = require('../database/db');

// Modelo de Consultas
const Consultas = {
    // Recuperar todas as consultas
    getAll: () => db.query('SELECT * FROM consultas'),

    // Recuperar uma consulta por ID
    getById: (id) => db.query('SELECT * FROM consultas WHERE id = ?', [id]),  // Corrigido para 'id' ao invés de 'id_consulta'

    // Criar uma nova consulta
    create: (data) =>
        db.query(
            'INSERT INTO consultas (data, id_pet, id_veterinario, observacoes) VALUES (?, ?, ?, ?)',
            [data.data, data.id_pet, data.id_veterinario, data.observacoes]
        ),

    // Atualizar uma consulta
    update: (id, data) => {
        console.log('Dados recebidos no backend:', data);  // Verificando os dados recebidos
        return db.query(
            'UPDATE consultas SET data = ?, id_pet = ?, id_veterinario = ?, observacoes = ? WHERE id = ?',  // Alterado para 'id'
            [data.data, data.id_pet, data.id_veterinario, data.observacoes, id]  // Alterado para 'id'
        );
    },

    // Deletar uma consulta
    delete: (id) => {
        return db.query('DELETE FROM consultas WHERE id = ?', [id])  // Alterado para 'id'
            .then(result => {
                if (result.affectedRows === 0) {
                    throw new Error('Consulta não encontrada');
                }
                return result;
            })
            .catch(error => {
                console.error('Erro ao deletar consulta:', error);
                throw error;
            });
    },
};

module.exports = Consultas;
