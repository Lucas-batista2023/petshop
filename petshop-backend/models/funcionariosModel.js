const db = require('../database/db');

// Modelo de Funcionários
const Funcionarios = {
    // Recuperar todos os funcionários
    getAll: () => db.query('SELECT * FROM funcionarios'),

    // Recuperar um funcionário por ID
    getById: (id) => db.query('SELECT * FROM funcionarios WHERE id = ?', [id]),  // Corrigido para 'id' ao invés de 'id_funcionario'

    // Criar um novo funcionário
    create: (data) =>
        db.query(
            'INSERT INTO funcionarios (nome, cargo, telefone, email) VALUES (?, ?, ?, ?)',
            [data.nome, data.cargo, data.telefone, data.email]
        ),

    // Atualizar um funcionário
    update: (id, data) => {
        console.log('Dados recebidos no backend:', data);  // Verificando os dados recebidos
        return db.query(
            'UPDATE funcionarios SET nome = ?, cargo = ?, telefone = ?, email = ? WHERE id = ?',  // Alterado para 'id'
            [data.nome, data.cargo, data.telefone, data.email, id]  // Alterado para 'id'
        );
    },

    // Deletar um funcionário
    delete: (id) => {
        return db.query('DELETE FROM funcionarios WHERE id = ?', [id])  // Alterado para 'id'
            .then(result => {
                if (result.affectedRows === 0) {
                    throw new Error('Funcionário não encontrado');
                }
                return result;
            })
            .catch(error => {
                console.error('Erro ao deletar funcionário:', error);
                throw error;
            });
    },
};

module.exports = Funcionarios;
