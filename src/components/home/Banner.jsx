import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full h-[70vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src='https://example.com/toy-image1.jpg'
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-yellow-500 to-[rgba(255, 255, 255, 0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
              <h2 className='text-6xl font-bold'>Discover the Joy of Toys</h2>
              <p>Find a wide selection of high-quality toys for all ages. Choose from our extensive collection and make playtime fun and educational.</p>
              <div>
                <button className="btn btn-primary mr-5 bg-yellow-500">Explore Now</button>
                <button className="btn btn-outline btn-secondary">Latest Arrivals</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5 text-yellow-500">❮</a>
            <a href="#slide2" className="btn btn-circle text-yellow-500">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src='https://example.com/toy-image2.jpg'
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-yellow-500 to-[rgba(255, 255, 255, 0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
              <h2 className='text-6xl font-bold'>Bring Joy to Your Kids</h2>
              <p>Explore our wide range of toys designed to entertain, inspire, and engage your children. Give them the gift of happiness and imagination.</p>
              <div>
                <button className="btn btn-primary mr-5 bg-yellow-500">Shop Now</button>
                <button className="btn btn-outline btn-secondary">Special Offers</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5 text-yellow-500">❮</a>
            <a href="#slide3" className="btn btn-circle text-yellow-500">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src='https://th.bing.com/th/id/OIP.foeU9r_U9FMNe3mL0cTVVAHaE7?w=285&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7'
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-yellow-500 to-[rgba(255, 255, 255, 0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
              <h2 className='text-6xl font-bold'>Toys for Every Adventure</h2>
              <p>Discover a world of toys that encourage exploration, creativity, and learning. Inspire your childs imagination with our diverse toy collection.</p>
              <div>
                <button className="btn btn-primary mr-5 bg-yellow-500">Browse Toys</button>
                <button className="btn btn-outline btn-secondary">Best Sellers</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5 text-yellow-500">❮</a>
            <a href="#slide4" className="btn btn-circle text-yellow-500">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src='https://example.com/toy-image4.jpg'
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-yellow-500 to-[rgba(255, 255, 255, 0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
              <h2 className='text-6xl font-bold'>Unleash Your Inner Child</h2>
              <p>Rediscover the joy of playtime with our unique and nostalgic toys. Let your inner child roam free and create timeless memories.</p>
              <div>
                <button className="btn btn-primary mr-5 bg-yellow-500">Get Started</button>
                <button className="btn btn-outline btn-secondary">New Releases</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5 text-yellow-500">❮</a>
            <a href="#slide1" className="btn btn-circle text-yellow-500">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;