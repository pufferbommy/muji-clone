import React, { useState } from 'react'

// icons
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'

// components
import SearchModal from './SearchModal'
import MenuModal from './MenuModal'

const Navbar = () => {
  const [showMenuModal, setShowMenuModal] = useState(false)
  const [showSearchModal, setShowSearchModal] = useState(false)
  return (
    <>
      {/* <-- Modals Start --> */}
      {showMenuModal && (
        <MenuModal
          showMenuModal={showMenuModal}
          setShowMenuModal={setShowMenuModal}
        />
      )}
      {showSearchModal && (
        <SearchModal
          showSearchModal={showSearchModal}
          setShowSearchModal={setShowSearchModal}
        />
      )}
      {/* <-- Modals End --> */}
      <nav className="flex mx-6 my-3 z-10 items-end justify-between">
        <span
          onClick={() => setShowMenuModal(!showMenuModal)}
          className="p-2 cursor-pointer text-2xl"
        >
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
      </nav>
    </>
  )
}

export default Navbar
