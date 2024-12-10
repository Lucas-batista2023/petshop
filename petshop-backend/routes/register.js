// register.js (Node.js / Express)
const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./db'); // Sua conexão com o banco de dados MySQL
const router = express.Router();

router.post('/register', async (req, res) => {
  const { nome, email, senha, role } = req.body;

  try {
    // Verificar se o e-mail já está registrado
    const [existingUser] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'E-mail já registrado' });
    }

    // Criptografar a senha
    const hashedPassword = bcrypt.hashSync(senha, 10);

    // Inserir o novo usuário no banco de dados
    await db.query('INSERT INTO users (nome, email, senha, role) VALUES (?, ?, ?, ?)', [
      nome,
      email,
      hashedPassword,
      role,
    ]);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erro ao registrar o usuário' });
  }
});

module.exports = router;
