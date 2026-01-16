import React from 'react'
import { useAuth } from '../context/AuthContext'

const ProfileForm = () => {

  const { user } = useAuth()

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>

      <div className="row w-75 justify-content-center">
        <div className="col-12 mb-5">
            <div className="card shadow-sm border p-4">

              <form>
                <div className="row mb-3">
                  <div className="col-md-5">
                    <label className='form-label'>Nombre</label>
                    <input value={user.name} className='form-control' type='text'/>
                  </div>

                  <div className="col-md-7">
                    <label className='form-label'>Correo</label>
                    <input value={user.email} className='form-control' type='email'/>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-7">
                    <label className='form-label'>Dirección</label>
                    <input value={user.address} className='form-control' type='text'/>
                  </div>

                  <div className="col-md-5">
                    <label className='form-label'>Teléfono</label>
                    <input value={user.phone} className='form-control' type='email'/>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className='form-label'>Contraseña</label>
                    <input className='form-control' type='password'/>
                  </div>

                  <div className="col-md-6">
                    <label className='form-label'>Confirmar contraseña</label>
                    <input className='form-control' type='password'/>
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