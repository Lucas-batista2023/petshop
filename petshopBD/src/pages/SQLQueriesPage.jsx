import React, { useEffect } from 'react';
import SQLCard from '../pages/SQLCard';
import '../style/sql.css';


const SQLQueriesPage = () => {
  // Função para alternar a visibilidade do SQL
  const toggleSQL = (id) => {
    const sqlElement = document.getElementById(`sql-${id}`);
    if (sqlElement.style.display === "none" || sqlElement.style.display === "") {
      sqlElement.style.display = "block";  // Exibe o SQL
    } else {
      sqlElement.style.display = "none";  // Oculta o SQL
    }
  };

  // Inicializa todos os SQLs como ocultos ao carregar a página
  useEffect(() => {
    for (let i = 1; i <= 30; i++) {
      const sqlElement = document.getElementById(`sql-${i}`);
      if (sqlElement) {
        sqlElement.style.display = "none";  // Esconde o SQL inicialmente
      }
    }
  }, []);

  const basicQueries = [
    {
      id: 1,
      buttonText: 'Consulta simples para retornar todos os clientes',
      sql: 'SELECT * FROM clientes;',
    },
    {
      id: 2,
      buttonText: 'Consulta com aninhamento para encontrar os agendamentos de um cliente específico',
      sql: 'SELECT * FROM agendamentos WHERE id_cliente = (SELECT id FROM clientes WHERE nome = "Maria Silva");',
    },
    {
      id: 3,
      buttonText: 'Consulta para encontrar o total de agendamentos de cada cliente',
      sql: 'SELECT id_cliente, COUNT(*) AS total_agendamentos FROM agendamentos GROUP BY id_cliente;',
    },
    {
      id: 4,
      buttonText: 'Consulta para encontrar a média de compras por cliente',
      sql: 'SELECT id_cliente, AVG(valor) AS media_compras FROM compras GROUP BY id_cliente;',
    },
    {
      id: 5,
      buttonText: 'Consulta para listar os clientes que realizaram compras acima de um valor específico',
      sql: 'SELECT DISTINCT clientes.nome FROM clientes INNER JOIN compras ON clientes.id = compras.id_cliente WHERE compras.valor > 100;',
    },
  ];

  const stringOperations = [
    {
      id: 6,
      buttonText: 'Concatenar nome e email dos clientes',
      sql: 'SELECT CONCAT(nome, " - ", email) AS nome_email FROM clientes;',
    },
    {
      id: 7,
      buttonText: 'Exibir apenas o primeiro nome dos clientes',
      sql: 'SELECT SUBSTRING(nome, 1, POSITION(" " IN nome) - 1) AS primeiro_nome FROM clientes;',
    },
    {
      id: 8,
      buttonText: 'Trocar o sobrenome dos clientes para "Silva"',
      sql: 'SELECT CONCAT(SUBSTRING_INDEX(nome, " ", 1), " Silva") AS nome_alterado FROM clientes;',
    },
    {
      id: 9,
      buttonText: 'Transformar o nome dos clientes em maiúsculo',
      sql: 'SELECT UPPER(nome) AS nome_maiusculo FROM clientes;',
    },
    {
      id: 10,
      buttonText: 'Transformar o nome dos clientes em minúsculo',
      sql: 'SELECT LOWER(nome) AS nome_minusculo FROM clientes;',
    },
  ];

  const dateOperations = [
    {
      id: 11,
      buttonText: 'Exibir o ano de nascimento dos clientes',
      sql: 'SELECT EXTRACT(YEAR FROM data_nascimento) AS ano_nascimento FROM clientes;',
    },
    {
      id: 12,
      buttonText: 'Consulta para exibir o total de agendamentos por mês',
      sql: 'SELECT EXTRACT(MONTH FROM data_agendamento) AS mes, COUNT(*) AS total_agendamentos FROM agendamentos GROUP BY mes;',
    },
    {
      id: 13,
      buttonText: 'Exibir os clientes que fizeram compras nos últimos 30 dias',
      sql: 'SELECT nome FROM clientes WHERE data_ultima_compra >= CURRENT_DATE - INTERVAL 30 DAY;',
    },
    {
      id: 14,
      buttonText: 'Exibir as compras realizadas no último mês',
      sql: 'SELECT * FROM compras WHERE EXTRACT(MONTH FROM data_compra) = EXTRACT(MONTH FROM CURRENT_DATE);',
    },
  ];

  const aggregateFunctions = [
    {
      id: 15,
      buttonText: 'Encontrar o valor total de todas as compras',
      sql: 'SELECT SUM(valor) AS total_compras FROM compras;',
    },
    {
      id: 16,
      buttonText: 'Encontrar o número máximo de agendamentos feitos por um cliente',
      sql: 'SELECT MAX(total_agendamentos) AS max_agendamentos FROM (SELECT id_cliente, COUNT(*) AS total_agendamentos FROM agendamentos GROUP BY id_cliente) AS subquery;',
    },
    {
      id: 17,
      buttonText: 'Encontrar o cliente que mais comprou',
      sql: 'SELECT id_cliente, MAX(total_compras) AS max_compras FROM (SELECT id_cliente, SUM(valor) AS total_compras FROM compras GROUP BY id_cliente) AS subquery;',
    },
  ];

  return (
    <div className="container">
      <SQLCard title="Consultas Básicas e Aninhadas" sqlQueries={basicQueries} toggleSQL={toggleSQL} />
      <SQLCard title="Operações com Strings" sqlQueries={stringOperations} toggleSQL={toggleSQL} />
      <SQLCard title="Operações com Datas" sqlQueries={dateOperations} toggleSQL={toggleSQL} />
      <SQLCard title="Funções de Agregação" sqlQueries={aggregateFunctions} toggleSQL={toggleSQL} />
    </div>
  );
};

export default SQLQueriesPage;
