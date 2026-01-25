import { User } from 'lucide-react'
import React from 'react'

const CustomerDataCard = () => {
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
            <input type="text" className="form-control" placeholder="Juan Perez" />
          </div>
          <div className="col-md-6">
            <label className="form-label text-muted small fw-bold">Correo</label>
            <input type="email" className="form-control" placeholder="juan@ejemplo.com" />
          </div>
          <div className="col-md-6">
            <label className="form-label text-muted small fw-bold">Teléfono</label>
            <input type="tel" className="form-control" placeholder="+56 9 1234 5678" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerDataCard