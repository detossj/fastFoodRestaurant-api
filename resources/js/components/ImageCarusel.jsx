import React from 'react'
import burgerImg from '../../assets/images/burger-potato.webp';
import pizzaDrinkImg from '../../assets/images/pizza-drink.webp';
import pizzaDrinkGarlicsticksImg from '../../assets/images/pizza-drink-garlicsticks.webp';
import { useNavigate } from 'react-router-dom';

const ImageCarusel = () => {

  const navigate = useNavigate()

  const onClick = () => {
    navigate('/promociones')
  }

  return (
    <div className="container mt-5">

      <div id="carouselExampleAutoplaying"
           className="carousel slide"
           data-bs-ride="carousel"
           data-bs-interval="3000">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img 
              src={burgerImg} className="d-block w-100"
              style={{ height: '500px', objectFit: 'cover' }}
              alt="Hamburguesa con papas"
              onClick={onClick} 
            />
          </div>

          <div className="carousel-item">
            <img 
              src={pizzaDrinkImg} className="d-block w-100"
              style={{ height: '500px', objectFit: 'cover' }}
              alt="Pizza con bebida" 
              onClick={onClick}   
            />
          </div>

          <div className="carousel-item">
            <img 
              src={pizzaDrinkGarlicsticksImg} className="d-block w-100"
              style={{ height: '500px', objectFit: 'cover' }}
              alt="Pizza de pepperoni" 
              onClick={onClick} 
            />
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>

    </div>
  )
}

export default ImageCarusel