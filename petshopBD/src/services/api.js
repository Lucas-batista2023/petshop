import axios from 'axios';

// Criando uma instância do axios com a base URL da API
const api = axios.create({
  baseURL: 'http://localhost:3006', // Endereço do seu back-end
});


// Funções auxiliares para cada rota

// Agendamentos
export const getAgendamentos = () => api.get('/agendamentos');
export const createAgendamento = (data) => api.post('/agendamentos', data);
export const updateAgendamento = (id, data) => api.put(`/agendamentos/${id}`, data);
export const deleteAgendamento = (id) => api.delete(`/agendamentos/${id}`);

// Clientes
export const getClientes = () => api.get('/clientes');
export const createCliente = (data) => api.post('/clientes', data);
export const updateCliente = (id, data) => api.put(`/clientes/${id}`, data);
export const deleteCliente = (id) => api.delete(`/clientes/${id}`);

// Serviços
export const getServicos = () => api.get('/servicos');
export const createServico = (data) => api.post('/servicos', data);
export const updateServico = (id, data) => api.put(`/servicos/${id}`, data);
export const deleteServico = (id) => api.delete(`/servicos/${id}`);

// Veterinários
export const getVeterinarios = () => api.get('/veterinarios');
export const createVeterinario = (data) => api.post('/veterinarios', data);
export const updateVeterinario = (id, data) => api.put(`/veterinarios/${id}`, data);
export const deleteVeterinario = (id) => api.delete(`/veterinarios/${id}`);

// Vendas
export const getVendas = () => api.get('/vendas');
export const createVenda = (data) => api.post('/vendas', data);
export const updateVenda = (id, data) => api.put(`/vendas/${id}`, data);
export const deleteVenda = (id) => api.delete(`/vendas/${id}`);

// Produtos
export const getProdutos = () => api.get('/produtos');
export const createProduto = (data) => api.post('/produtos', data);
export const updateProduto = (id, data) => api.put(`/produtos/${id}`, data);
export const deleteProduto = (id) => api.delete(`/produtos/${id}`);

// Pets
export const getPets = () => api.get('/pets');
export const createPet = (data) => api.post('/pets', data);
export const updatePet = (id, data) => api.put(`/pets/${id}`, data);
export const deletePet = (id) => api.delete(`/pets/${id}`);

// Itens de Venda
export const getItensVenda = () => api.get('/itens-venda');
export const createItemVenda = (data) => api.post('/itens-venda', data);
export const updateItemVenda = (id, data) => api.put(`/itens-venda/${id}`, data);
export const deleteItemVenda = (id) => api.delete(`/itens-venda/${id}`);

// Funcionários
export const getFuncionarios = () => api.get('/funcionarios');
export const createFuncionario = (data) => api.post('/funcionarios', data);
export const updateFuncionario = (id, data) => api.put(`/funcionarios/${id}`, data);
export const deleteFuncionario = (id) => api.delete(`/funcionarios/${id}`);

// Consultas
export const getConsultas = () => api.get('/consultas');
export const createConsulta = (data) => api.post('/consultas', data);
export const updateConsulta = (id, data) => api.put(`/consultas/${id}`, data);
export const deleteConsulta = (id) => api.delete(`/consultas/${id}`);

export default api;
