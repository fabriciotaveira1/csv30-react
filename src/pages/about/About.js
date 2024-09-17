// src/pages/AboutPage.js
import React from 'react';

function AboutPage() {
    return (
        <main className="w-full bg-gray-100 mx-auto p-4">
            <h1 className="text-6xl text-center text-blue-800 font-bold mb-6">Sobre Nós</h1>
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
                <h2 className="text-3xl text-blue-600 font-semibold mb-4">Quem Somos</h2>
                <p className="text-gray-700 leading-relaxed">
                    Somos uma equipe apaixonada por tecnologia e inovação, especializada em desenvolver soluções criativas e eficazes para nossos clientes. Nosso objetivo é transformar ideias em realidade, oferecendo produtos e serviços de alta qualidade que atendam às necessidades e expectativas dos nossos clientes.
                </p>
                <h2 className="text-3xl text-blue-600 font-semibold mt-6 mb-4">O Que Fazemos</h2>
                <p className="text-gray-700 leading-relaxed">
                    Desenvolvemos uma variedade de soluções, desde sites e aplicativos web até sistemas personalizados para diferentes setores. Nossa abordagem é centrada no cliente, garantindo que cada projeto seja único e adaptado às suas necessidades específicas. Com uma equipe dedicada e experiente, trabalhamos para entregar resultados excepcionais em cada etapa do processo.
                </p>
            </div>
        </main>
    );
}

export default AboutPage;
