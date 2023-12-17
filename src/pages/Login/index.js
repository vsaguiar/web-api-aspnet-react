import React, { useState } from "react";
import './styles.css';
import logoImage from '../../assets/login.png';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useNavigate(); // para poder redirecionar o usuário

    async function login(event) {
        event.preventDefault(); // evite o refresh no formulário

        const data = {
            email, 
            password
        };

        try {
            const response = await api.post('api/account/loginuser', data);

            localStorage.setItem('email', email);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('expiration', response.data.expiration);

            history('/alunos');

        } catch (error) {
            alert('Falha no login. \n' + error);
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="Login" id="img1" />

                <form onSubmit={login}>
                    <h1> Cadastro de Alunos </h1>

                    <input placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input type="password" placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="button" type="submit">Login</button>
                </form>

            </section>
        </div>
    )
}