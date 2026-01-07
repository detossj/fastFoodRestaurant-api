import React, { useState } from 'react'
import { useProducts } from "../context/ProductsContext";
import ProductCard from "./ProductCard";
import ProductModal from './ProductModal';

const ProductsList = ({ id }) => {
  const { products } = useProducts();
  const [modal, setModal] = useState(false)
  const [datamodal, setDataModal] = useState([])

  const filtered = products.filter(p => p.category_id === id);

  const showModal = (e, product) => {
    e.preventDefault();
    setDataModal(product);
    setModal(true);
  };

  return (
    <div className="container p-5" style={{ minHeight: "100vh" }}>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} onClick={(e)=>showModal(e,product)}/>
          
        ))}
        {
          modal && <ProductModal product={datamodal} close={setModal}/>
        }
      </div>
    </div>
  );
};

export default ProductsList;
