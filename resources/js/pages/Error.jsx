import React from 'react'
import CheckoutTopBar from '../components/CheckoutTopBar'
import ErrorCard from '../components/ErrorCard'

const Error = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100 bg-light">
        <CheckoutTopBar />
        <div className="flex-grow-1 d-flex justify-content-center align-items-center p-3">
          <ErrorCard />
        </div>
      </div>
    </>
  )
}

export default Error