import React from "react";
import image_1 from "../../assets/media/image_17.jpg";
import image_2 from "../../assets/media/image_18.jpg";
import image_3 from "../../assets/media/image_19.jpg";
import image_4 from "../../assets/media/image_20.jpg";
import image_5 from "../../assets/media/image_21.jpg";
import image_6 from "../../assets/media/image_22.jpg";
import image_7 from "../../assets/media/image_23.jpg";
import image_8 from "../../assets/media/image_24.jpg";
import english from "../../assets/media/English.png";

import { MdDirectionsBike } from "react-icons/md";
import TourCardOne from "../cards/TourCardOne";
import TourCardTwo from "../cards/TourCardTwo";
import TourCardThree from "../cards/TourCardThree";

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

const SimilarExperiences = () => {
  return (
    <div className="px-4 md:px-16 lg:px-32">
      <section className="my-8">
        <h2 className="text-xl font-semibold text-gray-800">
          Similar experiences you'd love
        </h2>
        <div className="flex lg:flex-row flex-col items-center lg:justify-start justify-center gap-10 mt-6">
          {cruisesPlaces.places.slice(0,3).map((item, index) => (
            <TourCardOne data={item} key={index} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-xl text-gray-800 font-semibold">
          Top things to do in Cappadocia
        </h2>
        <div className="flex lg:flex-row flex-col items-center lg:justify-start justify-center gap-10 mt-6">
          {topThingsToDo.places.slice(0,5).map((item, index) => (
            <TourCardTwo data={item} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold">Browse by themes</h2>
        <div className="flex flex-wrap gap-10 mt-4">
          {[
            "Hot Air Balloon Rides",
            "Day Trips",
            "Guided Tours",
            "Quad Biking",
            "Tours",
            "City Tours",
          ].map((theme, index) => (
            <button
              key={index}
              className="text-sm text-gray-600 flex gap-2 items-center underline"
            >
              <MdDirectionsBike />{theme}
            </button>
          ))}
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Nearby cities to explore</h2>
        <div className="flex lg:flex-row flex-col items-center lg:justify-start justify-center gap-10 mt-6">
          {topThingsToDo.places.slice(3,8).map(
            (item, index) => (
             <TourCardThree data={item} />
            )
          )}
        </div>
      </section>

     
    </div>
  );
};

export default SimilarExperiences;
