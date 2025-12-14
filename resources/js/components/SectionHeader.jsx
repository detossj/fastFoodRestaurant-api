import React from 'react'
import { useProducts } from "../context/ProductsContext"
import LoadingBar from "./LoadingBar"

const SectionHeader = ({ id }) => {
  const { categories, loading } = useProducts()

  if (loading) return <LoadingBar />

  const category = categories.find(c => c.id === id)

  if (!category) return <h2>Categoría no encontrada</h2>

  return (
    <div className="container px-5 pt-4">
      <div className="row">
        <div className="col-12">
          <h1 className="fw-bold mb-1">
            {category.name}
          </h1>

          <p className="text-muted mb-0 col-md-8">
            {category.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SectionHeader
