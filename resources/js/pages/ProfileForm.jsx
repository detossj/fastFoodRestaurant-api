import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Config from '../Config';

const ProfileForm = () => {

  const { user } = useAuth()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if(user) {
      setFormData({
        name: user.name,
        email: user.email,
        password: "",
        password_confirmation: "",
        phone: user.phone,
        address: user.address,
      })
    }
  },[user])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Config.updateProfile(formData);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Error al actualizar el perfil");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>

      <div className="row w-75 justify-content-center">
        <div className="col-12 mb-5">
            <div className="card shadow-sm border p-4">

              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-5">
                    <label className='form-label'>Nombre</label>
                    <input name='name' value={formData.name} onChange={handleChange} className='form-control' type='text'/>
                  </div>

                  <div className="col-md-7">
                    <label className='form-label'>Correo</label>
                    <input name='email' value={formData.email} onChange={handleChange} className='form-control' type='email'/>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-7">
                    <label className='form-label'>Dirección</label>
                    <input name='address' value={formData.address} onChange={handleChange} className='form-control' type='text'/>
                  </div>

                  <div className="col-md-5">
                    <label className='form-label'>Teléfono</label>
                    <input name='phone' value={formData.phone} onChange={handleChange} className='form-control' type='text'/>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className='form-label'>Contraseña</label>
                    <input name="password" onChange={handleChange} className='form-control' type='password'/>
                  </div>

                  <div className="col-md-6">
                    <label className='form-label'>Confirmar contraseña</label>
                    <input name="password_confirmation" onChange={handleChange} className='form-control' type='password'/>
                  </div>
                </div>

                <button className="cart-pay-btn">
                  GUARDAR CAMBIOS
                </button>
              </form>

            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileForm