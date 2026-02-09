import React from 'react'

const LoadingBar = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
        <div 
          className="spinner-border" 
          role="status" 
          style={{ width: "6rem", height: "6rem", color:"rgb(249, 124, 47)", borderWidth: "0.4rem"}} 
        >
        </div>
    </div>
  )
}

export default LoadingBar