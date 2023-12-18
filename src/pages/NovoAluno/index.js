import React, { useState, useEffect } from "react";
import './style.css';
import { FiCornerDownLeft, FiUserPlus } from 'react-icons/fi';
import { Link, useParams, useNavigate } from "react-router-dom";
import api from '../../services/api';

export default function NovoAluno() {

    const [id, setId] = useState(null);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState(0);

    const { alunoId } = useParams();
    const history = useNavigate();

    const token = localStorage.getItem('token');

    useEffect(() => {
        const loadAluno = async () => {
            try {
                const response = await api.get(`api/alunos/${alunoId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setId(response.data.id);
                setNome(response.data.nome);
                setEmail(response.data.email);
                setIdade(response.data.idade);
            } catch (error) {
                alert('Erro ao buscar o aluno. \n' + error);
                history('/alunos');
            }
        };

        if (alunoId === '0') {
            return;
        }
        else {
            loadAluno();
        }

    }, [alunoId, history, token]);

    async function saveOrUpdate(event) {
        event.preventDefault();

        const data = {
            nome,
            email,
            idade
        }

        try {
            if (alunoId === '0') {
                await api.post('api/alunos', data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }
            else {
                data.id = id;
                await api.put(`api/alunos/${id}`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }
        } catch (error) {
            alert('Erro ao gravar aluno. ' + error);
        }
        history('/alunos');
    }

    return (
        <div className="novo-aluno-container">
            <div className="content">
                <section className="form">
                    <FiUserPlus size="105" color="#17202a" />
                    <span className="m-3">{alunoId === '0' ? 'Incluir Novo Aluno' : 'Atualizar Aluno'}</span>

                </section>

                <form onSubmit={saveOrUpdate}>
                    <input placeholder="Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <input placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="Idade"
                        value={idade}
                        onChange={e => setIdade(e.target.value)}
                    />

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