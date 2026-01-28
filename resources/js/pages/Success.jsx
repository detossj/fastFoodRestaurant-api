import React from 'react'
import CheckoutTopBar from '../components/CheckoutTopBar'
import SuccessCard from '../components/SuccessCard'


const Success = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <CheckoutTopBar />
      <div className="flex-grow-1 d-flex justify-content-center align-items-center p-3">
        <SuccessCard />
      </div>
    </div>
  )
}

export default Success