import React from 'react'
// icons
import { MdOutlineClose } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchModal = ({ showSearchModal, setShowSearchModal }) => {
  return (
    <>
      <div className="opacity-80 z-50 lg:hidden bg-black absolute top-0 left-0 w-screen h-screen">
        <MdOutlineClose
          onClick={() => setShowSearchModal(!showSearchModal)}
          className="cursor-pointer text-white absolute text-3xl right-4 top-4"
        />
        <div className="flex fixed mt-[5.5rem] items-center w-full">
          <AiOutlineSearch className="text-white relative text-2xl left-5 bottom-1" />
          <input
            placeholder="Product Search"
            className="bg-transparent pb-1 placeholder:text-zinc-600 text-white w-[calc(100%-50px)] pl-7 border-b focus:outline-none"
            type="text"
          />
        </div>
      </div>
    </>
  )
}

export default SearchModal
