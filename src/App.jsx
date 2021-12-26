import React from 'react'

// components
import Navbar from './components/Navbar'
import Header from './components/Header'
import Products from './components/Products'
import NewArrivals from './components/NewArrivals'
import StoreInfomation from './components/StoreInfomation'
import Socialbar from './components/Socialbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <Header />
        <Products />
        <NewArrivals />
        <StoreInfomation />
      </div>
      <div>
        <Socialbar />
        <Footer />
      </div>
    </>
  )
}

export default App
