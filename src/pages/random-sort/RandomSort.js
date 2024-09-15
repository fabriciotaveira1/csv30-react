// src/pages/random-sort/random-sort.js
import React from 'react';
import RandomSortContainerLeft from './containers/RandomSortContainerLeft.js';
import RandomSortContainerRight from './containers/RandomSortContainerRight.js';

function RandomSort() {
    return (
        <main className="random-sort" class="w-full bg-indigo-400 mx-auto p-2">
            <h1 class="text-6xl text-center text-white font-bold mb-4">SORTEIO DE JOGADORES  </h1>
            <div class='flex flex-row justify-around'>
                <div className="random-sort-container-left">
                <RandomSortContainerLeft />
                </div>
                <div className="random-sort-container-right">
                <RandomSortContainerRight />
                </div>
            </div>
        </main>
    );
}

export default RandomSort;
