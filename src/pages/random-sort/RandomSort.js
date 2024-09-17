// src/pages/random-sort/RandomSort.js
import React from 'react';
import RandomSortContainerLeft from './containers/RandomSortContainerLeft.js';
import RandomSortContainerRight from './containers/RandomSortContainerRight.js';

function RandomSort() {
    return (
        <main className="w-full bg-gray-100 mx-auto p-6">
            {/* Seção de Introdução */}
            <section className="text-center py-12 bg-blue-600 text-white">
                <h1 className="text-6xl font-bold mb-4">SORTEIO DE JOGADORES</h1>
                <p className="text-xl mb-6">Organize seus times de forma rápida e eficiente com nosso sorteio automático.</p>
            </section>

            {/* Seção de Containers de Sorteio */}
            <section className="py-12">
                <div className="flex flex-wrap justify-center gap-8 mb-8">
                    <div className="flex-1 max-w-md bg-white p-6 rounded-lg shadow-lg">
                        <RandomSortContainerLeft />
                    </div>
                    <div className="flex-1 max-w-md bg-white p-6 rounded-lg shadow-lg">
                        <RandomSortContainerRight />
                    </div>
                </div>
            </section>
            
            <hr className="border-gray-300 mb-8" />
            
            {/* Seção de Lista de Jogadores */}
            <section className="py-12">
                <h2 className="text-4xl text-center font-bold mb-6">LISTA DE JOGADORES</h2>
                
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
            </section>

            {/* Seção de Call-to-Action */}
            <section className="text-center py-12 bg-blue-600 text-white">
                <h3 className="text-3xl font-semibold mb-4">Pronto para mais sorteios?</h3>
                <p className="text-lg mb-6">Entre em contato conosco para mais informações sobre como utilizar nosso sistema de sorteio.</p>
                <a
                    href="/contact"
                    className="inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition"
                >
                    Contate-nos
                </a>
            </section>
        </main>
    );
}

export default RandomSort;
