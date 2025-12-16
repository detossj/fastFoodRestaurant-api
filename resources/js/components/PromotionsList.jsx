import React from 'react'
import LoadingBar from './LoadingBar';
import PromotionCard from './PromotionCard';
import { useProducts } from '../context/ProductsContext';

const PromotionsList = () => {
    const { promotions, loading } = useProducts();

    if (loading) return <LoadingBar />;

    return (
        <div className="container p-5" style={{ minHeight: "100vh" }}>
          <div className="d-flex flex-wrap gap-4 justify-content-center">
            {promotions.map(promotion => (
              <PromotionCard key={promotion.id} promotion={promotion} />
            ))}
          </div>
        </div>
    );
}

export default PromotionsList