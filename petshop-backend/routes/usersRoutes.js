const express = require('express');
const bcrypt = require('bcrypt'); // Para hashing e comparação de senhas
const jwt = require('jsonwebtoken'); // Para geração do token JWT
const router = express.Router();
const Users = require('../models/usersModel');

const SECRET_KEY = 'root'; // Substitua pela sua chave secreta armazenada no .env

// Rota para listar todos os usuários
router.get('/', async (req, res) => {
    try {
        const [rows] = await Users.getAll();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para buscar um usuário por ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await Users.getById(req.params.id);
        if (rows.length === 0) return res.status(404).json({ error: 'Usuário não encontrado' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para buscar um usuário por email
router.get('/email/:email', async (req, res) => {
    try {
        const [rows] = await Users.getByEmail(req.params.email);
        if (rows.length === 0) return res.status(404).json({ error: 'Usuário não encontrado' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar um novo usuário
router.post('/', async (req, res) => {
    try {
        const { nome, email, senha, role } = req.body;
        if (!nome || !email || !senha) {
            return res.status(400).json({ error: 'Nome, email e senha são obrigatórios' });
        }

        // Criptografar a senha antes de salvar
        const hashedSenha = await bcrypt.hash(senha, 10);

        const [result] = await Users.create({ nome, email, senha: hashedSenha, role });
        res.status(201).json({ id: result.insertId, nome, email, role });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um usuário
router.put('/:id', async (req, res) => {
    try {
        const { nome, email, senha, role } = req.body;

        // Criptografar a senha antes de atualizar
        const hashedSenha = senha ? await bcrypt.hash(senha, 10) : null;

        await Users.update(req.params.id, { nome, email, senha: hashedSenha, role });
        res.json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para deletar um usuário
router.delete('/:id', async (req, res) => {
    try {
        await Users.delete(req.params.id);
        res.json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para login de usuários
// Rota de login
router.post('/login', async (req, res) => {
    const { email, senha } = req.body;
  
    try {
      // Verificar se o email existe
      const [userRows] = await Users.getByEmail(email);
      if (userRows.length === 0) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
  
      const user = userRows[0];
  
      // Comparar a senha fornecida com a senha hashada no banco de dados
      const isPasswordValid = await bcrypt.compare(senha, user.senha);
      if (!isPasswordValid) {
        return res.status(400).json({ error: 'Senha incorreta' });
      }
  
      // Gerar token JWT
      const token = jwt.sign(
        { id: user.id, nome: user.nome, email: user.email, role: user.role },
        SECRET_KEY,
        { expiresIn: '1h' } // Token expira em 1 hora
      );
  
      // Retornar o token JWT
      res.json({ message: 'Login bem-sucedido', token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  

module.exports = router;
