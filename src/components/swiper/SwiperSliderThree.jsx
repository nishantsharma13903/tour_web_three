import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import "../../styles/sliderThree.css";

import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import hero_img_1 from "../../assets/media/world_dest_1.jpg";
import hero_img_2 from "../../assets/media/world_dest_2.jpg";
import hero_img_3 from "../../assets/media/world_dest_3.jpg";
import hero_img_4 from "../../assets/media/world_dest_4.jpg";
import hero_img_5 from "../../assets/media/world_dest_5.jpg";
import TourCardTwo from "../cards/TourCardTwo";

const SwiperSliderThree = ({ heading, images = [] }) => {
  const defaultImages = [
    hero_img_1,
    hero_img_2,
    hero_img_3,
    hero_img_4,
    hero_img_5,
    hero_img_3,
    hero_img_4,
    hero_img_2,
    hero_img_3,
    hero_img_4,
  ];

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
        // slidesPerView={6}
        // spaceBetween={20}
        breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 4 }, // Mobile screens
            640: { slidesPerView: 3, spaceBetween: 8 }, // Small tablets
            1024: { slidesPerView: 4, spaceBetween: 20 }, // Laptops
            1280: { slidesPerView: 6, spaceBetween: 25 }, // Desktops
          }}
        pagination={{ clickable: true }}
        navigation={true} // Initially enable navigation
        onSwiper={setSwiperInstance} // Store Swiper instance
        modules={[Navigation, Pagination]}
      >
        {(images.length > 0 ? images : defaultImages).map((src, index) => (
          <SwiperSlide key={index}>
            <TourCardTwo image={src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSliderThree;
