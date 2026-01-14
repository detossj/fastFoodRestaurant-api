import React from 'react'
import { createContext, useContext, useEffect, useState } from "react";
import Config from "../Config";

// Es para crear el contexto (es como una caja donde se guardan datos para no pasar lso props)
const ProductsContext = createContext(null);

// Es para envolver la app y permite que todos los componentes dentro accedan a los datos
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);

    try {
      const [productsRes, categoriesRes, promotionsRes] = await Promise.all([
        Config.getAllProducts(),
        Config.getAllCategories(),
        Config.getAllPromotions()
      ]);

      setProducts(productsRes?.data ?? []);
      setCategories(categoriesRes?.data ?? []);
      setPromotions(promotionsRes?.data ?? []);

    } catch (err) {
      console.error("Error cargando datos:", err);
      setProducts([]);
      setCategories([]);
      setPromotions([]);
      setError("Error al cargar productos o categorías");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    // al colocar los products y el loading en el value hace que cualquier componente pueda leerlos usando el useProducts que se define abajo
    <ProductsContext.Provider value={{ products, categories, promotions, loading, error}}>
      {children}
    </ProductsContext.Provider>
  );
};

// Esto me permite hacer  const { products, loading } = useProducts() en cualquier componente
export const useProducts = () => useContext(ProductsContext);
