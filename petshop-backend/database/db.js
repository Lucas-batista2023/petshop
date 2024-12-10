const mysql = require('mysql2');
const dotenv = require('dotenv');

// Carregar variáveis de ambiente
dotenv.config();

// Criar a conexão com o banco de dados
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

module.exports = pool.promise();



//VERIFICAR
/*const mysql = require('mysql2/promise');


const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'petshop_db',
});

module.exports = db;*/
