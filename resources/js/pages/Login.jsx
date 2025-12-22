import React from 'react'

const Login = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center' style={{ height: "60vh" }} >
            <div className='col-sm-10 col-md-6 col-lg-4'>
                <div className='card shadow-lg login-card p-4' >
                    <div className='card-body d-flex flex-column align-items-center'>
                        
                        <h2 className='fw-bold'>
                            Iniciar sesión
                        </h2> 
                        
                        <div className="w-100 mb-3"> 
                            <label className='form-label w-100 text-start'>
                              Correo
                            </label>
                            <input 
                                type="text" 
                                className='form-control' 
                                placeholder='corrreo@gmail.com'
                                required
                            />
                        </div>
                        
                        <div className="w-100 mb-4">
                            <label htmlFor="password-input" className='form-label w-100 text-start'>
                              Contraseña
                            </label>
                            <input 
                                type="password" 
                                className='form-control' 
                                placeholder='Contraseña' 
                                required
                            />
                        </div>
                        
                        <button className='btn w-100' style={{backgroundColor: 'rgb(249, 124, 47)', color: 'white'}}>
                          INGRESAR
                        </button>

                        <div className='w-100 text-center mt-3'>
                          <p className='d-inline'>¿No tiene cuenta? </p>
                          <a 
                              href="/register" 
                              className='d-inline fw-bold text-primary text-decoration-none'
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