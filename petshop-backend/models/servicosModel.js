const db = require('../database/db');

// Modelo de Serviços
const Servicos = {
    // Recuperar todos os serviços
    getAll: () => db.query('SELECT * FROM servicos'),
    
    // Recuperar um serviço por ID
    getById: (id) => db.query('SELECT * FROM servicos WHERE id = ?', [id]),

    // Criar um novo serviço
    create: (data) =>
        db.query(
            'INSERT INTO servicos (nome, descricao, preco) VALUES (?, ?, ?)',
            [data.nome, data.descricao, data.preco]
        ),

    // Atualizar um serviço
    update: (id, data) =>
        db.query(
            'UPDATE servicos SET nome = ?, descricao = ?, preco = ? WHERE id = ?',
            [data.nome, data.descricao, data.preco, id]
        ),

    // Deletar um serviço
    delete: (id) => db.query('DELETE FROM servicos WHERE id = ?', [id]),
};

module.exports = Servicos;
