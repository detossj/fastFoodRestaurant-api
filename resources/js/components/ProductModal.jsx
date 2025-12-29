import React from 'react'
import './ProductModal.css'

const ProductModal = ({product, close}) => {

  return (
    <div className="modal_bg">
        <div className="modal_content">
            <div className="modal_body">

                <img src={`storage/products/`+product.image_url} width={150} height={150} className='mx-auto d-block rounded-pill p-2 shadow'/>
                <h1 className='text-center'>{product.name}</h1>
                <p>{product.description}</p>

            </div>
            <div className="modal_footer">
                <button onClick={() => close(false)} className='btn btn-primary btn mt-3'>Regresar</button>
            </div>
        </div>
    </div>
  )
}

export default ProductModal