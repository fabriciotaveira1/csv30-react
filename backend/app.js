const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const playerRoutes = require('./routes/playerRoutes');
const path = require('path');
const app = express();

// Importando cors
const cors = require('cors');
app.use(cors());


// importando classes
const Usuario = require('./models/User');
const Jogador = require('./models/Jogador');
const Equipe = require('./models/Equipe');

// importando db
const connectDB = require('./db');

// conectando ao MongoDB

connectDB();

// Middleware para interpretar JSON
app.use(express.json());

// Rotas de autenticação
app.use('/api/auth', authRoutes);

// Rotas de jogadores
app.post('/api/jogadores', playerRoutes);

// Serve arquivos estáticos da pasta 'build'
app.use(express.static(path.join(__dirname, '../build')));

// Envia o index.html para qualquer outra rota
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
