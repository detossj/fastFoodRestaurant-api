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


const App = () => {
  return (
    <Router>
        <Routes>
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
            </Route>
        </Routes>
    </Router>
  )
}


export default App
if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
      <ProductsProvider>
        <React.StrictMode>
          <App/>
        </React.StrictMode>
      </ProductsProvider>
    )
}
