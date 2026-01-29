import { LogIn, User } from 'lucide-react'
import React from 'react'
import { useAuth } from "../context/AuthContext"
import './CustomerDataCard.css';

const CustomerDataCard = () => {

  const { user, token } = useAuth()

  const isLogged = !!user && !!token

  return (
    <div className="card shadow-sm mb-4 border-0">
      <div className="card-body p-4">
        <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
          <User size={20} color="#ff7a00" />
          Datos del cliente
        </h5>

        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label text-muted small fw-bold">Nombre</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Juan Perez" 
              defaultValue={ isLogged ? `${user.name}` : '' }
              disabled={ isLogged }
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-muted small fw-bold">Correo</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="juan@ejemplo.com" 
              defaultValue={ isLogged ? `${user.email}` : '' }
              disabled={ isLogged }
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-muted small fw-bold">Teléfono</label>
            <input 
              type="tel" 
              className="form-control" 
              placeholder="+56 9 1234 5678"
              defaultValue={ isLogged ? `${user.phone}` : '' }
              disabled={ isLogged }
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-muted small fw-bold">Dirección</label>
            <input 
              type="tel" 
              className="form-control" 
              placeholder="+56 9 1234 5678"
              defaultValue={ isLogged ? `${user.address}` : '' }
              disabled={ isLogged }
            />
          </div>
        </div>

        { !isLogged && ( 
          <div className="alert alert-light border d-flex justify-content-between align-items-center mt-4">
            <span className="text-muted">
              ¿Ya tienes cuenta? Regístrate para guardar tus pedidos o continúa como invitado.
            </span>
            <button className="customer-data-btn d-flex align-items-center gap-1" onClick={() => window.location.href = '/login'}>
              <LogIn size={14} /> Iniciar Sesión
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomerDataCard