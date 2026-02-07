import React, { useState } from 'react';
import './ManageList.css';

const ManageList = () => {

  const [filterType, setFilterType] = useState('all');
  const [filterAvailable, setFilterAvailable] = useState('all');

  const items = [
    {
      id: 1,
      type: 'product',
      name: 'Pizza Napolitana',
      description: 'Pizza clásica con tomate y queso',
      price: 8900,
      available: true,
    },
    {
      id: 2,
      type: 'product',
      name: 'Hamburguesa Clásica',
      description: 'Carne, queso y lechuga',
      price: 4500,
      available: true,
    },
    {
      id: 3,
      type: 'promotion',
      name: 'Promo Pizza + Bebida',
      description: 'Pizza grande + bebida',
      price: 10900,
      available: false,
    },
  ];

  const filteredItems = items.filter(item => {
    if (filterType !== 'all' && item.type !== filterType) return false;
    if (filterAvailable !== 'all') {
      const available = filterAvailable === 'true';
      if (item.available !== available) return false;
    }
    return true;
  });

  return (
    <div className="container p-5" style={{ minHeight: '100vh' }}>

      <h2 className="mb-4 text-center fw-bold">Gestión de Productos y Promociones</h2>

      <div className="filters mb-4">
        <select value={filterType} onChange={e => setFilterType(e.target.value)}>
          <option value="all">Todos</option>
          <option value="product">Productos</option>
          <option value="promotion">Promociones</option>
        </select>

        <select value={filterAvailable} onChange={e => setFilterAvailable(e.target.value)}>
          <option value="all">Disponibilidad</option>
          <option value="true">Disponibles</option>
          <option value="false">No disponibles</option>
        </select>

        <button className="btn-create">+ Crear</button>
      </div>

      <div className="table-wrapper">
        <table className="manage-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Disponible</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {filteredItems.map(item => (
              <tr key={item.id}>
                <td>{item.type === 'product' ? 'Producto' : 'Promoción'}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>${item.price}</td>
                <td>
                  <span className={item.available ? 'badge success' : 'badge danger'}>
                    {item.available ? 'Sí' : 'No'}
                  </span>
                </td>
                <td className="actions">
                  <button className="btn-edit">Editar</button>
                  <button className="btn-delete">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ManageList;
