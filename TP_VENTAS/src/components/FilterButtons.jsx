import React from 'react';

function FilterButtons({ filtro, cambiarFiltro }) {
  return (
    <>
      <select value={filtro} onChange={(e) => cambiarFiltro(e.target.value)} className="mostrarFiltro">
        <option value="0">Todos</option>
        <option value="1">Apple</option>
        <option value="2">Samsung</option>
        <option value="3">Xiaomi</option>
        <option value="4">Motorola</option>
      </select>
    </>
  );
}

export default FilterButtons;
