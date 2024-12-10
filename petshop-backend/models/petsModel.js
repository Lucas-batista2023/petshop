const db = require('../database/db');

// Modelo de Pets
const Pets = {
    // Recuperar todos os pets
    getAll: () => db.query('SELECT * FROM pets'),
    
    // Recuperar um pet por ID
    getById: (id) => db.query('SELECT * FROM pets WHERE id = ?', [id]),

    // Criar um novo pet
    create: (data) =>
        db.query(
            'INSERT INTO pets (nome, especie, raca, idade, id_cliente) VALUES (?, ?, ?, ?, ?)',
            [data.nome, data.especie, data.raca, data.idade, data.id_cliente]
        ),

    // Atualizar um pet
    update: (id, data) =>
        db.query(
            'UPDATE pets SET nome = ?, especie = ?, raca = ?, idade = ?, id_cliente = ? WHERE id = ?',
            [data.nome, data.especie, data.raca, data.idade, data.id_cliente, id]
        ),

    // Deletar um pet
    delete: (id) => db.query('DELETE FROM pets WHERE id = ?', [id]),
};

module.exports = Pets;
