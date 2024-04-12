import React from 'react'
import '../component/home.css'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        {/* <!-- Navbar Start --> */}
    <nav className="navbar navbar-expand-lg navbar-dark" id="top-nav">
      <div className="container-fluid">
        <Link className="navbar-brand fs-2" to="/" id="brand-name">CHOUDHARI</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Project">Projects</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
          </ul>
          <form className="d-flex" role="search" id="searchForm">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              id="searchBox"
            />
            <button className="btn btn-outline-danger" type="submit" id="searchBtn" onClick={(e)=>e.preventDefault()}>
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
    {/* <!-- Navbar End --> */} 
    </>
  )
}

export default Header
