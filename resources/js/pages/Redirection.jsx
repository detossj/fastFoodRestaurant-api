import React from 'react'
import RedirectionCard from '../components/RedirectionCard'
import CheckoutTopBar from '../components/CheckoutTopBar'

const Redirection = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100 bg-light">
        <CheckoutTopBar />
        <div className="flex-grow-1 d-flex justify-content-center align-items-center p-3">
          <RedirectionCard />
        </div>
      </div>
    </>
  )
}

export default Redirection