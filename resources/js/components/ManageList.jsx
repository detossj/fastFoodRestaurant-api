import React, { useState } from 'react';
import './ManageList.css';
import { useManage } from '../context/ManageContext';
import LoadingBar from './LoadingBar';
import ManageModal from './ManageModal';

const ManageList = () => {

  const [filterType, setFilterType] = useState('all');
  const [filterAvailable, setFilterAvailable] = useState('all');
  const [modal, setModal] = useState(false)

  const { manage, loading, error } = useManage(); 

  if (loading) {
    return (
      <LoadingBar/>
    );
  }


  if (error) {
    return <div className="alert alert-danger m-5">{error}</div>;
  }

  const filteredItems = manage.filter(item => {

    if (filterType !== 'all' && item.type !== filterType) return false;

    if (filterAvailable !== 'all') {
      const targetValue = filterAvailable === 'true' ? 1 : 0;

      if (Number(item.available) !== targetValue) return false;
    }

    return true;
  });

  const onClickCrear = () => {
    setModal(true)
  }

  return (
    <div className="container p-5" style={{ minHeight: '100vh' }}>

      <h2 className="mb-4 text-center fw-bold">Gestión de Productos y Promociones</h2>

      <div className="filters mb-4">
        <select value={filterType} onChange={e => setFilterType(e.target.value)}>
          <option value="all">Todos los Tipos</option>
          <option value="product">Productos</option>
          <option value="promotion">Promociones</option>
        </select>

        <select value={filterAvailable} onChange={e => setFilterAvailable(e.target.value)}>
          <option value="all">Toda Disponibilidad</option>
          <option value="true">Disponibles (Sí)</option>
          <option value="false">No disponibles (No)</option>
        </select>

        <button onClick={()=> onClickCrear()} className="btn-create">+ Crear</button>
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
            {filteredItems.map(item => {
              
              const isAvailable = Number(item.available) === 1;

              return (
                <tr key={`${item.type}-${item.id}`}> 
                  <td>{item.type === 'product' ? 'Producto' : 'Promoción'}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>${item.price}</td>
                  <td>

                    <span className={isAvailable ? 'badge success' : 'badge danger'}>
                      {isAvailable ? 'Sí' : 'No'}
                    </span>
                  </td>
                  <td className="actions">
                    <button className="btn-edit">Editar</button>
                    <button className="btn-delete">Eliminar</button>
                  </td>
                </tr>
              );
            })}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan="6" style={{ textAlign: 'left', fontWeight: 'bold', padding: '15px' }}>
                Total registros encontrados: {filteredItems.length}
              </td>
            </tr>
          </tfoot>

        </table>
      </div>

      {
        modal && <ManageModal close={setModal}/>
      }

    </div>
  );
};

export default ManageList;