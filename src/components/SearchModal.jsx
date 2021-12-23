import React from 'react'
// icons
import { MdOutlineClose } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchModal = ({ showSearchModal, setShowSearchModal }) => {
  return (
    <div className="bg-black opacity-80 z-50 absolute top-0 left-0 w-screen h-screen">
      <MdOutlineClose
        onClick={() => setShowSearchModal(!showSearchModal)}
        className="cursor-pointer text-white absolute text-3xl right-4 top-4"
      />
      <div className="flex fixed mt-20 items-center">
        <AiOutlineSearch className="text-white relative text-2xl left-5 bottom-1" />
        <input
          placeholder="Product Search"
          className="bg-transparent pb-1 placeholder:text-zinc-600 placeholder:text-sm text-white w-[37rem] pl-6 border-b focus:outline-none"
          type="text"
        />
      </div>
    </div>
  )
}

export default SearchModal
