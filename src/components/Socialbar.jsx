import React from 'react'

const Socialbar = () => {
  return (
    <nav className="bg-gray-200">
      <div className="flex max-w-5xl mx-auto gap-2 px-4 py-4 tablet:px-12">
        <a href="https://twitter.com/MUJIUSA">
          <img
            className="mobile:w-6 tablet:w-8 object-contain"
            src="https://www.muji.com/img/misc_twitter.png"
            alt="Muji Twitter"
          />
        </a>
        <a href="https://www.facebook.com/MUJIUSA">
          <img
            className="w-5 tablet:w-6 object-contain"
            src="https://www.muji.com/img/misc_facebook.png"
            alt="Muji Facebook"
          />
        </a>
        <a href="https://instagram.com/mujiusa">
          <img
            className="w-5 tablet:w-6 object-contain"
            src="https://www.muji.com/img/misc_instagram.png"
            alt="Muji Instagram"
          />
        </a>
        <a href="https://pinterest.com/mujiusa/">
          <img
            className="w-5 tablet:w-6 object-contain"
            src="https://www.muji.com/img/misc_pintarest.png"
            alt="Muji Pinterest"
          />
        </a>
      </div>
    </nav>
  )
}

export default Socialbar
