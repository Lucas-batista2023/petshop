import React, { useState } from 'react';

const SQLCard = ({ title, sqlQueries }) => {
  const [activeQueryId, setActiveQueryId] = useState(null);

  const handleToggleSQL = (id) => {
    setActiveQueryId(activeQueryId === id ? null : id);  // Alterna a visibilidade do SQL
  };

  return (
    <div className="container">
      {sqlQueries.map((query) => (
        <div key={query.id} className="card" onClick={() => handleToggleSQL(query.id)}>
          <div className="card-title">{title}</div>
          <button className="toggle-btn">
            {activeQueryId === query.id ? 'Ocultar SQL' : 'Mostrar SQL'}
          </button>
          {/* Código SQL mostrado ao lado */}
          <div className="sql-code" style={{ display: activeQueryId === query.id ? 'block' : 'none' }}>
            <pre>{query.sql}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SQLCard;
