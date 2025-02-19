import { useState } from "react";
import {
  FaTicketAlt,
  FaBus,
  FaShip,
  FaUtensils,
  FaConciergeBell,
  FaLandmark,
  FaCamera,
  FaTree,
  FaSwimmingPool,
  FaArchway,
} from "react-icons/fa";
import { MdTour, MdTheme, MdOutlineMuseum } from "react-icons/md";
import {
  GiAquarium,
  Gi3dGlasses,
  GiJourney,
  GiAerialSignal,
} from "react-icons/gi";
import { IoIosAirplane } from "react-icons/io";

const categories = [
  {
    name: "Tickets",
    icon: <FaTicketAlt />,
    subcategories: [
      { name: "Museums", icon: <Gi3dGlasses /> },
      { name: "Water Parks", icon: <FaSwimmingPool /> },
      { name: "Observation Decks", icon: <FaCamera /> },
      { name: "Theme Parks", icon: <GiAquarium /> },
      { name: "City Cards", icon: <GiJourney /> },
      { name: "Aquariums", icon: <GiAquarium /> },
      { name: "Zoos", icon: <FaTree /> },
      { name: "Religious Sites", icon: <Gi3dGlasses /> },
      { name: "Immersive Experiences", icon: <FaLandmark /> },
      { name: "Parks", icon: <FaTree /> },
      { name: "Landmarks", icon: <FaArchway /> },
    ],
  },
  {
    name: "Tours",
    icon: <GiAquarium />,
    subcategories: [
      { name: "Museums", icon: <Gi3dGlasses /> },
      { name: "Water Parks", icon: <FaSwimmingPool /> },
      { name: "Observation Decks", icon: <FaCamera /> },
      { name: "Theme Parks", icon: <GiAquarium /> },
      { name: "City Cards", icon: <GiJourney /> },
      { name: "Aquariums", icon: <GiAquarium /> },
      { name: "Zoos", icon: <FaTree /> },
      { name: "Religious Sites", icon: <Gi3dGlasses /> },
      { name: "Immersive Experiences", icon: <FaLandmark /> },
      { name: "Parks", icon: <FaTree /> },
      { name: "Landmarks", icon: <FaArchway /> },
    ],
  },
  {
    name: "Transportation",
    icon: <FaBus />,
    subcategories: [
      { name: "Museums", icon: <Gi3dGlasses /> },
      { name: "Water Parks", icon: <FaSwimmingPool /> },
      { name: "Observation Decks", icon: <FaCamera /> },
      { name: "Theme Parks", icon: <GiAquarium /> },
      { name: "City Cards", icon: <GiJourney /> },
      { name: "Aquariums", icon: <GiAquarium /> },
      { name: "Zoos", icon: <FaTree /> },
      { name: "Religious Sites", icon: <Gi3dGlasses /> },
      { name: "Immersive Experiences", icon: <FaLandmark /> },
      { name: "Parks", icon: <FaTree /> },
      { name: "Landmarks", icon: <FaArchway /> },
    ],
  },
  {
    name: "Travel Services",
    icon: <FaConciergeBell />,
    subcategories: [
      { name: "Museums", icon: <Gi3dGlasses /> },
      { name: "Water Parks", icon: <FaSwimmingPool /> },
      { name: "Observation Decks", icon: <FaCamera /> },
      { name: "Theme Parks", icon: <GiAquarium /> },
      { name: "City Cards", icon: <GiJourney /> },
      { name: "Aquariums", icon: <GiAquarium /> },
      { name: "Zoos", icon: <FaTree /> },
      { name: "Religious Sites", icon: <Gi3dGlasses /> },
      { name: "Immersive Experiences", icon: <FaLandmark /> },
      { name: "Parks", icon: <FaTree /> },
      { name: "Landmarks", icon: <FaArchway /> },
    ],
  },
  {
    name: "Cruises",
    icon: <FaShip />,
    subcategories: [
      { name: "Museums", icon: <Gi3dGlasses /> },
      { name: "Water Parks", icon: <FaSwimmingPool /> },
      { name: "Observation Decks", icon: <FaCamera /> },
      { name: "Theme Parks", icon: <GiAquarium /> },
      { name: "City Cards", icon: <GiJourney /> },
      { name: "Aquariums", icon: <GiAquarium /> },
      { name: "Zoos", icon: <FaTree /> },
      { name: "Religious Sites", icon: <Gi3dGlasses /> },
      { name: "Immersive Experiences", icon: <FaLandmark /> },
      { name: "Parks", icon: <FaTree /> },
      { name: "Landmarks", icon: <FaArchway /> },
    ],
  },
  {
    name: "Food & Drink",
    icon: <FaUtensils />,
    subcategories: [
      { name: "Museums", icon: <Gi3dGlasses /> },
      { name: "Water Parks", icon: <FaSwimmingPool /> },
      { name: "Observation Decks", icon: <FaCamera /> },
      { name: "Theme Parks", icon: <GiAquarium /> },
      { name: "City Cards", icon: <GiJourney /> },
      { name: "Aquariums", icon: <GiAquarium /> },
      { name: "Zoos", icon: <FaTree /> },
      { name: "Religious Sites", icon: <Gi3dGlasses /> },
      { name: "Immersive Experiences", icon: <FaLandmark /> },
      { name: "Parks", icon: <FaTree /> },
      { name: "Landmarks", icon: <FaArchway /> },
    ],
  },
  {
    name: "Entertainment",
    icon: <GiAerialSignal />,
    subcategories: [
      { name: "Museums", icon: <Gi3dGlasses /> },
      { name: "Water Parks", icon: <FaSwimmingPool /> },
      { name: "Observation Decks", icon: <FaCamera /> },
      { name: "Theme Parks", icon: <GiAquarium /> },
      { name: "City Cards", icon: <GiJourney /> },
      { name: "Aquariums", icon: <GiAquarium /> },
      { name: "Zoos", icon: <FaTree /> },
      { name: "Religious Sites", icon: <Gi3dGlasses /> },
      { name: "Immersive Experiences", icon: <FaLandmark /> },
      { name: "Parks", icon: <FaTree /> },
      { name: "Landmarks", icon: <FaArchway /> },
    ],
  },
  {
    name: "Adventure",
    icon: <GiJourney />,
    subcategories: [
      { name: "Museums", icon: <Gi3dGlasses /> },
      { name: "Water Parks", icon: <FaSwimmingPool /> },
      { name: "Observation Decks", icon: <FaCamera /> },
      { name: "Theme Parks", icon: <GiAquarium /> },
      { name: "City Cards", icon: <GiJourney /> },
      { name: "Aquariums", icon: <GiAquarium /> },
      { name: "Zoos", icon: <FaTree /> },
      { name: "Religious Sites", icon: <Gi3dGlasses /> },
      { name: "Immersive Experiences", icon: <FaLandmark /> },
      { name: "Parks", icon: <FaTree /> },
      { name: "Landmarks", icon: <FaArchway /> },
    ],
  },
  {
    name: "Aerial Sightseeing",
    icon: <IoIosAirplane />,
    subcategories: [
      { name: "Museums", icon: <Gi3dGlasses /> },
      { name: "Water Parks", icon: <FaSwimmingPool /> },
      { name: "Observation Decks", icon: <FaCamera /> },
      { name: "Theme Parks", icon: <GiAquarium /> },
      { name: "City Cards", icon: <GiJourney /> },
      { name: "Aquariums", icon: <GiAquarium /> },
      { name: "Zoos", icon: <FaTree /> },
      { name: "Religious Sites", icon: <Gi3dGlasses /> },
      { name: "Immersive Experiences", icon: <FaLandmark /> },
      { name: "Parks", icon: <FaTree /> },
      { name: "Landmarks", icon: <FaArchway /> },
    ],
  },
];

const BrowseByThemes = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tickets");

  return (
    <div className="container mx-auto px-4 mt-20">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Browse by themes
      </h2>

      {/* CATEGORY NAVIGATION */}
      <div className="flex space-x-6 border-b pb-2 overflow-x-auto scrollbar-hide mt-8">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`flex items-center space-x-2 px-2 py-1 border-b-2 
              ${
                selectedCategory === category.name
                  ? "border-purple-500 text-purple-500 font-semibold"
                  : "border-transparent text-gray-600"
              } 
              transition-all duration-300 hover:text-purple-500`}
          >
            <span className="text-sm">{category.icon}</span>
            <span className="text-xs">{category.name}</span>
          </button>
        ))}
      </div>

      {/* SUBCATEGORIES */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {categories
          .find((cat) => cat.name === selectedCategory)
          ?.subcategories.map((sub, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-500 transition"
            >
              <span className="text-sm">{sub.icon}</span>
              <span className="underline cursor-pointer text-sm">
                {sub.name}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BrowseByThemes;
