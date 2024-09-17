// src/pages/HomePage.js
import React from 'react';

function HomePage() {
    return (
        <main className="w-full bg-gray-100 mx-auto p-6">
            {/* Seção de Introdução */}
            <section className="text-center py-12 bg-blue-600 text-white">
                <h1 className="text-6xl font-bold mb-4">Bem-vindo a Nossa Plataforma</h1>
                <p className="text-xl mb-6">Transformamos suas ideias em soluções inovadoras e eficazes.</p>
                <a
                    href="#about"
                    className="inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition"
                >
                    Saiba Mais
                </a>
            </section>

            {/* Seção de Destaques */}
            <section id="about" className="py-12">
                <h2 className="text-4xl text-center font-bold mb-8">O Que Oferecemos</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
                        <h3 className="text-2xl font-semibold mb-4">Desenvolvimento Web</h3>
                        <p className="text-gray-700">
                            Criamos sites e aplicativos web personalizados para atender às suas necessidades e objetivos.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
                        <h3 className="text-2xl font-semibold mb-4">Consultoria em TI</h3>
                        <p className="text-gray-700">
                            Oferecemos consultoria especializada para ajudar sua empresa a alcançar eficiência tecnológica.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
                        <h3 className="text-2xl font-semibold mb-4">Suporte e Manutenção</h3>
                        <p className="text-gray-700">
                            Garantimos suporte contínuo e manutenção para manter seus sistemas funcionando sem problemas.
                        </p>
                    </div>
                </div>
            </section>

            {/* Seção de Call-to-Action */}
            <section className="text-center py-12 bg-blue-600 text-white">
                <h3 className="text-3xl font-semibold mb-4">Pronto para começar?</h3>
                <p className="text-lg mb-6">Entre em contato conosco hoje mesmo e descubra como podemos ajudar você a alcançar seus objetivos.</p>
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

export default HomePage;
