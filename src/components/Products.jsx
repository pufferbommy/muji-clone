import React from 'react'

// data
const data = {
  clothes: [
    {
      name: 'Apparel',
      image:
        'https://info.muji.us/info/wp-content/uploads/2021/12/global_apparel_icon.jpg',
      destination:
        'https://www.muji.us/collections/apparel?utm_source=usa_global&utm_medium=product',
    },
    {
      name: "Woman's",
      image:
        'https://info.muji.us/info/wp-content/uploads/2021/12/global_women_icon.jpg',
      destination:
        'https://www.muji.us/collections/womens?utm_source=usa_global&utm_medium=product',
    },
    {
      name: "Men's",
      image:
        'https://info.muji.us/info/wp-content/uploads/2021/12/global_men_icon.jpg',
      destination:
        'https://www.muji.us/collections/mens?utm_source=usa_global&utm_medium=product',
    },
    {
      name: 'Unisex',
      image:
        'https://info.muji.us/info/wp-content/uploads/2021/12/global_unisex_icon.jpg',
      destination:
        'https://www.muji.us/collections/unisex?utm_source=usa_global&utm_medium=product',
    },
    {
      name: 'Sale',
      image:
        'https://info.muji.us/info/wp-content/uploads/2021/12/global_sale_icon-1.jpg',
      destination:
        'https://www.muji.us/collections/sale?utm_source=usa_global&utm_medium=product',
    },
  ],
  homeDecoration: [
    {
      name: 'Furnifure',
      image:
        'https://info.muji.us/info/wp-content/uploads/2021/12/global_furniture_icon.jpg',
      destination:
        'https://www.muji.us/collections/furniture?utm_source=usa_global&utm_medium=product',
    },
    {
      name: 'Electronics',
      image:
        'https://info.muji.us/info/wp-content/uploads/2017/03/Electronic-1-1.jpg',
      destination:
        'https://www.muji.us/collections/eletronics-clocks?utm_source=usa_global&utm_medium=product',
    },
    {
      name: 'Health & Beauty',
      image: 'https://info.muji.us/info/wp-content/uploads/2020/02/HB-2.jpg',
      destination:
        'https://www.muji.us/collections/health-beauty?utm_source=usa_global&utm_medium=product',
    },
    {
      name: 'Aroma Diffuser',
      image:
        'https://info.muji.us/info/wp-content/uploads/2017/03/4549337765511.jpg',
      destination:
        'https://www.muji.us/collections/aroma-diffuser-aroma-pot?utm_source=usa_global&utm_medium=product',
    },
    {
      name: 'Bedding',
      image: 'https://info.muji.us/info/wp-content/uploads/2017/03/Bedding-2-2.jpg',
      destination:
        'https://www.muji.us/collections/bedding?utm_source=usa_global&utm_medium=product',
    },
    {
      name: 'Dining',
      image: 'https://info.muji.us/info/wp-content/uploads/2017/03/Kitchen1-1.jpg',
      destination:
        'https://www.muji.us/collections/dining?utm_source=usa_global&utm_medium=product',
    },
    {
      name: 'Bathroom',
      image:
        'https://info.muji.us/info/wp-content/uploads/2021/12/global_bathroom_icon.jpg',
      destination:
        'https://www.muji.us/collections/bathroom?utm_source=usa_global&utm_medium=product',
    },
    {
      name: 'Housekeeping',
      image: 'https://info.muji.us/info/wp-content/uploads/2017/03/Cleaning-1.jpg',
      destination:
        'https://www.muji.us/collections/housekeeping-goods?utm_source=usa_global&utm_medium=product',
    },
    {
      name: 'Travel',
      image:
        'https://info.muji.us/info/wp-content/uploads/2017/03/Special-Offer-3-2.jpg',
      destination:
        'https://www.muji.us/collections/travel?utm_source=usa_global&utm_medium=product',
    },
    {
      name: 'Suitcases',
      image:
        'https://info.muji.us/info/wp-content/uploads/2017/03/Special-Offer.jpg',
      destination:
        'https://www.muji.us/collections/suitcases?utm_source=usa_global&utm_medium=product',
    },
    {
      name: 'Stationery',
      image:
        'https://info.muji.us/info/wp-content/uploads/2021/12/global_stationery_icon.jpg',
      destination:
        'https://www.muji.us/collections/stationery?utm_source=usa_global&utm_medium=product',
    },
    {
      name: 'Body Fit Cushion',
      image:
        'https://info.muji.us/info/wp-content/uploads/2017/03/4549337461468_400.jpg',
      destination:
        'https://www.muji.us/collections/body-fit-cushion?utm_source=usa_global&utm_medium=product',
    },
  ],
  other: [
    {
      name: 'Food',
      image:
        'https://info.muji.us/info/wp-content/uploads/2021/12/global_food_icon.jpg',
      destination:
        'https://www.muji.us/collections/food?utm_source=usa_global&utm_medium=product',
    },
  ],
}

// components
import ProductList from './ProductList'
import More from './More'

const Products = () => {
  return (
    <section className="py-4 px-5 pc:px-12 mt-6 mobile:bg-gray-50 pc:bg-white lg:bg-white">
      <div className="flex justify-between">
        <h1 className="text-primary font-bold text-lg">Products</h1>
        <More
          title="Online Store"
          destination="https://www.muji.us/store/?utm_source=usa_global&utm_medium=product"
        />
      </div>
      <div>
        <ProductList data={data.clothes} />
        <hr />
        <ProductList data={data.homeDecoration} />
        <hr />
        <ProductList data={data.other} />
        <hr />
      </div>
    </section>
  )
}

export default Products
