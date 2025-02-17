// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import '../../styles/sliderTwo.css'

// import hero_img_1 from "../../assets/media/cruises_img_1.jpg";
// import hero_img_2 from "../../assets/media/cruises_img_2.jpg";
// import hero_img_3 from "../../assets/media/cruises_img_3.jpg";
// import hero_img_4 from "../../assets/media/cruises_img_6.jpg";
// import hero_img_5 from "../../assets/media/cruises_img_5.jpg";

// const SwiperSliderOne = ({images= [hero_img_1, hero_img_2, hero_img_3, hero_img_4, hero_img_5]}) => {

//   return (
//     <Swiper
//       modules={[Navigation, Pagination]}
//       spaceBetween={30}
//       slidesPerView={1}
//       navigation
//       allowTouchMove={false}
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 3000, disableOnInteraction: false }}
//       className="w-full h-48 your-carousel-container"
//     >
//       {images.map((src, index) => (
//         <SwiperSlide key={index}>
//           <img
//             src={src}
//             alt={`Slide ${index + 1}`}
//             className="w-full h-auto rounded-lg"
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default SwiperSliderOne;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import '../../styles/sliderTwo.css';

import hero_img_1 from "../../assets/media/cruises_img_1.jpg";
import hero_img_2 from "../../assets/media/cruises_img_2.jpg";
import hero_img_3 from "../../assets/media/cruises_img_3.jpg";
import hero_img_4 from "../../assets/media/cruises_img_6.jpg";
import hero_img_5 from "../../assets/media/cruises_img_5.jpg";

const shuffleArray = (array) => {
  return array
    .map((item) => ({ item, sort: Math.random() })) // Assign random sort value
    .sort((a, b) => a.sort - b.sort) // Sort randomly
    .map(({ item }) => item); // Extract shuffled items
};

const SwiperSliderOne = ({
  images = [hero_img_1, hero_img_2, hero_img_3, hero_img_4, hero_img_5],
}) => {
  const randomizedImages = shuffleArray(images); // Shuffle images before rendering

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      allowTouchMove={false}
      pagination={{ clickable: true }}
      className="w-full h-48 your-carousel-container"
    >
      {randomizedImages.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSliderOne;
