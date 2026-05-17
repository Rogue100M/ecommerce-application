import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Auth from './components/Auth'
import Footer from './components/Footer'

function App() {
  const [view, setView] = useState('home') // 'home' | 'login' | 'register'

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header onLoginClick={() => setView('login')} onLogoClick={() => setView('home')} />
      {view !== 'home' ? (
        <div className="flex-grow-1 d-flex bg-white">
          <Auth view={view} onViewChange={setView} onClose={() => setView('home')} />
        </div>
      ) : (
        <Home />
      )}
      <Footer />
    </div>
  )
}

export default App
