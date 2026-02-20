import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Config from '../Config';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone, FaLock } from "react-icons/fa";
import { toast } from 'react-toastify';


const ProfileForm = () => {

  const { user, updateUser } = useAuth()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false)

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
    setLoading(true)

    try {
      const response = await Config.updateProfile(formData);

      updateUser(response.data.user)
      toast.success("Perfil actualizado correctamente")
    } catch (error) {
      toast.error("Error al actualizar el perfil");
    }
    finally {
      setLoading(false)
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center py-5" style={{ minHeight: "50vh" }}>

      <div className="row w-75 justify-content-center">
        <div className="col-12 mb-5">
            <div className="card shadow-sm border p-4">

              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-5">
                    <label className="form-label">Nombre</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaUser />
                      </span>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-7">
                    <label className="form-label">Correo</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaEnvelope />
                      </span>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-7">
                    <label className="form-label">Dirección</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaMapMarkerAlt />
                      </span>
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <label className="form-label">Teléfono</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaPhone />
                      </span>
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Contraseña</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaLock />
                      </span>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Ingrese su nueva contraseña"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Confirmar contraseña</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaLock />
                      </span>
                      <input
                        type="password"
                        name="password_confirmation"
                        className="form-control"
                        placeholder="Confirme su nueva contraseña"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <button className="cart-pay-btn" disabled={loading}>
                  {loading ? 'Guardando cambios...' : 'GUARDAR CAMBIOS' }
                </button>
              </form>

            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileForm