// src/components/Header.js
import react from 'react';

function Header() {
    return (
        <header className="header">
            {/* NAVBAR */}
            <nav class="bg-indigo-950 p-6">
                <div class="container mx-auto flex justify-between items-center">
                    {/* Itens a esquerda */}
                    <div class='flex items-center space-x-6'>
                        <a href="#" class="text-white font-bold hover:text-gray-300">LOGO</a>
                        <a href="#" class="text-white font-bold hover:text-gray-300">COLOCACOES</a>
                        <a href="#" class="text-white font-bold hover:text-gray-300">SORTEADOR ALEATORIO</a>
                        <a href="#" class="text-white font-bold hover:text-gray-300">REGRAS</a>
                        <a href="#" class="text-white font-bold hover:text-gray-300">SOBRE NOS</a>
                    </div>

                    {/* Itens à direita */}
                    <div class="flex items-center space-x-6">

                        <ul class="flex space-x-6 text-white">
                            <li><a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Login
                            </a></li>
                            <li><a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cadastrar</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* NAVBAR */}
        </header>
    );
}

export default Header;