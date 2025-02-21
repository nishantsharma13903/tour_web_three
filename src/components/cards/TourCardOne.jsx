import React from "react";
import { FaStar, FaBolt } from "react-icons/fa"; // Importing icons
import SwiperSlider from "../swiper/SwiperSliderOne";

const TourCardOne = ({data}) => {

  console.log(data)

  return (
    <div className="max-w-xs rounded-lg overflow-hidden relative hover:-top-1 transition-all my-3 duration-[2800ms]">
      {/* Image Section */}
      <div className="relative">
        {/* <img
          src={props.image} // Replace with your actual image URL
          alt="Cappadocia ATV Tour"
          className="w-full h-48 object-cover rounded-t-lg"
        /> */}<SwiperSlider images={data?.images || []} />
        <span className="absolute top-2 left-2 bg-white text-xs font-medium px-2 py-1 rounded-md shadow-md z-10">
          Free cancellation
        </span>
      </div>

      {/* Card Content */}
      <div className="py-4">
        {/* Category */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">{data.city}</p>
          {/* Rating */}
          <div className="flex justify-center items-center text-xs text-pink-600 font-medium mt-1">
            <FaStar className="text-pink-600 mr-1 mb-0.5" />
            <span>{data.rating}</span> <span className="text-gray-500 ml-1">{data.reviews}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-gray-800 mt-1">
          {data.title}
        </h3>

        {/* Instant Confirmation */}
        <div className="flex items-center text-xs text-gray-700 mt-2">
          <FaBolt className="text-gray-600 mr-1" />
          Instant confirmation
        </div>
        <p className="text-xs font-normal text-gray-800 mt-2">from <span className="line-through">{data.price+"0"}</span></p>
        {/* Price */}
        <div className="flex items-center gap-6 mt-2">

        <p className="text-md font-semibold text-gray-800">{data.price}</p>
        <p className="bg-[#088229] px-2 h-[18px] text-[10px] rounded-sm text-white flex justify-center items-center">Save upto 50%</p>
        </div>
      </div>
    </div>
  );
};

export default TourCardOne;
