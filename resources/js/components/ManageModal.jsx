import React, { useState, useEffect } from 'react'
import { FaTag, FaAlignLeft, FaDollarSign, FaImage, FaList, FaCalendarAlt, FaTimes, FaBoxOpen, FaPercentage, FaCloudUploadAlt } from "react-icons/fa";
import { toast } from 'react-toastify';
import Config from '../Config';

const ManageModal = ({ close, editingItem, loadData, loadProducts }) => {

  const [isProduct, setIsProduct] = useState(true);
  const [loading, setLoading] = useState(false);
  
  // Estado para la imagen seleccionada (archivo real) y su preview
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image_url: '', // Esto se generará automático
    available: true,
    category_id: '',
    start_date: '',
    end_date: ''
  });

  // Generar URL basada en el nombre 
  useEffect(() => {
    // Solo generamos si hay nombre escrito
    const slug = formData.name
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, '-') // Reemplaza espacios y caracteres raros por guiones
      .replace(/^-+|-+$/g, '');   // Elimina guiones al inicio o final

    const folder = isProduct ? '/products/' : '/promotions/';
    // Asumimos extensión .webp por defecto
    const autoUrl = slug ? `${folder}${slug}.webp` : '';

    setFormData(prev => ({ ...prev, image_url: autoUrl }));
  }, [formData.name, isProduct]);

  useEffect(() => {
    if (editingItem) {
      setIsProduct(editingItem.type === 'product');
      setFormData({
        name: editingItem.name || '',
        description: editingItem.description || '',
        price: editingItem.price || '',
        image_url: editingItem.image_url || '',
        available: Number(editingItem.available) === 1,
        category_id: editingItem.category_id || '',
        start_date: editingItem.start_date || '',
        end_date: editingItem.end_date || '',
      });
      if (editingItem.image_url) {
      // ARREGLAR
      const fullUrl = editingItem.image_url.startsWith('http') 
        ? editingItem.image_url 
        : `${Config.BASE_URL_IMAGES}${editingItem.image_url}`;
        
      setImagePreview(fullUrl);
      console.log(fullUrl)
    }

  }
  }, [editingItem]);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // MANEJO DE SELECCIÓN DE IMAGEN 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      // Crear URL temporal para previsualizar
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const dataToSend = new FormData();
    
    if (editingItem) {
        dataToSend.append('id', editingItem.id);
    }

    dataToSend.append('type', isProduct ? 'product' : 'promotion');

    dataToSend.append('name', formData.name);
    dataToSend.append('description', formData.description);
    dataToSend.append('price', formData.price);
    // dataToSend.append('image_url', formData.image_url); 
    dataToSend.append('available', formData.available ? 1 : 0);

    if (isProduct) {
        dataToSend.append('category_id', formData.category_id);
    } else {
        dataToSend.append('start_date', formData.start_date);
        dataToSend.append('end_date', formData.end_date);
    }

    if (imageFile) {
        dataToSend.append('image', imageFile); 
    }

    try {
        const response = await Config.updateManage(dataToSend)

        const result = response.data;

        if(result.success) {
          toast.success("Actualizado correctamente");
          loadData(); 
          loadProducts();
          close();
        } else {
          toast.error(result.message || "Error al actualizar");
        }

    } catch (error) {
      console.error(error);
      toast.error("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal_bg">
      
      <div className="col-sm-10 col-md-8 col-lg-6">
        <div className="card shadow-lg p-4 position-relative" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
          
          <button
            className="close-btn-circle"
            onClick={() => close(false)}
            style={{ position: 'absolute', top: '15px', right: '15px', zIndex: 10 }}
          >
            <FaTimes />
          </button>

          <div className="card-body">
            
            <h2 className="fw-bold text-center mb-4">
              {editingItem ? 'Editar' : (isProduct ? 'Nuevo' : 'Nueva')} {isProduct ? 'Producto' : 'Promoción'}
            </h2>

            <div className="row mb-4">
              <div className="col-6">
                <button 
                  type="button"
                  className={`btn w-100 fw-bold ${isProduct ? 'btn-dark' : 'btn-outline-dark'}`}
                  onClick={() => setIsProduct(true)}
                  // BLOQUEO: Si existe editingItem, se deshabilita
                  disabled={editingItem !== null} 
                  style={{ cursor: editingItem ? 'not-allowed' : 'pointer', opacity: editingItem && !isProduct ? 0.5 : 1 }}
                >
                  <FaBoxOpen className="me-2"/> Producto
                </button>
              </div>
              <div className="col-6">
                <button 
                  type="button"
                  className={`btn w-100 fw-bold ${!isProduct ? 'btn-dark' : 'btn-outline-dark'}`}
                  onClick={() => setIsProduct(false)}
                  // BLOQUEO: Si existe editingItem, se deshabilita
                  disabled={editingItem !== null}
                  style={{ cursor: editingItem ? 'not-allowed' : 'pointer', opacity: editingItem && isProduct ? 0.5 : 1 }}
                >
                  <FaPercentage className="me-2"/> Promoción
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <div className="input-group">
                  <span className="input-group-text"><FaTag /></span>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder={isProduct ? "Ej. Pizza Pepperoni" : "Ej. Combo Familiar"}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <div className="input-group">
                  <span className="input-group-text"><FaAlignLeft /></span>
                  <textarea
                    name="description"
                    className="form-control"
                    placeholder="Detalles del ítem..."
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Precio</label>
                  <div className="input-group">
                    <span className="input-group-text"><FaDollarSign /></span>
                    <input
                      type="number"
                      step="0.01"
                      name="price"
                      className="form-control"
                      value={formData.price}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {isProduct && (
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Categoría</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaList /></span>
                      <select
                        name="category_id"
                        className="form-control"
                        value={formData.category_id}
                        onChange={handleChange}
                        required={isProduct}
                      >
                        <option value="">Seleccionar...</option>
                        <option value="1">Pizzas</option>
                        <option value="2">Hamburguesas</option>
                        <option value="3">Acompañamientos</option>
                        <option value="4">Bebidas</option>
                        <option value="5">Postres</option>
                        <option value="6">Extras</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {!isProduct && (
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Fecha Inicio</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaCalendarAlt /></span>
                      <input
                        type="date"
                        name="start_date"
                        className="form-control"
                        value={formData.start_date}
                        onChange={handleChange}
                        required={!isProduct}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Fecha Fin</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaCalendarAlt /></span>
                      <input
                        type="date"
                        name="end_date"
                        className="form-control"
                        value={formData.end_date}
                        onChange={handleChange}
                        required={!isProduct}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-3">
                <label className="form-label">Imagen</label>
                
                <div className="input-group mb-2">
                  <span className="input-group-text"><FaCloudUploadAlt /></span>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>

                <div className="input-group input-group-sm">
                    <span className="input-group-text bg-light text-muted">Ruta DB:</span>
                    <input 
                        type="text" 
                        className="form-control bg-light text-muted" 
                        value={formData.image_url} 
                        readOnly 
                    />
                </div>


                {imagePreview && (
                  <div className="mt-2 text-center">
                      <img 
                        src={imagePreview} 
                        alt="Previsualización" 
                        style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '8px', border: '1px solid #ddd' }} 
                      />
                  </div>
                )}
              </div>

              <div className="mb-4 form-check d-flex align-items-center">
                <input
                  type="checkbox"
                  name="available"
                  className="form-check-input me-2"
                  id="checkAvailable"
                  checked={formData.available}
                  onChange={handleChange}
                  style={{ width: '1.2em', height: '1.2em' }}
                />
                <label className="form-check-label pt-1" htmlFor="checkAvailable">
                  Disponible para la venta
                </label>
              </div>

              <button className="cart-pay-btn w-100" disabled={loading}>
                {loading ? 'Guardando...' : (isProduct ? 'GUARDAR PRODUCTO' : 'GUARDAR PROMOCIÓN')}
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageModal