// backend/models/Usuario.js
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    senha: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Usuario', usuarioSchema);
