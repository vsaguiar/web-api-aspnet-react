import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';

export default function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
            </Routes>
        </Router>
    );
}