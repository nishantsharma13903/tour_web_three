import React from "react";
import hero_vid from "../../assets/videos/12747111_3840_2160_24fps.mp4";
import image_1 from "../../assets/media/image_17.jpg";
import image_2 from "../../assets/media/image_18.jpg";
import image_3 from "../../assets/media/image_19.jpg";
import image_4 from "../../assets/media/image_20.jpg";
import TourCardThree from "../../components/cards/TourCardThree";
import TourCardOne from "../../components/cards/TourCardOne";
import ReviewComponents from "./ReviewComponents";
import ClientsCarousel from "./ClientsCarousel";
import ClientsR2LCarousel from "./ClientsR2LCarousel";
import SwiperSliderThree from "../../components/swiper/SwiperSliderThree";
import SwiperSliderTwo from "../../components/swiper/SwiperSliderTwo";

import gif_one from '../../assets/gif/gif_one.gif'
import gif_two from '../../assets/gif/gif_two.gif'
import gif_three from '../../assets/gif/gif_three.gif'
import gif_four from '../../assets/gif/gif_four.gif'

export default function HomePage() {
  const features = [
    {
      icon:gif_three ,
      title: "World-Class Adventures",
      description:
        "With Fly in Minute, every tour is handpicked for quality. Sit back, relax, and let us handle the details.",
    },
    {
      icon: gif_four,
      title: "Value Meets Experience",
      description:
        "Affordable, last-minute bookings, 24/7 support—because your dream vacation shouldn’t break the bank.",
    },
    {
      icon: gif_one,
      title: "Discover Every Corner",
      description:
        "From hidden gems to iconic landmarks, adventure awaits for every kind of traveler. We've got it all.",
    },
    {
      icon: gif_two,
      title: "Satisfaction Guaranteed",
      description:
        "Not impressed? We’ll make it right. Refunds, smiles, and peace of mind—because you're worth it.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[550px] overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
          autoPlay
          loop
          muted
        >
          <source src={hero_vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-16 md:left-1/3 left-1/2 transform -translate-x-1/2  w-11/12 md:w-[600px] leading-[54px] tracking-[0.822222px]   ">
          <h4 className="text-white font-medium text-2xl md:text-4xl mb-10">
            The world's best experiences curated just for you
          </h4>
          {/* <div className="flex-grow left-0 max-w-md mx-auto hidden sm:flex mt-4">
            <input
              type="text"
              placeholder="Search for experiences and cities"
              className="w-full px-4 py-2  rounded-l-lg focus:outline-none focus:ring focus:border-blue-400 placeholder:text-sm"
            />
            <button className="px-4 py-2 bg-white text-gray-400 rounded-r-lg">
              <i className="fa fa-search"></i>
            </button>
          </div> */}
          <div className="flex-grow max-w-md hidden sm:flex mt-4">
            <input
              type="text"
              placeholder="Search for experiences and cities"
              className="w-full px-4 py-2  rounded-l-lg focus:outline-none focus:ring focus:border-blue-400 placeholder:text-sm"
            />
            <button className="px-4 py-2 bg-white text-gray-600  rounded-r-lg">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="w-11/12 md:w-9/12 mx-auto py-10">
        {/* Features Section */}
        <div className="flex flex-wrap justify-center gap-6 py-10">
          {features.map((feature, index) => (
            <div key={index} className="w-11/12 sm:w-[240px] text-start">
              {/* <div className="text-4xl mb-2">{feature.icon}</div> */}
              <div className="text-4xl mb-2">
                <img src={feature.icon} className="h-[50px] w-[50px]" alt="Feature Icon" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-600 text-sm mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* <section className="my-10">
          <h2 className="text-2xl font-semibold text-gray-700">
            Explore world's top destinations
          </h2>
          <div className="flex flex-wrap gap-6 mt-6">
            {[image_1, image_2, image_3, image_4].map((item, index) => (
              <TourCardThree image={item} key={index} />
            ))}
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-2xl font-semibold text-gray-700 ">
            Similar experiences you'd love
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[image_1, image_2, image_3, image_4].map((item, index) => (
              <TourCardOne image={item} key={index} />
            ))}
          </div>
        </section> */}
        <section className="mt-10 mb-8">
          <SwiperSliderThree heading="Explore world's top destinations" />
        </section>

        <section className="mb-16">
          <SwiperSliderTwo heading="Cruises top recommendations" />
        </section>
      </div>

      <section className=" bg-[#f8f8f8] h-[420px] w-full flex justify-center items-center px-6">
        <SwiperSliderThree heading="Top things to do worldwide" />
      </section>

      {/* Reviews Section */}

      <div className="bg-black py-10 px-4 text-white">
        <div className="max-w-full mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-[30%] text-center md:text-left flex justify-center items-center md:ml-20">
            <h2 className="text-white font-sans text-[32px] md:text-[40px] font-bold leading-[44px] md:leading-[54px] tracking-[0.6px]">
              Millions <br /> love heading out with us 💖
            </h2>
          </div>

          <div className="w-full md:w-[70%] mt-6 md:mt-0">
            <ReviewComponents />
          </div>
        </div>
      </div>
      {/* <div className="bg-black py-10 px-4 text-white">
        <div className=" mx-auto flex flex-col md:flex-row gap-10">
          <div className="text-2xl md:text-3xl font-bold  ml-52 md:text-left w-full md:w-[40%] text-end ">
            <h2 className="text-white font-sans text-[40px] font-bold  leading-[54px] tracking-[0.6px] mt-28">Millions<h2>love heading out with us 💖</h2></h2>
          </div>
          <div className="w-full md:w-[60%] mt-6 md:mt-0">
            <ReviewComponents />
          </div>

        </div>

      </div> */}
      <div>
        <div className="w-11/12 md:w-9/12 mx-auto py-10">
          <h3 className="text-2xl font-semibold text-gray-700 my-8 ">
            We have the best partners
          </h3>
        </div>
        <ClientsCarousel />
        <ClientsR2LCarousel />
      </div>
    </div>
  );
}
