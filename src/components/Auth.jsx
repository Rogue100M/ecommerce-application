import { useState } from 'react'

function Auth({ view, onViewChange, onClose }) {
  const [showPassword, setShowPassword] = useState(false)

  // Login form state
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  // Sign Up form state
  const [signupUsername, setSignupUsername] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupMobile, setSignupMobile] = useState('')
  const [signupPassword, setSignupPassword] = useState('')

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    // TODO: integrate login API — POST /auth/login with loginEmail, loginPassword
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    // TODO: integrate signup API — POST /auth/register with signupUsername, signupEmail, signupMobile, signupPassword
  }

  return (
    <div className="d-flex align-items-center justify-content-center w-100 px-3 bg-white">
      <div className="position-relative card border-0 shadow-lg" style={{ maxWidth: 440, width: '100%' }}>
        {/* Close button */}
        <button
          type="button"
          className="btn btn-sm text-secondary position-absolute top-0 end-0 mt-3 me-3"
          onClick={onClose}
          aria-label="Close"
        >
          <i className="fas fa-times"></i>
        </button>

        <div className="card-body p-4 p-md-5">

          {/* Header */}
          <h2 className="text-center fw-semibold mb-1">
            {view === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-center text-secondary small mb-4">
            {view === 'login' ? 'Sign in to your account' : 'Register a new account'}
          </p>

          {/* Login form */}
          {view === 'login' && (
            <form onSubmit={handleLoginSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="loginEmail" className="form-label text-secondary small fw-medium">
                  Email or Mobile Number
                </label>
                <input
                  id="loginEmail"
                  type="text"
                  className="form-control"
                  placeholder="you@example.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="loginPassword" className="form-label text-secondary small fw-medium">
                  Password
                </label>
                <div className="input-group">
                  <input
                    id="loginPassword"
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    placeholder="Enter password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">
                Login
              </button>

              <p className="text-center text-secondary small mt-3 mb-0">
                Don&apos;t have an account?{' '}
                <button
                  type="button"
                  className="btn btn-link btn-sm p-0 text-decoration-none text-primary"
                  onClick={() => onViewChange('register')}
                >
                  Register here
                </button>
              </p>
            </form>
          )}

          {/* Sign Up form */}
          {view === 'register' && (
            <form onSubmit={handleSignupSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="signupUsername" className="form-label text-secondary small fw-medium">
                  Username
                </label>
                <input
                  id="signupUsername"
                  type="text"
                  className="form-control"
                  placeholder="Your username"
                  value={signupUsername}
                  onChange={(e) => setSignupUsername(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="signupEmail" className="form-label text-secondary small fw-medium">
                  Email Address
                </label>
                <input
                  id="signupEmail"
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="signupMobile" className="form-label text-secondary small fw-medium">
                  Mobile Number
                </label>
                <input
                  id="signupMobile"
                  type="tel"
                  className="form-control"
                  placeholder="+91 98765 43210"
                  value={signupMobile}
                  onChange={(e) => setSignupMobile(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="signupPassword" className="form-label text-secondary small fw-medium">
                  Password
                </label>
                <div className="input-group">
                  <input
                    id="signupPassword"
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    placeholder="Create a password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">
                Sign Up
              </button>

              <p className="text-center text-secondary small mt-3 mb-0">
                Already have an account?{' '}
                <button
                  type="button"
                  className="btn btn-link btn-sm p-0 text-decoration-none text-primary"
                  onClick={() => onViewChange('login')}
                >
                  Login here
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Auth
