import React from 'react';
import ProductCard from './ProductCard';


const productsData = [
  
    {
      img: "/img1.jpg",
      title: 'Product 1',
      description: 'Description for product 1',
      rating: 4.5,
      price: '$10.00',
    },
    {
      img: "/img2.jpg",
      title: 'Product 2',
      description: 'Description for product 2',
      rating: 4.0,
      price: '$20.00',
    },
    {
      img: "/img3.png",
      title: 'Product 3',
      description: 'Description for product 3',
      rating: 5.0,
      price: '$30.00',
    },
    {
      img: "/img4.jpg",
      title: 'Product 4',
      description: 'Description for product 4',
      rating: 3.5,
      price: '$40.00',
    },
    {
      img: "/img5.png",
      title: 'Product 5',
      description: 'Description for product 5',
      rating: 4.2,
      price: '$50.00',
    },
    {
      img: "/img6.png",
      title: 'Product 6',
      description: 'Description for product 6',
      rating: 4.8,
      price: '$60.00',
    },
  ];

  const NewProducts = () =>{
  return (
    <div>
      <div className="container pt-16">
        <h2 className='font-medium text-2xl pb-4'>New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-20">
            {productsData.map((item, index)=> <ProductCard
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
            rating={item.rating}
            price={item.price}
            />)}
        </div>
      </div>
     
    </div>
  );
};

export default NewProducts;
