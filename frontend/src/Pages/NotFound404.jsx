import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/Styles.css'

function NotFound404() {
  const styles = {
    marginTop: '170px',
  }  
  return (
    <div className="align-items-center justify-content-center font" style={styles}>
        <div className="text-center">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
            <p className="lead">
                The page you’re looking for doesn’t exist.
            </p>
            <Link to="/" className="btn btn-warning">Go Home</Link>
        </div>
    </div>
  )
}

export default NotFound404
