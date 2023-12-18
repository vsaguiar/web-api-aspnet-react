import React, { useState, useEffect } from "react";
import './style.css';
import { Link, useNavigate } from "react-router-dom";
import logoCadastro from '../../assets/novoAluno.png';
import { FiLogOut, FiEdit, FiUserX } from 'react-icons/fi';
import { BsSearch } from "react-icons/bs";
import api from '../../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Alunos() {

    // const [nome, setNome] = useState('');
    const [alunos, setAlunos] = useState([]);

    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    const history = useNavigate();

    useEffect(() => {
        const buscarAlunos = async () => {
            try {
                const response = await api.get('api/alunos', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setAlunos(response.data);
            } catch (error) {
                alert('Erro ao buscar alunos. \n' + error);
            }
        };

        buscarAlunos();
    }, [token]);


    async function logout() {
        try {
            localStorage.clear();
            localStorage.setItem('token', '');
            history('/');
        } catch (error) {
            alert('Não foi possível sair do sistema. ' + error)
        }
    }

    async function editarAluno(id) {
        try {
            history(`/aluno/novo/${id}`);
        } catch (error) {
            alert('Não foi possível editar o aluno. ' + error);
        }
    }

    return (
        <div className="aluno-container">
            <header>
                <div className="row d-flex">
                    <div className="col-md-8 col-sm-8 col-12">
                        <img className="me-3" src={logoCadastro} alt="Cadastro" />
                        <span>Bem-vindo,<span style={{ fontWeight: 'bold', marginLeft: '5px' }}>{email}</span></span>
                    </div>

                    <div className="col-md-4 col-sm-4 text-end">
                        <div className="d-flex">
                            <Link className="btn btn-primary novoAluno" to="/aluno/novo/0">
                                Novo Aluno
                            </Link>
                            <button onClick={logout} type="button" title="Sair do Sistema">
                                <FiLogOut size={35} />
                            </button>
                        </div>

                    </div>
                </div>
            </header>

            <form>
                <div className="row">
                    <div className="col-md-11 col-sm-10 col-10">
                        <input type="text" placeholder="Filtrar por nome" />
                    </div>
                    <div className="col-md-1 col-sm-1 col-1 mt-4">
                        <button type="button" title="Filtrar" style={{ marginTop: '-4px' }}>
                            <BsSearch />
                        </button>
                    </div>
                </div>
            </form>

            <br />
            <br />
            <br />
            <h1>Relação de Alunos</h1>
            <ul>
                {alunos.map(aluno => (
                    <li key={aluno.id}>
                        <b><strong>Nome:</strong> </b>{aluno.nome}<br /><br />
                        <b><strong>E-mail:</strong> </b>{aluno.email}<br /><br />
                        <b><strong>Idade:</strong> </b>{aluno.idade}<br /><br />

                        <button onClick={() => editarAluno(aluno.id)} type="button" title="Editar">
                            <FiEdit size="25" color="#17202a" />
                        </button>
                        <button type="button" title="Excluir">
                            <FiUserX size="25" color="#17202a" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}