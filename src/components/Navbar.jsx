import React, { useState } from 'react'

// icons
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'

// components
import SearchModal from './SearchModal'

const Navbar = () => {
  const [showSearchModal, setShowSearchModal] = useState(false)
  return (
    <nav className="flex mx-6 my-3 z-10 items-end justify-between">
      <span className="p-2 cursor-pointer text-2xl">
        <AiOutlineMenu />
      </span>
      <img
        className="w-32 object-contain p-2 cursor-pointer"
        src="https://www.muji.com/img/logo_muji_b.png"
        alt="mujiLogo"
      />
      <span
        onClick={() => setShowSearchModal(!showSearchModal)}
        className="p-2 cursor-pointer text-2xl"
      >
        <AiOutlineSearch />
      </span>
      {showSearchModal && (
        <SearchModal
          showSearchModal={showSearchModal}
          setShowSearchModal={setShowSearchModal}
        />
      )}
    </nav>
  )
}

export default Navbar
