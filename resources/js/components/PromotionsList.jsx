import React, { useState } from 'react'
import PromotionCard from './PromotionCard';
import { useProducts } from '../context/ProductsContext';
import PromotionModal from './PromotionModal';

const PromotionsList = () => {
    const { promotions } = useProducts();
    const [modal, setModal] = useState(false)
    const [datamodal, setDataModal] = useState([])

    const showModal = (e, product) => {
      e.preventDefault();
      setDataModal(product);
      setModal(true);
    }

    return (
      <>
        <div className="container px-5 pt-4">
          <div className="row">
            <div className="col-12">
              <h1 className="fw-bold mb-1">
                Promociones
              </h1>

              <p className="text-muted mb-0 col-md-8">
                Combos y ofertas especiales en pizzas, hamburguesas, acompañamientos, bebidas y más.
              </p>
            </div>
          </div>
        </div>

        <div className="container p-5" style={{ minHeight: "100vh" }}>
          <div className="row g-4">
            {promotions.map(promotion => (
              <div className="col-12 col-lg-6" key={promotion.id}>
                <PromotionCard key={promotion.id} promotion={promotion} onClick={(e)=>showModal(e,promotion)} />
              </div>
            ))}
            {
              modal && <PromotionModal promotion={datamodal} close={setModal}/>
            }
          </div>
        </div>

      </>      
        
    );
}

export default PromotionsList