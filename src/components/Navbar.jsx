import React, { useState } from 'react'

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
      <nav className="flex mx-2.5 tablet:mx-9 pc:mx-12 z-10 justify-between items-center">
        <span
          onClick={() => setShowMenuModal(!showMenuModal)}
          className="pc:hidden cursor-pointer text-2xl"
        >
          <img
            className="object-contain w-5"
            src="https://www.muji.com/img/menu_b.png"
            alt="mujiMenuIcon"
          />
        </span>
        <span className="pc:flex gap-8">
          <a href="/">
            <img
              className="w-[6.75rem] pc:w-[8.25rem] object-contain py-6 cursor-pointer"
              src="https://www.muji.com/img/logo_muji_b.png"
              alt="mujiLogo"
            />
          </a>
          <span className="hidden gap-5 text-[13px] pc:flex items-center">
            <a
              href="https://www.muji.us/store/?utm_source=usa_global&utm_medium=top_menu"
              className="menuList"
            >
              Online&nbsp;Store
            </a>
            <a href="https://ryohin-keikaku.jp/eng/about-muji/" className="menuList">
              About&nbsp;MUJI
            </a>
            <a
              href="https://info.muji.us/category/news/?area=header"
              className="menuList"
            >
              News
            </a>
            <a
              href="https://www.muji.us/pages/store-information"
              className="menuList"
            >
              Store&nbsp;Info
            </a>
            <a href="https://www.muji.us/pages/contact-us" className="menuList">
              Contact&nbsp;Us
            </a>
            <a
              href="https://info.muji.us/press-inquries/?area=header"
              className="menuList"
            >
              Press
            </a>
            <a href="https://www.muji.com/us/events/" className="menuList">
              Events
            </a>
            <a href="https://info.muji.us/web-catalog/" className="menuList">
              Web&nbsp;Catalog
            </a>
          </span>
        </span>
        <span
          onClick={() => setShowSearchModal(!showSearchModal)}
          className={`pc:mr-4 cursor-pointer text-2xl`}
        >
          <img
            className="w-5 pc:w-4 object-contain"
            src="https://www.muji.com/img/icon_search_b.png"
            alt="mujiSearchIcon"
          />
        </span>
      </nav>
    </>
  )
}

export default Navbar
