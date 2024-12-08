const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Configuração do dotenv
dotenv.config();

const app = express();

// Configuração do CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Permite apenas requisições do front-end na porta 5173
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Definindo os métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Definindo os cabeçalhos permitidos
};

// Middlewares
app.use(express.json());
app.use(cors(corsOptions)); // Aplicando as opções de CORS

// Rotas
app.use('/agendamentos', require('./routes/agendamentosRoutes'));
app.use('/clientes', require('./routes/clientesRoutes'));
app.use('/servicos', require('./routes/servicosRoutes'));
app.use('/veterinarios', require('./routes/veterinariosRoutes'));
app.use('/vendas', require('./routes/vendasRoutes'));
app.use('/produtos', require('./routes/produtosRoutes'));
app.use('/pets', require('./routes/petsRoutes'));
app.use('/itens-venda', require('./routes/itensVendaRoutes'));
app.use('/funcionarios', require('./routes/funcionariosRoutes'));
app.use('/consultas', require('./routes/consultasRoutes'));

// Porta do Servidor
const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
