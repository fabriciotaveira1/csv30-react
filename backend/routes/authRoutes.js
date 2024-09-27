// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Rota de registro
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Verificar se o email já está cadastrado
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email já está registrado' });
    }

    // Criar novo usuário
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao registrar o usuário' });
  }
});

// Rota de login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {

    // Encontrar o usuário pelo email
    const user = await User.findOne({ email });
    if (!user) {
      console.log('Usuário não encontrado.');
      return res.status(400).json({ message: 'Email não encontrado' });
    }

    // Verificar a senha
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      console.log('Senha incorreta para o usuário:', email);
      return res.status(400).json({ message: 'Senha incorreta' });
    }

    // Gerar token JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    console.log('Token gerado com sucesso:', token);
    res.json({ token });
  } catch (err) {
    console.error('Erro ao autenticar o usuário:', err);
    res.status(500).json({ error: 'Erro ao autenticar o usuário' });
  }
});


module.exports = router;
