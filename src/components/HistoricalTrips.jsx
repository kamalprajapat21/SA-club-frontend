import React, { useState } from "react";
import Navbar from "../components/Navbar";
import tripBg from "../assets/tripBg.png";
import udaipur from "../assets/udaipur.png";
import bundi from "../assets/bundi.png";
import Contact from "../components/Contact";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

import chittorgarh1 from "../assets/chittorgarh/chittorgarh1.jpg";
import chittorgarh2 from "../assets/chittorgarh/chittorgarh2.jpg";
import chittorgarh3 from "../assets/chittorgarh/chittorgarh3.jpg";
import chittorgarh4 from "../assets/chittorgarh/chittorgarh4.jpg";
import chittorgarh5 from "../assets/chittorgarh/chittorgarh5.jpg";
import chittorgarh6 from "../assets/chittorgarh/chittorgarh6.jpg";
import chittorgarh7 from "../assets/chittorgarh/chittorgarh7.jpg";

const trips = [
  {
    title: "Chittorgarh Fort",
    description:
      "Explore the heroic tales of Rani Padmini and the majestic Rajput architecture.",
    image: tripBg,
  },
  {
    title: "Udaipur",
    description:
      "Visit the City of Lakes and witness the grandeur of palaces and scenic beauty.",
    image: udaipur,
  },
  {
    title: "Bundi",
    description:
      "Discover the blue town and its beautiful stepwells and palaces rich in Rajasthani frescoes.",
    image: bundi,
  },
];

const chittorgarhDetails = [
  {
    image: chittorgarh1,
    description: "The majestic Chittorgarh Fort, symbol of Rajput valor.",
  },
  {
    image: chittorgarh2,
    description:
      "Vijay Stambh – the Tower of Victory, standing tall and proud.",
  },
  {
    image: chittorgarh3,
    description: "Padmini Palace – a tale of honor and courage.",
  },
  {
    image: chittorgarh4,
    description: "The majestic Chittorgarh Fort, symbol of Rajput valor.",
  },
  {
    image: chittorgarh4,
    description:
      "Vijay Stambh – the Tower of Victory, standing tall and proud.",
  },
  {
    image: chittorgarh5,
    description: "Padmini Palace – a tale of honor and courage.",
  },
  {
    image: chittorgarh6,
    description: "The majestic Chittorgarh Fort, symbol of Rajput valor.",
  },
  {
    image: chittorgarh7,
    description:
      "Vijay Stambh – the Tower of Victory, standing tall and proud.",
  },
  {
    image: chittorgarh1,
    description: "Padmini Palace – a tale of honor and courage.",
  },
  {
    image: chittorgarh1,
    description: "The majestic Chittorgarh Fort, symbol of Rajput valor.",
  },
  {
    image: chittorgarh1,
    description:
      "Vijay Stambh – the Tower of Victory, standing tall and proud.",
  },
  {
    image: chittorgarh1,
    description: "Padmini Palace – a tale of honor and courage.",
  },
];

const bundiDetails = [
  {
    image: bundi,
    description:
      "The Bundi Palace known for its unique Rajput architecture and murals.",
  },
  {
    image: bundi,
    description:
      "Stepwells – architectural marvels and water harvesting wonders.",
  },
  {
    image: bundi,
    description: "Taragarh Fort – one of the oldest hill forts in Rajasthan.",
  },
  {
    image: bundi,
    description:
      "The Bundi Palace known for its unique Rajput architecture and murals.",
  },
  {
    image: bundi,
    description:
      "Stepwells – architectural marvels and water harvesting wonders.",
  },
  {
    image: bundi,
    description: "Taragarh Fort – one of the oldest hill forts in Rajasthan.",
  },
  {
    image: bundi,
    description:
      "The Bundi Palace known for its unique Rajput architecture and murals.",
  },
  {
    image: bundi,
    description:
      "Stepwells – architectural marvels and water harvesting wonders.",
  },
  {
    image: bundi,
    description: "Taragarh Fort – one of the oldest hill forts in Rajasthan.",
  },
  {
    image: bundi,
    description:
      "The Bundi Palace known for its unique Rajput architecture and murals.",
  },
  {
    image: bundi,
    description:
      "Stepwells – architectural marvels and water harvesting wonders.",
  },
  {
    image: bundi,
    description: "Taragarh Fort – one of the oldest hill forts in Rajasthan.",
  },
];

const udaipurDetails = [
  {
    image: udaipur,
    description: "Lake Pichola – the heart of Udaipur, glowing at sunset.",
  },
  {
    image: udaipur,
    description: "The City Palace stands as a symbol of grandeur and legacy.",
  },
  {
    image: udaipur,
    description:
      "Saheliyon Ki Bari – a historic garden of maidens with fountains and flora.",
  },
  {
    image: udaipur,
    description: "Lake Pichola – the heart of Udaipur, glowing at sunset.",
  },
  {
    image: udaipur,
    description: "The City Palace stands as a symbol of grandeur and legacy.",
  },
  {
    image: udaipur,
    description:
      "Saheliyon Ki Bari – a historic garden of maidens with fountains and flora.",
  },
  {
    image: udaipur,
    description: "Lake Pichola – the heart of Udaipur, glowing at sunset.",
  },
  {
    image: udaipur,
    description: "The City Palace stands as a symbol of grandeur and legacy.",
  },
  {
    image: udaipur,
    description:
      "Saheliyon Ki Bari – a historic garden of maidens with fountains and flora.",
  },
  {
    image: udaipur,
    description: "Lake Pichola – the heart of Udaipur, glowing at sunset.",
  },
  {
    image: udaipur,
    description: "The City Palace stands as a symbol of grandeur and legacy.",
  },
  {
    image: udaipur,
    description:
      "Saheliyon Ki Bari – a historic garden of maidens with fountains and flora.",
  },
];

const HistoricalTrips = () => {
  const [openedImage, setOpenedImage] = useState(null);
  const closeModal = () => setOpenedImage(null);

  const [activeTrip, setActiveTrip] = useState(null);

  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === lightboxImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? lightboxImages.length - 1 : prevIndex - 1
    );
  };

  const handleCardClick = (title) => {
    setActiveTrip(activeTrip === title ? null : title);
  };
  const TripDetailCard = ({ title, details }) => (
    <div className="mt-12 animate-fade-in transition-all duration-700 ease-in-out">
      <div className="bg-yellow-100/80 border border-yellow-300 rounded-2xl p-6 shadow-2xl">
        <h3 className="text-3xl font-bold text-[#5c3721] mb-6 text-center">
          {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {details.map((spot, idx) => (
            <div
              key={idx}
              className="bg-white/70 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={spot.image}
                alt="Trip view"
                className="h-48 w-full object-cover cursor-pointer"
                onClick={() => openLightbox(details, idx)}
              />

              <p className="p-4 text-gray-800 text-sm">{spot.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat text-gray-900 p-6 font-serif relative"
        style={{
          backgroundImage: `url(${tripBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/30 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto mt-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold tracking-wide mb-4 text-[#6b3e26] drop-shadow">
              🏰 Historical Expeditions
            </h1>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto">
              Travel back in time through Rajasthan's iconic landmarks and
              experience stories carved in stone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trips.map((trip, index) => (
              <div
                key={index}
                className="bg-yellow-50/90 border border-yellow-200 p-4 rounded-2xl shadow-xl hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer"
                onClick={() => handleCardClick(trip.title)}
              >
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="rounded-xl h-48 w-full object-cover mb-4 border border-yellow-300"
                />
                <h2 className="text-2xl font-bold text-[#5c3721] mb-2">
                  {trip.title}
                </h2>
                <p className="text-gray-700">{trip.description}</p>
              </div>
            ))}
          </div>

          {/* Extra Card for Udaipur */}
          {activeTrip === "Udaipur" && (
            <TripDetailCard
              title="Discovering Udaipur in Detail"
              details={udaipurDetails}
            />
          )}

          {activeTrip === "Chittorgarh Fort" && (
            <TripDetailCard
              title="Inside the Glorious Chittorgarh Fort"
              details={chittorgarhDetails}
            />
          )}

          {activeTrip === "Bundi" && (
            <TripDetailCard
              title="Beauty of Bundi Unfolded"
              details={bundiDetails}
            />
          )}
        </div>
      </div>

      {openedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={openedImage}
            alt="Fullscreen View"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()} // prevent click from bubbling to closeModal
          />
        </div>
      )}

      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImages[currentImageIndex].image}
              alt="Zoomed"
              className="w-full max-h-[80vh] object-contain mx-auto rounded-xl"
            />
            <p className="text-white text-center mt-4">
              {lightboxImages[currentImageIndex].description}
            </p>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50"
              onClick={goToPrev}
            >
              <IoIosArrowBack size={30} />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50"
              onClick={goToNext}
            >
              <IoIosArrowForward size={30} />
            </button>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={closeLightbox}
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      )}

      <Contact />
    </>
  );
};

export default HistoricalTrips;
