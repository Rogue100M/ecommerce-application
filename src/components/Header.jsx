import { useState } from 'react'

function Header({ onLoginClick, onLogoClick }) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    // TODO: route to search results page with searchQuery
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="container-fluid py-3">
        {/*
          Responsive grid layout:
          - Mobile (<768px): logo + buttons share the first row (col-6 each),
            search wraps to the second row (col-12). Uses order-* to reorder.
          - Desktop (≥768px): logo (col-md flex) | search (col-md-6, ~50%) | buttons (col-md flex)
        */}
        <div className="row align-items-center gx-3 gy-2">
          {/* Company logo — order-1 on mobile (left half), order-1 on desktop (left flex) */}
          <div className="col-6 col-md order-1 d-flex justify-content-start">
            <button
              type="button"
              className="btn p-0 border-0 bg-transparent"
              onClick={onLogoClick}
              aria-label="Go to home page"
            >
              <img
                src="/logo.svg"
                alt="Company Logo"
                height={36}
                className="d-block"
              />
            </button>
          </div>

          {/* Search bar — order-3 on mobile (second row), order-2 on desktop (middle, ~50%) */}
          <div className="col-12 col-md-6 order-3 order-md-2">
            <form onSubmit={handleSearchSubmit} role="search">
              <div className="position-relative">
                <i className="fas fa-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                <input
                  type="search"
                  className="form-control ps-5"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search products"
                />
              </div>
            </form>
          </div>

          {/* User & Cart buttons — order-2 on mobile (right half), order-3 on desktop (right flex) */}
          <div className="col-6 col-md order-2 order-md-3 d-flex justify-content-end gap-2">
            <button
              className="btn rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: 40, height: 40 }}
              aria-label="Login or user account"
              onClick={onLoginClick}
            >
              <i className="fas fa-user"></i>
            </button>
            <button
              className="btn rounded-circle d-flex align-items-center justify-content-center position-relative"
              style={{ width: 40, height: 40 }}
              aria-label="Shopping cart"
            >
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
