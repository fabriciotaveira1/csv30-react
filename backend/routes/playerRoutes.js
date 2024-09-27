// backend/routes/playerRoutes.js
const express = require('express');
const router = express.Router();
const Jogador = require('../models/Jogador');

// Rota para cadastrar jogadores 
// POST /api/jogadores/insert_jogador
router.post('/insert_player', async (req, res) => {
    const { nome, elo, equipe = null } = req.body;

    try {
        const jogador = new Jogador({ nome, elo, equipe });
        await jogador.save();
        res.status(201).json(jogador);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rota para deletar jogador por id
// DELETE /api/jogadores/delete/:id
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const jogador = await Jogador.findByIdAndDelete(id);
        if (!jogador) {
            return res.status(404).json({ message: 'Jogador não encontrado' });
        }
        res.status(200).json({ message: 'Jogador deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para atualizar jogador por id
// PUT /api/jogadores/update/:id
router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, elo, equipe } = req.body;

    try {
        const jogador = await Jogador.findByIdAndUpdate(
            id,
            { nome, elo, equipe },
            { new: true, runValidators: true }
        );
        if (!jogador) {
            return res.status(404).json({ message: 'Jogador não encontrado' });
        }
        res.status(200).json(jogador);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para listar todos os jogadores
// GET /api/jogadores/list
router.get('/list', async (req, res) => {
    try {
        const jogadores = await Jogador.find().populate('equipe', 'nome');
        res.status(200).json(jogadores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});





