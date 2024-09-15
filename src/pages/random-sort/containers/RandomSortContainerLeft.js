// src/pages/random-sort/containers/random-sort.js
import React, { useState } from 'react';
import SelectComponent from '../../../components/SelectComponent';

function RandomSortContainerLeft() {
    // Estado para armazenar os valores selecionados
    const [selectedElo, setSelectedElo] = useState('');

    // Listas de opções para os selects
    const eloOptions = [
        { id: 1, value: 'Sem Elo' },
        { id: 2, value: 'Ferro' },
        { id: 3, value: 'Bronze' },
        { id: 4, value: 'Prata' },
        { id: 5, value: 'Ouro' },
        { id: 6, value: 'Platina' },
        { id: 7, value: 'Esmeralda' },
        { id: 8, value: 'Mestre' },
        { id: 9, value: 'Grão-Mestre' },
        { id: 10, value: 'Desafiante' }
    ];

    return (
        <div className="random-sort-container-left" class="container h-full bg-white text-gray-700 font-semibold mb-2 p-4">
            <h3 class="text-center text-2xl font-bold mb-4">ADICIONE UM JOGADOR</h3>
            <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <label htmlFor="playerName" class="block text-gray-700 font-semibold mb-2">
                    Nome do Jogador:
                </label>
                <input
                    type="text"
                    id="playerName"
                    placeholder="Digite o nome do jogador"
                    class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <SelectComponent
                options={eloOptions}
                label="Elo:"
                value={selectedElo}
            />
        </div>
    );
}

export default RandomSortContainerLeft;
