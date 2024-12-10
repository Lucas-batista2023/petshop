import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, image }) => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate(); // Usando o hook useNavigate para navegação

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleListarTodosClick = () => {
    if (title === "Clientes") {
      navigate("/clientes");
    } else if (title === "Funcionários") {
      navigate("/funcionarios");
    } else if (title === "Agendamentos") {
      navigate("/agendamentos");
    } else if (title === "Consultas") {
      navigate("/consultas");
    } else if (title === "Itens Vendidos") {
      navigate("/itens-venda");
    } else if (title === "Pets") {
      navigate("/pets");
    } else if (title === "Produtos") {
      navigate("/produtos");
    } else if (title === "Serviços") {
      navigate("/servicos");
    } else if (title === "Vendas") {
      navigate("/vendas"); // Redireciona para a página de vendas
    } else if (title === "Veterinários") { // Adicionado para "Veterinários"
      navigate("/veterinarios"); // Redireciona para a página de veterinários
    }
  };

  const handleAdicionarClick = () => {
    if (title === "Clientes") {
      navigate("/add-cliente");
    } else if (title === "Funcionários") {
      navigate("/add-funcionario");
    } else if (title === "Agendamentos") {
      navigate("/add-agendamento");
    } else if (title === "Consultas") {
      navigate("/add-consulta");
    } else if (title === "Itens Vendidos") {
      navigate("/add-itens-venda");
    } else if (title === "Pets") {
      navigate("/add-pets");
    } else if (title === "Produtos") {
      navigate("/add-produtos");
    } else if (title === "Serviços") {
      navigate("/add-servicos");
    } else if (title === "Vendas") {
      navigate("/add-vendas"); // Redireciona para a página de adicionar vendas
    } else if (title === "Veterinários") { // Adicionado para "Veterinários"
      navigate("/add-veterinarios"); // Redireciona para a página de adicionar veterinários
    }
  };

  return (
    <div className={`flip-card ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt={title} className="card-image" />
          <div className="title">{title}</div>
        </div>
        <div className="flip-card-back">
          <div className="back-title">{title}</div>
          <button className="back-option" onClick={handleListarTodosClick}>
            Listar Todos
          </button>
          <button className="back-option" onClick={handleAdicionarClick}>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
