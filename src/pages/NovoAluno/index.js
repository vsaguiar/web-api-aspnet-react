import React from "react";
import './style.css';
import { FiCornerDownLeft, FiUserPlus } from 'react-icons/fi';
import { Link } from "react-router-dom";

export default function NovoAluno() {
    return (
        <div className="novo-aluno-container">
            <div className="content">
                <section className="form">
                    <FiUserPlus size="105" color="#17202a" />
                    <span className="m-3">Incluir Novo Aluno</span>
                    
                </section>
                <form>
                    <input placeholder="Nome" />
                    <input placeholder="E-mail" />
                    <input placeholder="Idade" />
                    <button className="button mb-3" type="submit">Incluir</button>
                    <Link className="back-link" to="/alunos">
                        <FiCornerDownLeft size="23" color="#17202a" />
                        Retornar
                    </Link>
                </form>
            </div>
        </div>
    );
}