import React from 'react'
// icons
import { MdOutlineClose } from 'react-icons/md'

const MenuModal = ({ showMenuModal, setShowMenuModal }) => {
  return (
    <div className="opacity-80 z-50 md:hidden bg-black absolute top-0 left-0 w-screen h-screen">
      <span>
        <MdOutlineClose
          onClick={() => setShowMenuModal(!showMenuModal)}
          className="cursor-pointer text-white absolute text-3xl right-4 top-4"
        />
      </span>
      <ul className="text-white mt-10 text-center">
        <li>Online Store</li>
        <li>About MUJI</li>
        <li>News</li>
        <li>Store Info</li>
        <li>Contact Us</li>
        <li>Press</li>
        <li>Events</li>
        <li>Web Catalog</li>
      </ul>
    </div>
  )
}

export default MenuModal
