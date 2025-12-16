import React from 'react'
import { useProducts } from "../context/ProductsContext";
import ProductCard from "./ProductCard";
import LoadingBar from "./LoadingBar";

const ProductsList = ({ id }) => {
  const { products, loading } = useProducts();

  if (loading) return <LoadingBar />;

  const filtered = products.filter(p => p.category_id === id);

  return (
    <div className="container p-5" style={{ minHeight: "100vh" }}>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
