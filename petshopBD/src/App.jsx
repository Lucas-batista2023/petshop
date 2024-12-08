import React from 'react';
import ConsultasList from './pages/ConsultasList';
import AddConsulta from './pages/AddConsulta';

const App = () => {
    return (
        <div>
            <h1>Petshop - Sistema de Consultas</h1>
            <AddConsulta />
            <ConsultasList />
        </div>
    );
};

export default App;
