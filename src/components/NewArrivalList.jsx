import React, { useEffect, useState } from 'react'

const NewArrivalList = ({ products }) => {
  const [width, setWidth] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (!width) {
      setIsMobile(false)
    } else if (width >= 0 && width <= 480) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [width])

  useEffect(() => {
    window.onresize = (e) => {
      setWidth(window.innerWidth)
    }
  })

  return (
    <div className="grid mt-8 mb-14 gap-4 text-xs text-secondary mobile:grid-cols-3 tablet:grid-cols-6">
      {isMobile &&
        products
          .map((product, index) => ({ ...product, index: index }))
          .filter((product) => product.index < 3)
          .map((product) => (
            <a
              key={product.name}
              className="flex flex-col gap-2"
              href={product.destination}
            >
              <img
                className="object-contain w-32"
                src={product.image}
                alt={product.name}
              />
              <h1>{product.name}</h1>
              <h2 className="text-primary text-[14px] font-bold">
                <span className="text-secondary text-xs font-semibold">$&nbsp;</span>
                {product.price}
              </h2>
            </a>
          ))}
      {!isMobile &&
        products.map((product) => (
          <a
            key={product.name}
            className="flex flex-col gap-2"
            href={product.destination}
          >
            <img
              className="object-contain w-32"
              src={product.image}
              alt={product.name}
            />
            <h1>{product.name}</h1>
            <h2 className="text-primary font-black">
              <span className="text-secondary font-normal">$&nbsp;</span>
              {product.price}
            </h2>
          </a>
        ))}
    </div>
  )
}

export default NewArrivalList
