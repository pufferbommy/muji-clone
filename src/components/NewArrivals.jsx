import React from 'react'

// data
const products = [
  {
    name: "Women's Yak Blend Wool Crew Neck Sweater",
    image:
      'https://info.muji.us/info/wp-content/uploads/2021/12/21aw_women_yak_wool.jpg',
    price: '59.90',
    destination:
      'https://www.muji.us/products/yak-blend-wool-crew-neck-sweater-bac2020a',
  },
  {
    name: "Women's Lightweight Pocketable Down Vest",
    image:
      'https://info.muji.us/info/wp-content/uploads/2021/12/21aw_women_vest.jpg',
    price: '49.90',
    destination:
      'https://www.muji.us/products/women-lightweight-pocketable-down-vest-bdc0621a',
  },
  {
    name: "Women's Light Weight Australian Down Pocketable Collarless Coat",
    image:
      'https://info.muji.us/info/wp-content/uploads/2021/12/21aw_women_coat.jpg',
    price: '99.00',
    destination:
      'https://www.muji.us/products/women-light-weight-australian-down-pocketable-collarless-coat-l9ad415',
  },
  {
    name: "Men's Yak Blend Wool Crew Neck Sweater",
    image:
      'https://info.muji.us/info/wp-content/uploads/2021/12/21aw_men_yak_wool.jpg',
    price: '69.90',
    destination:
      'https://www.muji.us/products/men-yak-blend-wool-crew-neck-sweater-aaa0621a',
  },
  {
    name: "Men's Light Weight Pocketable Stand Collar Down Vest",
    image: 'https://info.muji.us/info/wp-content/uploads/2021/12/21aw_men_vest.jpg',
    price: '49.90',
    destination:
      'https://www.muji.us/products/men-light-weight-pocketable-stand-collar-down-vest-adg0921a',
  },
  {
    name: "Men's Light Weight Pocketable Stand Collar Down Jacket",
    image: 'https://info.muji.us/info/wp-content/uploads/2021/12/21aw_men_coat.jpg',
    price: '69.90',
    destination:
      'https://www.muji.us/products/men-light-weight-pocketable-stand-collar-down-jacket-adg1121a',
  },
]

// components
import More from './More'
import NewArrivalList from './NewArrivalList'

const NewArrivals = () => {
  return (
    <div className="mobile:px-6 tablet:px-12 mt-10">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg text-primary">New Arrivals</h1>
        <More
          title="More New Arrivals"
          destination="https://www.muji.us/collections/new-arrivals?utm_source=usa_global&utm_medium=new_arrival"
        />
      </div>
      <NewArrivalList products={products} />
    </div>
  )
}

export default NewArrivals
