import React from "react";
import apple from "../../assets/media/en.png";
import google from "../../assets/media/en-342.png";
import english from "../../assets/media/English.png";

import img1 from '../../assets/media/feature_1.png'
import img2 from '../../assets/media/feature_2.png'
import img3 from '../../assets/media/feature_3.png'
import img4 from '../../assets/media/feature_4.png'

export default function Footer() {
  const features = [
    {
      icon: img1,
      title: " Trusted by Travelers",
      description:
        "Rated 4.9 on TripAdvisor| 10,000+ happy adventurers sharing their stories.",
    },
    {
      icon: img2,
      title: "50,000+ Journeys Completed",
      description:
        "From desert safaris to luxury cruises, weâve made dream vacations a reality.",
    },
    {
      icon: img3,
      title: "Featured Worldwide",
      description:
        "Recognized by top travel blogs and media as a go-to agency for unforgettable trips.",
    },
    {
      icon: img4,
      title: "24/7 Travel Support",
      description:
        "Questions? Need help? Our experts are just a call or message away, any time.",
    },
  ];
  return (
    <div>
      <div className="flex justify-center w-9/12 md:w-10/12 mx-auto py-10 ">
        <section className="my-8 rounded-lg p-6 flex md:flex-row flex-col-reverse gap-10 justify-between w-11/12 bg-purple-50">
          <div className="flex flex-col justify-center md:w-1/2 w-full md:px-6 px-0">
            <h2 className="text-2xl font-semibold">World at your tap.</h2>
            <p className="text-base text-gray-700 mt-2">
              Get the Headout app to get tickets on your phone and access
              app-only deals. Talk about win-win.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-end justify-end mt-4 gap-4 md:w-1/2 w-full">
            <img
              src={english}
              alt="App preview"
              className="w-full md:w-[450px] rounded-lg"
            />
          </div>
        </section>
      </div>
      <div className="w-9/12 md:w-10/12 mx-auto py-10">
        <h3 className="text-2xl font-semibold text-gray-700 my-8 ">
        We’ve helped thousands of travelers explore the world, and we’re always here for you.
        </h3>
        <div className="flex flex-wrap justify-between gap-8 py-10">
          {features.map((feature, index) => (
            <div key={index} className="w-11/12 sm:w-[250px]">
              {/* <div className="text-4xl mb-2">{feature.icon}</div> */}
              <div className="text-4xl mb-2">
                <img src={feature.icon} className={`h-[50px] ${index===0 ? "w-[140px] h-[70px]" : "w-[80px]"} `} alt="Feature Icon" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-600 text-sm mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:text-start text-center">
          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold">Get Help 24/7</h3>
            <ul className="mt-4 space-y-3">
              <li>🤙 Help center</li>
              <li>🗨️ Chat with us</li>
              <li>📞 Call +13478970100</li>
              <li>📧 support@headout.com</li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-lg font-semibold">Cities</h3>
            <ul className="mt-4 space-y-2">
              <li>New York</li>
              <li>Rome</li>
              <li>Paris</li>
              <li>London</li>
              <li>Dubai</li>
              <li>Las Vegas</li>
              <li>+155 more</li>
            </ul>
          </div>

          {/* Headout */}
          <div>
            <h3 className="text-lg font-semibold">Headout</h3>
            <ul className="mt-4 space-y-2">
              <li>Our story</li>
              <li>Careers</li>
              <li>Newsroom</li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold md:text-start text-center">
              We Accept
            </h3>
            <ul className="  space-y-3 mt-4 ">
              <li>Visa</li>
              <li>PayPal</li>
            </ul>
            <div className="mt-4 bg-white rounded-lg shadow p-4 flex gap-4 justify-center md:justify-between">
              <img
                src={apple}
                alt="Apple QR Code"
                className="w-20 md:w-24 h-auto"
              />
              <img
                src={google}
                alt="Google QR Code"
                className="w-20 md:w-24 h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-300 w-full mt-6 sm:mt-8 pt-4 text-sm">
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs">
          <p className="text-center sm:text-left">
            &copy; FlyFim 2025. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-gray-500">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-500">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-500">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
