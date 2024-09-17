// src/pages/random-sort/random-sort.js
import React from 'react';
import RandomSortContainerLeft from './containers/RandomSortContainerLeft.js';
import RandomSortContainerRight from './containers/RandomSortContainerRight.js';

function RandomSort() {
    return (
        <main className="w-full bg-blue-600 mx-auto p-6">
            {/* Título do Sorteio */}
            <h1 className="text-6xl text-center text-white font-bold mb-8">SORTEIO DE JOGADORES</h1>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="flex-1 max-w-md bg-blue-800 p-4 rounded-lg shadow-lg">
                    <RandomSortContainerLeft />
                </div>
                <div className="flex-1 max-w-md bg-blue-800 p-4 rounded-lg shadow-lg">
                    <RandomSortContainerRight />
                </div>
            </div>
            
            <hr className="border-white mb-8" />
            
            {/* Lista de Jogadores */}
            <h2 className="text-4xl text-center text-white font-bold mb-6">LISTA DE JOGADORES</h2>
            
            <div className="flex flex-wrap justify-center gap-6">
                <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 max-w-sm w-full">
                    <span className="text-gray-900 text-xl font-semibold mb-4">Equipe 1</span>
                    <hr className="border-gray-300 mb-4" />
                    <div className="flex flex-col space-y-2">
                        <span className="text-gray-700">Jogador 1</span>
                        <span className="text-gray-700">Jogador 2</span>
                        <span className="text-gray-700">Jogador 3</span>
                        <span className="text-gray-700">Jogador 4</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default RandomSort;
