import React from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LayoutPublic from './layouts/LayoutPublic';
import Home from './pages/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../sass/app.scss";
import Promociones from './pages/Promociones';
import Pizzas from './pages/Pizzas';
import Hamburguesas from './pages/Hamburguesas';
import Acompañamientos from './pages/Acompañamientos';
import Bebidas from './pages/Bebidas';
import Postres from './pages/Postres';
import Extras from './pages/Extras';
import { ProductsProvider } from './context/ProductsContext';
import Locales from './pages/Locales';
import Login from './pages/Login';
import Register from './pages/Register';
import PublicRoutes from './pageAuth/PublicRoutes';
import LayoutAdmin from './layouts/LayoutAdmin';
import ProtectedRoutes from './pageAuth/ProtectedRoutes';
import { AuthProvider } from './context/AuthContext';
import Pedidos from './pages/Pedidos';
import Perfil from './pages/Perfil';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from './pages/Checkout';
import { StoreProvider } from './context/StoreContext';
import Success from './pages/Success';
import Error from './pages/Error';
import Redirection from './pages/Redirection';
import Gestionar from './pages/Gestionar';
import { OrderProvider } from './context/OrderContext';



const App = () => {
  return (
    <Router>
        <Routes>
          <Route element={<PublicRoutes/>}>
            <Route path='/' element={<LayoutPublic/>}>
              <Route index element={<Home/>}/>
              <Route path='/promociones' element={<Promociones/>}/>
              <Route path='/pizzas' element={<Pizzas/>}/>
              <Route path='/hamburguesas' element={<Hamburguesas/>}/>
              <Route path='/acompanamientos' element={<Acompañamientos/>}/>
              <Route path='/bebidas' element={<Bebidas/>}/>
              <Route path='/postres' element={<Postres/>}/>
              <Route path='/extras' element={<Extras/>}/>
              <Route path='/locales' element={<Locales/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
            </Route>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/success' element={<Success/>}/>
            <Route path='/error' element={<Error/>}/>
            <Route path='/redirection' element={<Redirection/>}/>
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route element={<LayoutPublic />}>
              <Route path='/pedidos' element={<Pedidos />} />
              <Route path='/perfil' element={<Perfil />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoutes role="admin"/>}>
            <Route path="/admin" element={<LayoutAdmin />}>
              <Route index element={<Gestionar/>}/>
            </Route>
          </Route>
            
        </Routes>
    </Router>
  )
}


export default App
if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
      <AuthProvider>
        <ProductsProvider>
          <OrderProvider>
            <CartProvider>
              <StoreProvider>
                <React.StrictMode>

                <App/>
                
                <ToastContainer
                  position="top-right"
                  autoClose={2500}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  pauseOnHover
                  theme="colored"
                />
                
              </React.StrictMode>
              </StoreProvider>
            </CartProvider>
          </OrderProvider>
        </ProductsProvider>
      </AuthProvider>
    )
}
