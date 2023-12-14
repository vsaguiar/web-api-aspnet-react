import React from "react";
import './style.css';
import { FiCornerDownLeft, FiUserPlus } from 'react-icons/fi';
import { Link, useParams } from "react-router-dom";

export default function NovoAluno() {

    const { alunoId } = useParams();

    return (
        <div className="novo-aluno-container">
            <div className="content">
                <section className="form">
                    <FiUserPlus size="105" color="#17202a" />
                    <span className="m-3">{alunoId === '0' ? 'Incluir Novo Aluno' : 'Atualizar Aluno'}</span>

                </section>
                <form>
                    <input placeholder="Nome" />
                    <input placeholder="E-mail" />
                    <input placeholder="Idade" />
                    <button className="button mb-3" type="submit">{alunoId === '0' ? 'Incluir' : 'Atualizar'}</button>
                    <Link className="back-link" to="/alunos">
                        <FiCornerDownLeft size="23" color="#17202a" />
                        Retornar
                    </Link>
                </form>
            </div>
        </div>
    );
}