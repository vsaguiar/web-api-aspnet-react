import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Alunos from './pages/Alunos';

export default function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/alunos' element={<Alunos />} />
            </Routes>
        </Router>
    );
}