function Home() {
  return (
    <div className="flex-grow-1 w-100 bg-white">
      <div className="container py-5">
        {/* Hero banner placeholder */}
        <div
          className="d-flex align-items-center justify-content-center rounded-4 mb-5"
          style={{ height: 320, backgroundColor: '#f8f9fa' }}
        >
          <div className="text-center">
            <h1 className="fw-bold mb-2">Traditional Designer Studio</h1>
            <p className="text-secondary mb-0">Handcrafted elegance, made in India</p>
          </div>
        </div>

        {/* Featured categories */}
        <h3 className="fw-semibold mb-4">Shop by Category</h3>
        <div className="row g-4 mb-5">
          {['Ethnic Wear', 'Jewelry', 'Home Decor', 'Accessories'].map((cat) => (
            <div key={cat} className="col-6 col-md-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 p-5 border"
                style={{ minHeight: 140 }}
              >
                <span className="text-secondary fw-medium">{cat}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Featured products placeholder */}
        <h3 className="fw-semibold mb-4">Featured Products</h3>
        <div className="row g-4">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-3">
              <div className="rounded-3 p-3 border">
                <div
                  className="rounded-2 mb-3"
                  style={{ height: 200, backgroundColor: '#f0f0f0' }}
                />
                <div className="fw-semibold">Product Name</div>
                <div className="text-secondary small">&rsquo;1,299</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
