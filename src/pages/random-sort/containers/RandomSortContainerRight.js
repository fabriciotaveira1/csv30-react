// src/pages/random-sort/containers/random-sort.js
import React, { useState } from 'react';
import SelectComponent from '../../../components/SelectComponent';
import Btn from '../../../components/Btn';

function RandomSortContainerRight() {
    const kindSortOptions = [
        { id: 1, value: 'Aleatório' },
        { id: 2, value: 'Por Elo' },
        { id: 3, value: 'Por Nome' },
    ]
    
    const [selectedKind, setSelectedKind] = useState('');

    const handleSelectChange = (event) => {
        setSelectedKind(event.target.value); // Atualiza o valor selecionado
      };

    

    return (
        <div className="random-sort-container-left" class="container h-full bg-white text-gray-700 font-semibold mb-2 p-4 h-150">
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
                onChange={handleSelectChange} // Função que atualiza o estado ao selecionar uma opção
            />
            <div class="flex justify-center items-end mt-5">
                <Btn btnLabel="Sortear" />
            </div>
        </div >
    );
}

export default RandomSortContainerRight;
