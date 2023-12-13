import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import logoCadastro from '../../assets/novoAluno.png';
import { FiLogOut, FiEdit, FiUserX } from 'react-icons/fi';
import { BsSearch } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Alunos() {
    return (
        <div className="aluno-container">
            <header>
                <img src={logoCadastro} alt="Cadastro" />
                <span className="me-2">Bem-vindo</span>

                <Link className="button" to="aluno/novo">Novo Aluno</Link>
                <button type="button" title="Sair do Sistema">
                    <FiLogOut size={35} color="#17202a" />
                </button>
            </header>

            <form>
                <div className="row">
                    <div className="col-md-11 col-sm-10 col-10">
                        <input type="text" placeholder="Filtrar por nome" />
                    </div>
                    <div className="col-md-1 col-sm-1 col-1 mt-4">
                        <button type="button" title="Filtrar">
                            <BsSearch />
                        </button>
                    </div>
                </div>
            </form>

            <br/>
            <br/>
            <br/>
            <h1>Relação de Alunos</h1>
            <ul>
                <li>
                    <b>Nome: </b>Paulo<br/><br/>
                    <b>Nome: </b>paulo@teste.com<br/><br/>
                    <b>Nome: </b>22<br/><br/>
                    <button type="button" title="Editar">
                        <FiEdit size="25" color="#17202a" />
                    </button>
                    <button type="button" title="Excluir">
                        <FiUserX size="25" color="#17202a" />
                    </button>
                </li>
                <li>
                    <b>Nome: </b>Paulo<br/><br/>
                    <b>Nome: </b>paulo@teste.com<br/><br/>
                    <b>Nome: </b>22<br/><br/>
                    <button type="button" title="Editar">
                        <FiEdit size="25" color="#17202a" />
                    </button>
                    <button type="button" title="Excluir">
                        <FiUserX size="25" color="#17202a" />
                    </button>
                </li>
            </ul>
        </div>
    );
}