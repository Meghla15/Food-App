import React from 'react';

const Banner = () => {
    return (
        <div className='banner-container mx-auto p-4'>
        <div className="hero min-h-screen container mx-auto rounded-2xl bg-[url('https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?s=612x612&w=0&k=20&c=kzlrX7KJivvufQx9mLd-gMiMHR6lC2cgX009k9XO6VA=')]">
       <div class="hero-overlay bg-opacity-60"></div>
       <div class="hero-content text-center text-neutral-content">
        <div class="">
          <h1 class="mb-5 lg:text-5xl text-3xl font-bold text-white tracking-wide">Discover an exceptional cooking <br /> class tailored for you!</h1>
          <p class="mb-5 w-2/3 mx-auto">Our intimate bistro blends seasonal ingredients, innovative techniques, and warm hospitality. From farm-to-table delights to handcrafted cocktails, every visit is a culinary masterpiece</p>
          <div className=''>
          <button className="btn btn-md lg:btn-lg rounded-3xl mr-8 bg-[#0BE58A]">Explore Now</button>
          <button className="btn btn-md lg:btn-lg rounded-3xl btn-ghost border-white text-white">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;