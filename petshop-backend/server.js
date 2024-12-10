const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser'); // ADICIONADO

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

// Rotas de Recursos
app.use('/agendamentos', require('./routes/agendamentosRoutes'));
app.use('/clientes', require('./routes/clientesRoutes'));
app.use('/servicos', require('./routes/servicosRoutes'));
app.use('/veterinarios', require('./routes/veterinariosRoutes'));
app.use('/vendas', require('./routes/vendasRoutes'));
app.use('/produtos', require('./routes/produtosRoutes'));
app.use('/pets', require('./routes/petsRoutes'));
app.use('/itensvenda', require('./routes/itensVendaRoutes')); // Modifiquei
app.use('/funcionarios', require('./routes/funcionariosRoutes'));
app.use('/consultas', require('./routes/consultasRoutes'));
app.use('/users', require('./routes/usersRoutes')); // Adicionado para as rotas de usuários

// Porta do Servidor
const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
