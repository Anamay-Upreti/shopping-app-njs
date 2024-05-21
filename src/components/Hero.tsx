import React from 'react'

const Hero = () => {

    var settings = {
        dots: true,
        Infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData =[
        {
            id:0,
            img: "/banner-1.jpg",
            title: "item",
            mainTitle: "Latest Fashion",
            price: "$20"
        },
        {
            id:1,
            img: "/banner-2.jpg",
            title: "item",
            mainTitle: "Latest Fashion",
            price: "$40"
        },
        {
            id:2,
            img: "/banner-2.jpg",
            title: "item",
            mainTitle: "Latest Fashion",
            price: "$30"
        }
    ]

  return (
    <div>Hero</div>
  )
}

export default Hero