import React, { useState } from 'react'
import Config from '../Config';
import { useAuth } from "../context/AuthContext"

const Login = () => {
  const { login } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const submitLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { data } = await Config.Login({ email, password })

      if (data.success) {
        login(
          data.user,
          data.token,
          data.user.roles[0].name
        )
      } else {
        setError("Credenciales incorrectas")
      }
    } catch (err) {
      console.error(err)
      setError("Error al iniciar sesión")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className='container d-flex justify-content-center align-items-center'
      style={{ height: "60vh" }}
    >
      <div className='col-sm-10 col-md-6 col-lg-4'>
        <div className='card shadow-lg p-4'>
          <div className='card-body'>

            <h2 className='fw-bold text-center mb-4'>
              Iniciar sesión
            </h2>

            {error && (
              <div className='alert alert-danger'>
                {error}
              </div>
            )}

            <form onSubmit={submitLogin}>

              <div className='mb-3'>
                <label className='form-label text-muted small fw-bold'>
                  Correo
                </label>
                <input
                  type='email'
                  className='form-control'
                  placeholder='correo@gmail.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className='mb-4'>
                <label className='form-label text-muted small fw-bold'>
                  Contraseña
                </label>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Contraseña'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type='submit'
                className='cart-pay-btn'
                disabled={loading}
              >
                {loading ? 'Ingresando...' : 'INGRESAR'}
              </button>

            </form>

            <div className='text-center mt-3'>
              <span>¿No tiene cuenta? </span>
              <a
                href='/register'
                className='fw-bold text-primary text-decoration-none'
              >
                Regístrese aquí
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
