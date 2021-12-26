import React from 'react'

// components
import Navbar from './components/Navbar'
import Header from './components/Header'
import Products from './components/Products'
import NewArrivals from './components/NewArrivals'

const App = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <Header />
        <Products />
        <NewArrivals />
      </div>
    </>
  )
}

export default App
