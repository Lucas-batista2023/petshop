import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importando o hook useNavigate
import Card from './Card';
import '../style/styles.css';


const Dashboard = () => {
  // Hook para navegação
  const navigate = useNavigate();

  // Dados fixos dos cards
  const cardsData = [
    { title: "Agendamentos", image: "images/agendamentos.png" },
    { title: "Clientes", image: "images/clientes.png" },
    { title: "Consultas", image: "images/consultas.png" },
    { title: "Funcionários", image: "images/funcionarios.png" },
    { title: "Itens Vendidos", image: "images/itens_vendidos.png" },
    { title: "Pets", image: "images/pets.png" },
    { title: "Produtos", image: "images/produtos.png" },
    { title: "Serviços", image: "images/servicos.png" },
    { title: "Vendas", image: "images/vendas.png" },
    { title: "Veterinários", image: "images/veterinarios.png" }
  ];

  // Função para manipular o clique do botão SQL
  const handleSqlButtonClick = () => {
    navigate('/queries'); // Redireciona para a página SQL
  };

  return (
    <div>
      <header>
        <div className="header-content">
          <div className="header-titles">
            <h1 className="page-title">Painel de Controle de Dados</h1>
          </div>
          <div className="logo-container">
            <img src="images/logo.png" alt="Logo CodePets" className="logo" />
          </div>
          {/* Botão SQL ao lado da logo */}
          <button onClick={handleSqlButtonClick} className="sql-button">
            SQL
          </button>
        </div>
      </header>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
