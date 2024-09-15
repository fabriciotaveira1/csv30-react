// src/pages/random-sort/containers/random-sort.js
import React, { useState } from 'react';
import SelectComponent from '../../../components/SelectComponent';

function RandomSortContainerRight() {
    const kindSortOptions = [
        { id: 1, value: 'Aleatório' },
        { id: 2, value: 'Por Elo' },
        { id: 3, value: 'Por Nome' },
    ]

    const [selectedKind, setSelectedKind] = useState('');

    return (
        <div className="random-sort-container-left" class="container h-full bg-white text-gray-700 font-semibold mb-2 p-4">
            <h3 class="text-center text-2xl font-bold mb-4">EQUIPES</h3>
            <div class="flex items-center space-x-4">
                <label htmlFor="qttTeam" class="text-gray-700 font-semibold">
                    Quantidade de Equipes:
                </label>
                <input
                    type="number"
                    id="qttTeam"
                    placeholder="0"
                    class="w-20 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    required
                />
            </div>
            <label htmlFor="kindSort" class="text-gray-700 font-semibold">
                </label>
                
                <SelectComponent
                options={kindSortOptions}
                label="Tipo de Sorteio:"
                value={selectedKind}
            />
        </div>
    );
}

export default RandomSortContainerRight;
