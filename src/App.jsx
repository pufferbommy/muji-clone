import React from 'react'

// components
import Navbar from './components/Navbar'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <div className="max-w-5xl mx-8 lg:mx-auto">
        <Navbar />
        <Header />
      </div>
    </>
  )
}

export default App
