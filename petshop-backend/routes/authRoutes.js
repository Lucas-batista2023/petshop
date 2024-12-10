const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../database/db'); // Seu arquivo de conexão com o banco de dados
const router = express.Router();

// Rota para registro
router.post('/register', async (req, res) => {
  const { nome, email, senha, role } = req.body;
  
  try {
    // Verifica se o usuário já existe
    const [existingUser] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'E-mail já registrado' });
    }
    
    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Insere o novo usuário no banco de dados
    await db.query('INSERT INTO users (nome, email, senha, role) VALUES (?, ?, ?, ?)', [nome, email, hashedPassword, role]);

    res.status(201).json({ success: true, message: 'Usuário registrado com sucesso' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erro ao registrar o usuário' });
  }
});

// Rota para login
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  
  try {
    console.log('Requisição de login recebida:', email); // Log para verificar os dados recebidos
    const [user] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (!user) {
      return res.status(401).json({ success: false, message: 'Email ou senha incorretos' });
    }

    const isPasswordValid = await bcrypt.compare(senha, user.senha);

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Email ou senha incorretos' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, 'secret-key', { expiresIn: '1h' });
    console.log('Usuário autenticado:', user); // Log para verificar o usuário autenticado
    res.json({ success: true, token });
  } catch (error) {
    console.error('Erro ao realizar o login:', error); // Log para capturar o erro
    res.status(500).json({ success: false, message: 'Erro ao realizar o login' });
  }
});




module.exports = router;
