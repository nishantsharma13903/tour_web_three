import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import "../../styles/sliderThree.css";

import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import hero_img_1 from "../../assets/media/cruises_img_1.jpg";
import hero_img_2 from "../../assets/media/cruises_img_2.jpg";
import hero_img_3 from "../../assets/media/cruises_img_3.jpg";
import hero_img_4 from "../../assets/media/cruises_img_4.jpg";
import hero_img_5 from "../../assets/media/cruises_img_5.jpg";
import TourCardOne from "../cards/TourCardOne";

const SwiperSliderTwo = ({ heading, data=[] }) => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  console.log("Data", data);

  return (
    <div className="carousel-container">
      {/* Custom navigation buttons on top */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[22px] font-semibold text-gray-700">
          {heading || "Heading"}
        </h2>
        <div className="carousel-nav flex gap-2">
          <button ref={prevRef} className="custom-prev">
            <GoChevronLeft size={20} />
          </button>
          <button ref={nextRef} className="custom-next">
            <GoChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        // slidesPerView={4}
        // spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 4 }, // Mobile screens
          640: { slidesPerView: 3, spaceBetween: 8 }, // Small tablets
          1024: { slidesPerView: 4, spaceBetween: 20 }, // Laptops
          1280: { slidesPerView: 4, spaceBetween: 25 }, // Desktops
        }}
        pagination={{ clickable: true }}
        navigation={true} // Initially enable navigation
        onSwiper={setSwiperInstance} // Store Swiper instance
        modules={[Navigation, Pagination]}
      >
        {data && data.places.map((innerData, index) => (
          <SwiperSlide key={index}>
            <TourCardOne data={innerData} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSliderTwo;
