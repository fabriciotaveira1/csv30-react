// src/pages/ContactPage.js
import React from 'react';

function ContactPage() {
    return (
        <main className="w-full bg-gray-100 mx-auto p-6">
            <h1 className="text-6xl text-center text-blue-800 font-bold mb-6">Contato</h1>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
                <h2 className="text-3xl text-blue-600 font-semibold mb-4">Entre em Contato</h2>
                <p className="text-gray-700 mb-6">
                    Se você tiver alguma dúvida ou quiser saber mais sobre nossos serviços, entre em contato conosco preenchendo o formulário abaixo.
                </p>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-600 font-semibold" htmlFor="name">Nome</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border border-gray-300 p-2 rounded-lg"
                            placeholder="Digite seu nome"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-semibold" htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border border-gray-300 p-2 rounded-lg"
                            placeholder="Digite seu e-mail"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-semibold" htmlFor="message">Mensagem</label>
                        <textarea
                            id="message"
                            className="w-full border border-gray-300 p-2 rounded-lg"
                            rows="5"
                            placeholder="Digite sua mensagem"
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700">
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </main>
    );
}

export default ContactPage;
