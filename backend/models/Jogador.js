// backend/models/Jogador.js
const mongoose = require('mongoose');

const jogadorSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    elo: { type: String, required: true },
    equipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipe' },
});

module.exports = mongoose.model('Jogador', jogadorSchema);
