import React, { useState } from 'react'
import Config from '../Config'
import { useAuth } from '../context/AuthContext'

const Register = () => {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [loading, setLoading] = useState(false)

  const { login } = useAuth()

  const submitRegister = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await Config.Register({
        email,
        name,
        address,
        phone,
        password,
        password_confirmation: passwordConfirmation
      });
  
      const { token, user, rol } = response.data

      login(user,token,rol)
      
    } catch (error) {
      console.error("Error en registro:", error.response?.data || error);
      setLoading(false)
    }
  };
  

  return (
    <div className='container d-flex justify-content-center align-items-center' style={{ height: "100vh" }} >
            <div className='col-sm-10 col-md-6 col-lg-4'>
                <div className='card shadow-lg login-card p-4' >
                    <div className='card-body d-flex flex-column align-items-center'>
                        
                        <h2 className='fw-bold'>
                            Registro
                        </h2> 
                        
                        <div className="w-100 mb-3"> 
                            <label className='form-label w-100 text-start'>
                              Correo
                            </label>
                            <input 
                                type="text" 
                                className='form-control' 
                                placeholder='correo@gmail.com'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="w-100 mb-3"> 
                            <label className='form-label w-100 text-start'>
                              Nombre Completo
                            </label>
                            <input 
                                type="text" 
                                className='form-control' 
                                placeholder='Juan Perez'
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="w-100 mb-3"> 
                            <label className='form-label w-100 text-start'>
                              Dirección
                            </label>
                            <input 
                                type="text" 
                                className='form-control' 
                                placeholder='Serrano 405'
                                value={address}
                                onChange={(e)=>setAddress(e.target.value)}
                                required
                            />
                        </div>

                        <div className="w-100 mb-3"> 
                            <label className='form-label w-100 text-start'>
                              Número de Teléfono
                            </label>
                            <input 
                                type="text" 
                                className='form-control' 
                                placeholder='989088185'
                                value={phone}
                                onChange={(e)=>setPhone(e.target.value)}
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
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="w-100 mb-4">
                            <label htmlFor="password-input" className='form-label w-100 text-start'>
                              Confirmar Contraseña
                            </label>
                            <input 
                                type="password" 
                                className='form-control' 
                                placeholder='Confirmar Contraseña'
                                value={passwordConfirmation}
                                onChange={(e)=>setPasswordConfirmation(e.target.value)} 
                                required
                            />
                        </div>
                        
                        <button className='btn w-100' style={{backgroundColor: 'rgb(249, 124, 47)', color: 'white'}} onClick={submitRegister}>
                          {loading ? 'Registrando...' : 'REGISTRARSE'}
                        </button>

                        <div className='w-100 text-center mt-3'>
                          <p className='d-inline'>Si ya tiene cuenta, </p>
                          <a href="/login" className='d-inline fw-bold text-primary text-decoration-none'>
                            Inicie sesión aquí
                          </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Register