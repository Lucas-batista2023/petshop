// login.js (Node.js / Express)
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('./db'); // Sua conexão com o banco de dados MySQL
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const [user] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (user && bcrypt.compareSync(senha, user.senha)) {
      // Geração de token JWT
      const token = jwt.sign({ id: user.id, role: user.role }, 'secret-key', { expiresIn: '1h' });
      res.json({ success: true, token });
    } else {
      res.status(401).json({ success: false, message: 'Email ou senha incorretos' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erro ao realizar o login' });
  }
});

module.exports = router;
