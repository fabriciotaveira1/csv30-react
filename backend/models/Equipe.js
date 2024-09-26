// backend/models/Equipe.js
const mongoose = require('mongoose');

const equipeSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    jogadores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Jogador' }]
});

module.exports = mongoose.model('Equipe', equipeSchema);
