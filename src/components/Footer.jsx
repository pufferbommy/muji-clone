import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="flex max-w-5xl mx-auto flex-col w-full text-white px-4 py-6 tablet:px-12">
        <div className="mobile:grid mobile:grid-cols-2 pc:flex gap-5 text-sm">
          <a href="https://www.muji.us/?utm_source=usa_global&utm_medium=footer">
            Online Store
          </a>
          <a href="https://www.muji.us/pages/store-information">Store Info</a>
          <a href="https://info.muji.us/web-catalog/">Web Catalog</a>
          <a href="https://muji.us2.list-manage.com/subscribe?u=cbb85036b23a9db742b722c7f&id=7afad3f9a8?area=footer">
            Newsletter
          </a>
          <a href="https://muji-us.connect.studentbeans.com/us">Student Discount</a>
        </div>
        <hr />
        <div className="flex mobile:grid mobile:grid-cols-2 pc:flex  gap-5 text-sm">
          <a href="https://info.muji.us/category/news/?area=footer">News</a>
          <a href="https://www.muji.us/pages/contact-us">Contact Us</a>
          <a href="https://www.muji.com/us/events/">Events</a>
          <a href="https://www.muji.com/us/message/2020/">Message from MUJI</a>
          <a href="https://muji-us.connect.studentbeans.com/us">About MUJI</a>
          <a href="https://info.muji.us/job/">Jobs</a>
        </div>
        <hr />
        <div className="text-sm mb-8">
          <a href="https://www.muji.com/?area=footer">United States</a>
        </div>
        <div className="flex gap-5 text-sm">
          <div className="flex mobile:flex-col tablet:flex-row gap-5">
            <span className="text-secondary">© Ryohin Keikaku Co., Ltd.</span>
            <div className="mobile:flex mobile:gap-10 tablet:gap-5">
              <span className="text-secondary">© MUJI U.S.A. LIMITED</span>
              <a href="https://www.muji.us/store/accessibility">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
