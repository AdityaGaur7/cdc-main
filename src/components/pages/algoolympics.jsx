import React from 'react';
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTrophy,
  FaUsers,
  FaCode,
  FaLaptopCode,
  FaKeyboard,
  FaCheckCircle
} from 'react-icons/fa';
import { HiMiniSquare3Stack3D } from "react-icons/hi2";

const Event = () => {
  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">
      {/* Background Icons */}
      <FaCode className="absolute text-gray-700 text-9xl top-10 left-10 opacity-10" />
      <FaLaptopCode className="absolute text-gray-700 text-9xl top-1/2 left-1/3 opacity-10 -translate-y-1/2" />
      <FaKeyboard className="absolute text-gray-700 text-9xl bottom-10 right-10 opacity-10" />

      {/* Header Section */}
      <header className="py-6 bg-gray-900 shadow-lg relative z-10">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider text-white">
            AlgoOlympics
          </h1>
          <button className="bg-blue-600 hover:bg-blue-800 text-white py-3 px-6 rounded-lg shadow-lg text-lg font-medium transition duration-300 ease-in-out">
            Register Now
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 mt-10 relative z-10">
        {/* About the Event Section */}
        <section className="bg-gray-800 text-gray-200 p-10 rounded-lg shadow-lg mb-10 ">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 flex items-center border-b-4 border-gray-700 pb-2">
            <FaUsers className="mr-4 text-gray-500 text-5xl" /> About the Event
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
            Join us for an inter-college coding competition that pushes your coding and teamwork skills to the limit. Compete for prizes and prestige!
          </p>
          
          {/* Additional Details with Shades */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* Hands-On Coding Challenges */}
            <div className="flex flex-col items-start space-y-4 bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-1000">
              <div className="flex items-center space-x-4 mb-4">
                <FaCode className="text-blue-400 text-6xl" />
                <h3 className="text-2xl font-semibold text-white">Hands-On Coding Challenges</h3>
              </div>
              <p className="text-lg text-gray-300">
                Solve algorithmic challenges that test your coding abilities and problem-solving speed.
              </p>
            </div>

            {/* Team Collaboration */}
            <div className="flex flex-col items-start space-y-4 bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-1000">
              <div className="flex items-center space-x-4 mb-4">
                <FaLaptopCode className="text-green-400 text-6xl" />
                <h3 className="text-2xl font-semibold text-white">Team Collaboration</h3>
              </div>
              <p className="text-lg text-gray-300">
                Work with your team to tackle problems and strategize for success.
              </p>
            </div>

            {/* Exciting Prizes */}
            <div className="flex flex-col items-start space-y-4 bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-1000">
              <div className="flex items-center space-x-4 mb-4">
                <FaTrophy className="text-yellow-400 text-6xl" />
                <h3 className="text-2xl font-semibold text-white">Exciting Prizes</h3>
              </div>
              <p className="text-lg text-gray-300">
                Win awesome prizes and gain recognition as the top coders in the competition.
              </p>
            </div>

            {/* Live Debugging Rounds */}
            <div className="flex flex-col items-start space-y-4 bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-1000">
              <div className="flex items-center space-x-4 mb-4">
                <FaKeyboard className="text-red-400 text-6xl" />
                <h3 className="text-2xl font-semibold text-white">Time Crunch Challenge</h3>
              </div>
              <p className="text-lg text-gray-300">
                Test your coding skills in real-time with challenging questions.
              </p>
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section className="grid gap-8 md:grid-cols-3 relative mb-10">
          {/* Event Details */}
      {/* Event Details Card */}
      <div className="bg-gray-800 text-gray-200 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-blue-500 hover:shadow-blue-500/50 duration-1000 ease-in-out">
  <div className="flex items-center mb-6">
    <FaTrophy className="text-blue-400 text-6xl mr-4" />
    <h3 className="text-2xl md:text-3xl font-semibold text-blue-400">
      Event Details
    </h3>
  </div>
  <ul className="list-none space-y-4 text-lg text-gray-300 pl-2"> {/* Adjusted padding */}
    <li className="flex items-center space-x-4">
      <HiMiniSquare3Stack3D className="text-blue-400 text-2xl mr-2" />
      <span className="text-xl md:text-2xl">Max Team Size: 3 members</span>
    </li>
    <li className="flex items-center space-x-4">
      <HiMiniSquare3Stack3D className="text-blue-400 text-2xl mr-2" />
      <span className="text-xl md:text-2xl">Registration Fee: ₹120 per team</span>
    </li>
    <li className="flex items-center space-x-4">
      <HiMiniSquare3Stack3D className="text-blue-400 text-2xl mr-2" />
      <span className="text-xl md:text-2xl">Exciting Goodies for Winners</span>
    </li>
  </ul>
</div>


{/* Date & Time Card */}
<div className="bg-gray-800 text-gray-200 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-green-500 hover:shadow-green-500/50 duration-1000 ease-in-out">
  <div className="flex items-center mb-6">
    <FaCalendarAlt className="text-green-400 text-5xl mr-4" />
    <h3 className="text-2xl md:text-3xl font-semibold text-green-400">
      Date & Time
    </h3>
  </div>
  <div className="flex flex-col items-start mt-8 pl-4"> {/* Aligning to the left */}
    <p className="text-xl md:text-2xl text-gray-300 mb-3">December 15, 2024</p>
    <p className="text-xl md:text-2xl text-gray-300">10:00 AM - 4:00 PM</p>
  </div>
</div>

{/* Venue Card */}
<div className="bg-gray-800 text-gray-200 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-red-500 hover:shadow-red-500/50 duration-1000 ease-in-out">
  <div className="flex items-center mb-6">
    <FaMapMarkerAlt className="text-red-400 text-5xl mr-4" />
    <h3 className="text-2xl md:text-3xl font-semibold text-red-400">
      Venue
    </h3>
  </div>
  <div className="flex flex-col items-start pl-4"> {/* Aligning to the left */}
    <p className="text-xl md:text-2xl text-gray-300 mb-4">ITRC, Main Campus</p> {/* Added mb-4 for spacing */}
    <p className="text-xl md:text-2xl text-gray-300">Madan Mohan Malaviya University of Technology</p> {/* Increased text size */}
  </div>
</div>


        </section>

        {/* Call to Action */}
        <section className="text-center mt-16 mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
            Don’t miss out on this exciting opportunity!
          </h3>
          <button className="bg-blue-600 hover:bg-blue-800 text-white py-4 px-8 rounded-lg text-lg font-medium shadow-lg transition duration-1000 ease-in-out">
            Register Now
          </button>
        </section>
      </main>
    </div>
  );
};

export default Event;