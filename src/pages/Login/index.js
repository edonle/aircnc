import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {

    const [email, setEmail] = useState('');

    async function handleSubmit(event) {

        event.preventDefault();
        
        const response = await api.post('/sessions', { email });

        const { _id } = response.data;

        //Grava no banco de dados do navegador
        localStorage.setItem('user', _id);

        history.push('/dashboard');
    }

    return (
        // Fragment - tag vazia
        <>
            <p>Oferaça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa.</p>

            <form onSubmit={handleSubmit}>
            <label 
                htmlFor="email">
                E-mail *
            </label>
            <input 
                type="email"             
                id="email" 
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />

            <button type="submit" className="btn">Entrar</button>
            </form>
        </>
    )
}