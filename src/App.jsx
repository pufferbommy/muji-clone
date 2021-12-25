import React from 'react'

// components
import Navbar from './components/Navbar'
import Header from './components/Header'
import Products from './components/Products'

const App = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <Header />
        <Products />
      </div>
    </>
  )
}

export default App
