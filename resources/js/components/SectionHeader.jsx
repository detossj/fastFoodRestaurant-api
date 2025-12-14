import React from 'react'
import { useProducts } from "../context/ProductsContext";
import LoadingBar from "./LoadingBar";

const SectionHeader = ({ id }) => {
  const { categories, loading } = useProducts();

  if (loading) return <LoadingBar />;

  const category = categories.find(c => c.id === id);

  if (!category) {
    return <h2>Categoría no encontrada</h2>;
  }

  return (
    <div>
      <h1>{category.name}</h1>
      <h3>{category.description}</h3>
    </div>
  );
};

export default SectionHeader
