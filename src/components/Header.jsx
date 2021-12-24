import React from 'react'

const Header = () => {
  return (
    <header className="mt-1">
      <a href="https://www.muji.us/pages/2021-holiday-gift-guide">
        <img
          src="https://info.muji.us/info/wp-content/uploads/2021/12/21_muji_gift_global_banner_pc.jpg"
          alt=""
        />
      </a>
      <div className="grid grid-cols-4 gap-5 mt-5">
        <a href="https://www.muji.com/us/events/">
          <img
            src="https://info.muji.us/info/wp-content/uploads/2021/06/MCM_panel-09.png"
            alt=""
          />
        </a>
        <a
          href="https://www.muji.us/pages/winter-lantern-festival"
          className="relative"
        >
          <h1 className="text-shadow-xl absolute text-white font-bold bottom-2 left-3">
            Winter Lantern Festival
          </h1>
          <img
            src="https://info.muji.us/info/wp-content/uploads/2021/12/21_winter_lantern_global_banner.jpg"
            alt=""
          />
        </a>
        <a href="https://www.muji.com/us/feature/down/21aw/" className="relative">
          <h1 className="text-shadow-xl absolute text-white font-bold bottom-2 left-3">
            Lightweight Down
          </h1>
          <img
            src="https://info.muji.us/info/wp-content/uploads/2021/12/21_lightweight_down_global_banner.jpg"
            alt=""
          />
        </a>
        <div className="flex flex-col">
          <a href="https://www.muji.com/us/passport/">
            <img
              src="https://info.muji.us/info/wp-content/uploads/2021/08/mp_640x400.jpg"
              alt=""
            />
          </a>
          <div className="w-full h-full bg-zinc-300"></div>
        </div>
      </div>
    </header>
  )
}

export default Header
