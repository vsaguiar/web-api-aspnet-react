import React from "react";
import './styles.css';
import logoImage from '../../assets/login.png';

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="Login" id="img1" />
                
                <form>
                    <h1> Cadastro de Alunos </h1>
                    <input placeholder="E-mail" />
                    <input type="password" placeholder="Password" />
                    <button className="button" type="submit">Login</button>
                </form>

            </section>
        </div>
    )
}