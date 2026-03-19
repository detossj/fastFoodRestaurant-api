import React, { useState } from 'react';
import './ManageList.css';
import { useManage } from '../context/ManageContext';
import LoadingBar from './LoadingBar';
import ManageModal from './ManageModal';
import Config from '../Config';
import { toast } from 'react-toastify';
import { useProducts } from '../context/ProductsContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const ManageList = () => {

  const [filterType, setFilterType] = useState('all');
  const [filterAvailable, setFilterAvailable] = useState('all');
  const [modal, setModal] = useState(false)

  const { manage, loading, error, openEdit, selectedItem, closeEdit, loadData } = useManage(); 

  const {loadData: loadProducts} = useProducts()

  if (loading) {
    return (
      <LoadingBar/>
    );
  }

  const handleDelete = async (item) => {
    
    // Configuración del Modal de SweetAlert
    const result = await MySwal.fire({
      title: `¿Eliminar "${item.name}"?`,
      text: "Esta acción no se puede deshacer.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6', 
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true // Pone el botón de cancelar primero 
    });

    // Si el usuario hace clic en "Cancelar" o fuera del modal, no hace nada
    if (!result.isConfirmed) {
      return;
    }

    // Si confirmó
    try {
      // Muestra un "cargando..." mientras se borra
      MySwal.fire({
        title: 'Eliminando...',
        didOpen: () => {
          MySwal.showLoading()
        }
      });

      const payload = {
        id: item.id,
        type: item.type
      };

      const response = await Config.deleteManage(payload);

      if (response.data.success) {
        await MySwal.fire(
          '¡Eliminado!',
          response.data.message,
          'success'
        );

        loadData(); 
        loadProducts();
      } else {
        MySwal.close();
        toast.error("No se pudo eliminar el elemento");
      }

    } catch (error) {
      console.error("Error eliminando:", error);
      MySwal.close();
      const msg = error.response?.data?.message || "Error al conectar con el servidor";
      toast.error(msg);
    }
  };


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
  <div className="container p-3 p-md-5" style={{ minHeight: '100vh' }}>

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
                    <button className="btn-edit" onClick={() => openEdit(item)}>Editar</button>
                    <button className="btn-delete" onClick={() => handleDelete(item)}>Eliminar</button>
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

      { (selectedItem || modal) && (
        <ManageModal 
          close={() => { setModal(false); closeEdit(); }} 
          editingItem={selectedItem} 
          loadData={loadData}
          loadProducts={loadProducts}
        />
      )}

    </div>
  );
};

export default ManageList;