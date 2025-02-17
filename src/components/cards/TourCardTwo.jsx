import React from "react";

export default function TourCardTwo(props) {
  return (
    <div className="bg-transparent rounded-lg md:w-[170px] w-[140px] relative hover:-top-1 transition-all my-3 duration-[2800ms]">
      <img
        src={props.image}
        alt="Thing to do"
        className="w-full md:h-[180px] h-[150px] object-cover rounded-md"
      />
      <div className="py-4">
        <h3 className="text-sm font-semibold text-gray-800">Thing to Do Title</h3>
        <p className="text-sm text-gray-500">from ₹3,168</p>
      </div>
    </div>
  );
}
