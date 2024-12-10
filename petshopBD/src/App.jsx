import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ConsultasList from './pages/Consultas/ConsultasList';
import AddConsulta from './pages/Consultas/AddConsulta';
import DeleteConsulta from './pages/Consultas/DeleteConsulta'; 
import AtualizarConsulta from './pages/Consultas/AtualizarConsulta';
import Dashboard from './pages/dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ListarAgendamentos from './pages/Agendamentos/ListarAgendamentos';
import EditarAgendamento from './pages/Agendamentos/EditarAgendamento';
import AddAgendamentos from './pages/Agendamentos/AddAgendamentos';
import ClientesList from './pages/Clientes/ClientesList';
import AddClientes from './pages/Clientes/AddClientes';
import EditarCliente from './pages/Clientes/EditarCliente';
import AddFuncionarios from './pages/Funcionarios/AddFuncionarios';
import FuncionarioList from './pages/Funcionarios/FuncionarioList';
import EditFuncionario from './pages/Funcionarios/EditFuncionario';
import AddItensVenda from './pages/ItensVenda/AddItensVenda'; 
import ItensVendaList from './pages/ItensVenda/ItensVendaList'; 
import EditarItens from './pages/ItensVenda/EditarItens';
import AddPets from './pages/Pets/AddPets';
import PetsList from './pages/Pets/PetsList';
import EditarPets from './pages/Pets/EditarPets';
import AddProdutos from './pages/Produtos/AddProdutos';
import AddServicos from './pages/Servicos/AddServicos';
import AddVendas from './pages/Vendas/AddVendas';
import AddVeterinarios from './pages/Veterinarios/AddVeterinarios';
import VeterinariosList from './pages/Veterinarios/VeterinariosList';
import EditarVeterinario from './pages/Veterinarios/EditarVeterinarios';
import VendaList from './pages/Vendas/VendasList';
import EditarVenda from './pages/Vendas/EditarVenda';
import EditarServicos from './pages/Servicos/EditarServicos';
import ServicosList from './pages/Servicos/ServicosList';
import ProdutosList from './pages/Produtos/ProdutosList';
import EditarProduto from './pages/Produtos/EditarProdutos';
import SQLQueriesPage from './pages/SQLQueriesPage';

const App = () => {
    const [activePage, setActivePage] = useState('login');

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login setActivePage={setActivePage} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/add-consulta" element={<AddConsulta />} />
                    <Route path="/consultas" element={<ConsultasList />} />
                    <Route path="/delete-consulta" element={<DeleteConsulta />} />
                    <Route path="/atualizar-consulta/:id" element={<AtualizarConsulta />} />
                    <Route path="/agendamentos" element={<ListarAgendamentos />} />
                    <Route path="/editar-agendamento/:id" element={<EditarAgendamento />} />
                    <Route path="/add-agendamento" element={<AddAgendamentos />} />
                    <Route path="/clientes" element={<ClientesList />} />
                    <Route path="/add-cliente" element={<AddClientes />} />
                    <Route path="/editar-cliente/:id" element={<EditarCliente />} />
                    <Route path="/funcionarios" element={<FuncionarioList />} />
                    <Route path="/add-funcionario" element={<AddFuncionarios />} />
                    <Route path="/edit-funcionario/:id" element={<EditFuncionario />} />
                    <Route path="/add-itens-venda" element={<AddItensVenda />} /> {/* Nova rota para AddItensVenda */}
                    <Route path="/itens-venda" element={<ItensVendaList />} />
                    <Route path="/edit-itemvenda/:id" element={<EditarItens />} />
                    <Route path="/add-pets" element={<AddPets />} />
                    <Route path="/pets" element={<PetsList />} />
                    <Route path="/editar-pet/:id" element={<EditarPets />} />
                    <Route path="/add-produtos" element={<AddProdutos />} />
                    <Route path="/add-servicos" element={<AddServicos />} />
                    <Route path="/add-vendas" element={<AddVendas />} />
                    <Route path="/veterinarios" element={<VeterinariosList />} />
                    <Route path="/add-veterinarios" element={<AddVeterinarios />} />
                    <Route path="/editar-veterinario/:id" element={<EditarVeterinario />} />
                    <Route path="/editar-venda/:id" element={<EditarVenda />} />
                    <Route path="/vendas" element={<VendaList />} />
                    <Route path="/servicos" element={<ServicosList />} />
                    <Route path="/editar-servico/:id" element={<EditarServicos />} />
                    <Route path="/produtos" element={<ProdutosList />} />
                    <Route path="/editar-produto/:id" element={<EditarProduto />} />
                    <Route path="/queries" element={<SQLQueriesPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
