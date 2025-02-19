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

const SwiperSliderThree = ({ heading,data }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  let count = 0;

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  // useEffect(() => {
  //   count = count + 1;
  //   console.log("Received Data:", count, data);
  // }, [data]);

  // const data = {
  //   title: "Explore world's top destinations",
  //   places: [
  //     {
  //       place: "New York",
  //       country: "United States",
  //       image: "http://cdn-imgix.headout.com/media/images/ee075882083344be170ed38c8c76b4a1-new-york-city-01.jpeg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min"
  //     },
  //     {
  //       place: "London",
  //       country: "United Kingdom",
  //       image: "http://cdn-imgix.headout.com/media/images/216f669b473d05d53f723407d894d886-london-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min"
  //     },
  //     {
  //       place: "Dubai",
  //       country: "United Arab Emirates",
  //       image: "http://cdn-imgix.headout.com/media/images/7ceacca12e93245d25c59e5743b6c5d9-dubai-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min"
  //     },
  //     {
  //       place: "Rome",
  //       country: "Italy",
  //       image: "http://cdn-imgix.headout.com/media/images/ab5da216cafc19ededc74c982286819d-rome-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min"
  //     },
  //     {
  //       place: "Paris",
  //       country: "France",
  //       image: "http://cdn-imgix.headout.com/media/images/f7b072bc94b9463b8569722257845789-Paris-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min"
  //     },
  //     {
  //       place: "Singapore",
  //       country: "Singapore",
  //       image: "http://cdn-imgix.headout.com/media/images/4e36c59eb78d7e6a11486bc94c5fea17-singapore-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min"
  //     },
  //     {
  //       place: "Barcelona",
  //       country: "Spain",
  //       image: "http://cdn-imgix.headout.com/media/images/db554dd0adf4544af1d08e5577142e14-barcelona-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min"
  //     },
  //     {
  //       place: "Orlando",
  //       country: "United States",
  //       image: "http://cdn-imgix.headout.com/media/images/5bbc5245324d4160d7ab5b05888224ef-orlando.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min"
  //     },
  //     {
  //       place: "Amsterdam",
  //       country: "Netherlands",
  //       image: "http://cdn-imgix.headout.com/media/images/1076a4b0895cbc04f6a6821fe868f732-amsterdam-city-01.jpeg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min"
  //     },
  //     {
  //       place: "Florence",
  //       country: "Italy",
  //       image: "http://cdn-imgix.headout.com/media/images/92205407fb893517d219364d7886c196-florence-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min"
  //     },
  //     {
  //       place: "Lisbon",
  //       country: "Portugal",
  //       image: "http://cdn-imgix.headout.com/media/images/f359eff1cb4d49d718f930f2e11d39cf-lisbon-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min"
  //     },
  //     {
  //       place: "Bangkok",
  //       country: "Thailand",
  //       image: "http://cdn-imgix.headout.com/media/images/b30b2af9a9788892a6b20b570464dbec-bangkok-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min"
  //     },
  //     {
  //       place: "Madrid",
  //       country: "Spain",
  //       image: "http://cdn-imgix.headout.com/media/images/b30b2af9a9788892a6b20b570464dbec-bangkok-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min"
  //     },
  //     {
  //       place: "Sydney",
  //       country: "Australia",
  //       image: "http://cdn-imgix.headout.com/media/images/a272e92827234e4e656764fce70c9b3b-sydney-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min"
  //     },
  //     {
  //       place: "Valencia",
  //       country: "Spain",
  //       image: "http://cdn-imgix.headout.com/media/images/eebd20c46e566331ed05ddaa59639900-osaka-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min"
  //     },
  //     {
  //       place: "Naples",
  //       country: "Italy",
  //       image: "http://cdn-imgix.headout.com/media/images/20c6dd8310a72db0b0db098cd4d7f9f3-istanbul-city-01.jpeg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min"
  //     }
  //   ]
  // }

  // console.log("Data", data)

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
        {/* {data && data.places.map((innerData, index) => (
          <SwiperSlide key={index}>
            <TourCardTwo data={innerData} />
          </SwiperSlide>
        ))} */}
        {data?.places?.length > 0 ? (
          data.places.map((innerData, index) => (
            <SwiperSlide key={index}>
              <TourCardTwo data={innerData} />
            </SwiperSlide>
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </Swiper>
    </div>
  );
};

export default SwiperSliderThree;
