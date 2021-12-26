import React from 'react'

// components
import More from './More'

const StoreInfomation = () => {
  return (
    <section className="mobile:p-0 tablet:p-12 flex flex-col gap-4">
      <div className="flex mobile:px-6 tablet:px-0 justify-between">
        <h1 className="font-bold text-lg text-primary">Store Infomation</h1>
        <More title="More" destination="https://www.muji.com/storelocator/?c=us" />
      </div>
      <div>
        <iframe
          className="border-0 w-full h-64"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7368085044923!2d100.52618251529732!3d13.73437790139619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299d832bc7a59%3A0xcbf73dcd510db7a0!2sMuji%20Samyan%20Mitrtown!5e0!3m2!1sen!2sth!4v1640521685673!5m2!1sen!2sth"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}

export default StoreInfomation
