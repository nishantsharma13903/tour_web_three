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

import "../../styles/scrollbar.css";

import gif_one from "../../assets/gif/gif_one.gif";
import gif_two from "../../assets/gif/gif_two.gif";
import gif_three from "../../assets/gif/gif_three.gif";
import gif_four from "../../assets/gif/gif_four.gif";

const topDestinations = {
  title: "Explore world's top destinations",
  places: [
    {
      place: "New York",
      country: "United States",
      image:
        "http://cdn-imgix.headout.com/media/images/ee075882083344be170ed38c8c76b4a1-new-york-city-01.jpeg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min",
    },
    {
      place: "London",
      country: "United Kingdom",
      image:
        "http://cdn-imgix.headout.com/media/images/216f669b473d05d53f723407d894d886-london-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min",
    },
    {
      place: "Dubai",
      country: "United Arab Emirates",
      image:
        "http://cdn-imgix.headout.com/media/images/7ceacca12e93245d25c59e5743b6c5d9-dubai-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min",
    },
    {
      place: "Rome",
      country: "Italy",
      image:
        "http://cdn-imgix.headout.com/media/images/ab5da216cafc19ededc74c982286819d-rome-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min",
    },
    {
      place: "Paris",
      country: "France",
      image:
        "http://cdn-imgix.headout.com/media/images/f7b072bc94b9463b8569722257845789-Paris-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min",
    },
    {
      place: "Singapore",
      country: "Singapore",
      image:
        "http://cdn-imgix.headout.com/media/images/4e36c59eb78d7e6a11486bc94c5fea17-singapore-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min",
    },
    {
      place: "Barcelona",
      country: "Spain",
      image:
        "http://cdn-imgix.headout.com/media/images/db554dd0adf4544af1d08e5577142e14-barcelona-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min",
    },
    {
      place: "Orlando",
      country: "United States",
      image:
        "http://cdn-imgix.headout.com/media/images/5bbc5245324d4160d7ab5b05888224ef-orlando.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min",
    },
    {
      place: "Amsterdam",
      country: "Netherlands",
      image:
        "http://cdn-imgix.headout.com/media/images/1076a4b0895cbc04f6a6821fe868f732-amsterdam-city-01.jpeg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min",
    },
    {
      place: "Florence",
      country: "Italy",
      image:
        "http://cdn-imgix.headout.com/media/images/92205407fb893517d219364d7886c196-florence-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min",
    },
    {
      place: "Lisbon",
      country: "Portugal",
      image:
        "http://cdn-imgix.headout.com/media/images/f359eff1cb4d49d718f930f2e11d39cf-lisbon-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min",
    },
    {
      place: "Bangkok",
      country: "Thailand",
      image:
        "http://cdn-imgix.headout.com/media/images/b30b2af9a9788892a6b20b570464dbec-bangkok-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min",
    },
    {
      place: "Madrid",
      country: "Spain",
      image:
        "http://cdn-imgix.headout.com/media/images/b30b2af9a9788892a6b20b570464dbec-bangkok-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min",
    },
    {
      place: "Sydney",
      country: "Australia",
      image:
        "http://cdn-imgix.headout.com/media/images/a272e92827234e4e656764fce70c9b3b-sydney-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min",
    },
    {
      place: "Valencia",
      country: "Spain",
      image:
        "http://cdn-imgix.headout.com/media/images/eebd20c46e566331ed05ddaa59639900-osaka-city-01.jpg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min",
    },
    {
      place: "Naples",
      country: "Italy",
      image:
        "http://cdn-imgix.headout.com/media/images/20c6dd8310a72db0b0db098cd4d7f9f3-istanbul-city-01.jpeg?w=270&h=270&crop=faces&auto=compress%2Cformat&fit=min",
    },
  ],
};

const cruisesPlaces = {
  title: "Headout’s top recommendations",
  places: [
    {
      city: "Madrid",
      title: "Royal Palace of Madrid Skip-the-Line Tickets",
      rating: 4.4,
      reviews: 8380,
      price: "₹1,712",
      images: [
        "https://cdn-imgix.headout.com/media/images/65a28b0ae738eb6c75dac44c508e83c8-23089-madrid-combo--save-2----royal-palace-of-madrid---liria-palace-skip-the-line-tickets-04.jpg",
        "https://cdn-imgix.headout.com/media/images/a964c0aeb7ac959d7415c13dc02c54a5-royalpalacemadrid-14.jpg",
        "https://cdn-imgix.headout.com/media/images/2e53e73de7c17f320f11139f9bb8f484-royalpalacemadrid-04.jpg",
        "https://cdn-imgix.headout.com/media/images/2e53e73de7c17f320f11139f9bb8f484-royalpalacemadrid-04.jpg",
      ],
    },
    {
      city: "Athens",
      title: "Acropolis & Parthenon Tickets with Audio Guide",
      rating: 4.3,
      reviews: 36130,
      price: "₹1,168",
      images: [
        "https://cdn-imgix.headout.com/blog-content/image/d2cfb372cf3a129c5ee7d6d3945d0580-AdobeStock_129050920%20copy.jpg",
        "https://cdn-imgix.headout.com/media/images/9618d150e3a1207d2295b51446904d6a-12045-athens-acropolis---parthenon-tickets-with-optional-audio-guide-02.jpg",
        "https://cdn-imgix.headout.com/blog-content/image/78230e41fed4321c855cb6fb259c5fa1-AdobeStock_301097919.jpeg",
        "https://cdn-imgix.headout.com/media/images/7fbeb29b92c6d3b1d6eeceb675958468-12045-athens-acropolis---parthenon-tickets-with-optional-audio-guide-01.jpg",
      ],
    },
    {
      title:
        "From Interlaken: Jungfraujoch Top of Europe Round-Trip Train Tickets",
      location: "Interlaken",
      rating: 4.5,
      reviews: 3014,
      price: "₹22,477",
      images: [
        "https://cdn-imgix.headout.com/media/images/fe75db7953e6637bc0db1d1b57e728fa-14852---Interlaken---From-Interlaken--Round-Trip-Train-Tickets-to-Jungfraujoch-Top-of-Europe--21.jpg",
        "https://cdn-imgix.headout.com/media/images/23e9ba69fc8f68e7d7819610ce6f56df-14852---Interlaken---From-Interlaken--Round-Trip-Train-Tickets-to-Jungfraujoch-Top-of-Europe--20.jpg",
        "https://cdn-imgix.headout.com/media/images/ad29cd8ee805195de8fa8282ac45e324-FromInterlaken.png",
        "https://cdn-imgix.headout.com/media/images/557f0c3ca30a3f2c988b81271d2e262f-14073-FromZu-rich-DayTriptoJungfraujochTopofEurope--004.jpg",
      ],
    },
    {
      title: "Park Güell Tickets",
      location: "Barcelona",
      rating: 4.4,
      reviews: 19756,
      price: "from ₹2,083",
      images: [
        "https://cdn-imgix.headout.com/media/images/e2f3d87cba77cc7e449b6de81032ed15-75632.jpg",
        "https://cdn-imgix.headout.com/media/images/dd7cf3aa9088273ca8753af442de0163-Parc%20Guell%20-%20Hypostyle%20Hall.jpg",
        "https://cdn-imgix.headout.com/media/images/dd7cf3aa9088273ca8753af442de0163-Parc%20Guell%20-%20Hypostyle%20Hall.jpg",
        "https://cdn-imgix.headout.com/media/images/18ca1906d63c4c98f1065a03d51b7516-audio%20guide%20at%20Park%20guell.jpg",
      ],
    },
    {
      title:
        "Limited Time Buy 1 Get 1 Free Deal: Premium Arabian Dunes Desert Safari with Bedouin Camp Experience",
      location: "Dubai",
      rating: 4.3,
      reviews: 130,
      price: "from ₹13,720 ₹6,860",
      images: [
        "https://cdn-imgix.headout.com/media/images/ac55a357120313aa2cb3800896a02da4-20722-dubai-arabian-dunes-safari-with-bedouin-camp-experience-01.jpg",
        "https://cdn-imgix.headout.com/media/images/fd0bc0839426b8330a093e3fdc187894-20722-dubai-arabian-dunes-safari-with-bedouin-camp-experience-03.jpg",
        "https://cdn-imgix.headout.com/media/images/d5bef3052d1785d5cc7637d168406e84-20722-dubai-arabian-dunes-safari-with-bedouin-camp-experience-04.jpg",
        "https://cdn-imgix.headout.com/media/images/c9963235b05ec65f882954418296e8e5-20722-dubai-arabian-dunes-safari-with-bedouin-camp-experience-15.jpg",
      ],
    },
  ],
};

const topThingsToDo = {
  title: "Top things to do worldwide",
  places: [
    {
      place: "London Theatre Tickets",
      country: "London",
      image: "https://cdn-imgix.headout.com/media/images/a525b125dc142a7610cb19978606c446-167-london-london-theatre-tickets-01.jpg?w=270&h=360&crop=faces&auto=compress%2Cformat&fit=min"
    },
    {
      place: "Dubai Desert Safari Tours",
      country: "Dubai",
      image: "https://cdn-imgix.headout.com/media/images/172edb62da5a1c64649787dd47cb0f7a-Dubai-Desert-Safari-card.jpg?w=270&h=360&crop=faces&auto=compress%2Cformat&fit=min"
    },
    {
      place: "Vatican Museums",
      country: "Rome",
      image: "https://cdn-imgix.headout.com/media/images/17dd253f930f2829c696d6a215123158-Vatican-Museums-card.jpg?w=270&h=360&crop=faces&auto=compress%2Cformat&fit=min"
    },
    {
      place: "Disneyland® Paris Tickets",
      country: "Paris",
      image: "https://cdn-imgix.headout.com/media/images/7bfaf86c4653c1ad58e0f494720e84ef-disneyland%20paris%20card.png?w=270&h=360&crop=faces&auto=compress%2Cformat&fit=min"
    },
    {
      place: "Sydney Opera House Tours",
      country: "Sydney",
      image: "https://cdn-imgix.headout.com/media/images/19eaf0171b10d3d3047c5caa84a518bb-sydney%20CI.jpg?w=270&h=360&crop=faces&auto=compress%2Cformat&fit=min"
    },
    {
      place: "Eiffel Tower Tickets",
      country: "Paris",
      image: "https://cdn-imgix.headout.com/media/images/c0f46d3425e3d434cdcce9c2291b47a1-243-paris-%23004-003-paris-%7C-eiffel-tower-02.jpg?w=270&h=360&crop=faces&auto=compress%2Cformat&fit=min"
    },
    {
      place: "Prado Museum Tickets",
      country: "Madrid",
      image: "https://cdn-imgix.headout.com/media/images/e19478a82f5e7feef1af66f77d336508-Prado-Museum-card.jpg?w=270&h=360&crop=faces&auto=compress%2Cformat&fit=min"
    },
    {
      place: "Burj Khalifa Tickets",
      country: "Dubai",
      image: "https://cdn-imgix.headout.com/media/images/83b0cd72896bb0299f46488c0423c701-158-dubai-burj-khalifa-02.jpg?w=270&h=360&crop=faces&auto=compress%2Cformat&fit=min"
    },
    {
      place: "Kennedy Space Center",
      country: "Orlando",
      image: "https://cdn-imgix.headout.com/media/images/548291c392880db6b652216b6574e067-3111-orlando-kennedy-space-center-tickets-%26-tours-02.jpg?w=270&h=360&crop=faces&auto=compress%2Cformat&fit=min"
    },
    {
      place: "Versailles Tickets",
      country: "Paris",
      image: "https://cdn-imgix.headout.com/media/images/3d4e27c169e97deb1a390bba6024473f-Versailles-card.jpg?w=270&h=360&crop=faces&auto=compress%2Cformat&fit=min"
    },
    {
      place: "Park Güell",
      country: "Barcelona",
      image: "https://cdn-imgix.headout.com/media/images/3f3c2719fadc20f2131706249506cdf2-parkguell-card.jpg?w=270&h=360&crop=faces&auto=compress%2Cformat&fit=min"
    },
    {
      place: "Alhambra Tickets",
      country: "Granada",
      image: "https://cdn-imgix.headout.com/media/images/7fe7acb4aa82f4bada97fd523b634660-alhambra-37.jpg?w=270&h=360&crop=faces&auto=compress%2Cformat&fit=min"
    },
    {
      place: "Louvre Museum Tickets",
      country: "Paris",
      image: "https://cdn-imgix.headout.com/media/images/3a62fd28834ad3f142eef38e30a41e40-Louvre%20Pyramid%20card.png?w=270&h=360&crop=faces&auto=compress%2Cformat&fit=min"
    },
    {
      place: "Harry Potter London Tours",
      country: "London",
      image: "https://cdn-imgix.headout.com/media/images/f3bb395ca07dcf38fb78900856399c4b-229-london-harry-potter-london-tours-04.jpg?w=270&h=360&crop=faces&auto=compress%2Cformat&fit=min"
    },
    {
      place: "Colosseum",
      country: "Rome",
      image: "https://cdn-imgix.headout.com/media/images/f3bb395ca07dcf38fb78900856399c4b-229-london-harry-potter-london-tours-04.jpg?w=270&h=360&crop=faces&auto=compress%2Cformat&fit=min"
    },
    {
      place: "Wieliczka Salt Mine",
      country: "Krakow",
      image: "https://cdn-imgix.headout.com/media/images/bd35a457fc1451caa23636eb1510d192-Wieliczka-Salt-Mine-card.jpg?w=270&h=360&crop=faces&auto=compress%2Cformat&fit=min"
    }
  ]
};


export default function HomePage() {
  const features = [
    {
      icon: gif_three,
      color: "#3ed5ff",
      title: "World-Class Adventures",
      description:
        "With Fly in Minute, every tour is handpicked for quality. Sit back, relax, and let us handle the details.",
    },
    {
      icon: gif_four,
      color: "#74ed7c",
      title: "Value Meets Experience",
      description:
        "Affordable, last-minute bookings, 24/7 support—because your dream vacation shouldn’t break the bank.",
    },
    {
      icon: gif_one,
      color: "#fa7570",
      title: "Discover Every Corner",
      description:
        "From hidden gems to iconic landmarks, adventure awaits for every kind of traveler. We've got it all.",
    },
    {
      icon: gif_two,
      color: "#f7e1a0",
      title: "Satisfaction Guaranteed",
      description:
        "Not impressed? We’ll make it right. Refunds, smiles, and peace of mind—because you're worth it.",
    },
  ];

  console.log("Data in home", topDestinations);

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
          <div className="flex-grow max-w-md flex mt-4">
            <input
              type="text"
              placeholder="Search for experiences and cities"
              className="w-full px-4 py-1 rounded-l-lg focus:outline-none focus:ring focus:border-blue-400 placeholder:text-sm"
            />
            <button className="px-4 py-1 bg-white text-gray-600 rounded-r-lg">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="w-11/12 md:w-9/12 mx-auto py-10">
        {/* Features Section */}
        <div className="flex md:justify-center justify-start md:gap-6 gap-10 py-10 scrollbar-hidden overflow-x-auto">
          {features.map((feature, index) => (
            <div key={index} className="min-w-[240px] text-start relative">
              {/* Gradient Background */}
              <div
                className={`absolute top-0 left-2 w-20 h-16 bg-[${feature.color}] rounded-full blur-xl opacity-50`}
              ></div>
              {/* <div className="text-4xl mb-2">{feature.icon}</div> */}
              <div className="text-4xl mb-2">
                <img
                  src={feature.icon}
                  className="h-[50px] w-[50px]"
                  alt="Feature Icon"
                />
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
          <SwiperSliderThree
            heading="Explore world's top destinations"
            data={topDestinations}
          />
        </section>

        <section className="mb-16">
          <SwiperSliderTwo heading="Cruises top recommendations" data={cruisesPlaces} />
        </section>
      </div>

      <section className=" bg-[#f8f8f8] h-[420px] w-full flex justify-center items-center px-6">
        <SwiperSliderThree heading="Top things to do worldwide" data={topThingsToDo} />
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
