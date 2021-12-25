import React from 'react'

const ProductList = ({ data }) => {
  return (
    <div className="grid grid-cols-2 tablet:grid-cols-4 pc:grid-cols-6 gap-2 my-4 tablet:first:mt-3 tablet:my-6">
      {data.map((product) => (
        <a
          href={product.destination}
          className="flex bg-white rounded shadow-sm pc:shadow-none p-2 items-center overflow-hidden"
          key={product.name}
        >
          <img
            className="w-12 object-contain"
            src={product.image}
            alt={product.name}
          />
          <p className="text-secondary text-xs">{product.name}</p>
        </a>
      ))}
    </div>
  )
}

export default ProductList
