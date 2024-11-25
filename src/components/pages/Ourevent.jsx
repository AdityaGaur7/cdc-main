import React, { useState } from 'react';
import Event from './algoolympics';
import { NavLink } from 'react-router-dom';

const OurEvents = () => {
  
  const [selectedEvent, setSelectedEvent] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  
  const handleClick = (eventName) => {
    setSelectedEvent(eventName);
    setDropdownOpen(false); 
  };

  
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <>
   
    <div className="px-4 py-1 min-h-screen  relative sm:px-8 bg-gray-900 text-white">
      {/* Upcoming Events Section */}
      <div
    className="absolute inset-0 top-0 right-0 blur-3xl z-[0] "
    style={{
      background:
        "radial-gradient(circle, rgba(23,20,27,1) 0%, rgba(58,94,121,1) 66%, rgba(42,58,78,1) 90%)",
    }}
  />
     
      <div className="flex flex-col items-center text-center z-[19]">
        <div className='z-[8]'>
          <h1 className="text-5xl z-[8] font-bold mt-16">UPCOMING EVENTS</h1>
        </div>
        <div className='z-[8]'>
          <h2 className="text-xl sm:text-2xl my-5 z-[8]">Register here for our upcoming events</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 z-[8]">
          <button className="bg-blue-700  hover:bg-blue-800  transition duration-1000 h-10 w-40 rounded font-semibold">REGISTER</button>
          <NavLink to="eve"><button className="bg-blue-700  hover:bg-blue-800 transition duration-1000 h-10 w-40 rounded font-semibold">KNOW MORE</button></NavLink>
        </div>
      </div>

      <div className="flex justify-center items-center h-[30vh] sm:h-[50vh] mt-5 z-[8]">
        <h1 className="text-3xl sm:text-4xl z-[8]">ONGOING EVENTS</h1>
      </div>

      <div className="h-[80vh] mt-10 sm:mt-20 z-[20] ">
 
        <h1 className=" relative text-center text-3xl sm:text-4xl my-5 z-[20]">OUR EVENTS</h1>
        <div className="flex flex-col sm:flex-row justify-center gap-8 relative z-[15]">
                  
          <div className="w-full sm:w-auto lg:bg-black rounded-xl ">
   
            <div className="block lg:hidden justify-center flex relative">
              <button
                onClick={toggleDropdown}
                className="bg-blue-600 text-white text-center px-4 py-2 rounded-lg mx-auto"
              >
                Select Event
              </button>
              {dropdownOpen && (
                <ul className="absolute top-full mt-2 border-2 border-blue-600 rounded-xl w-full z-10 bg-gray-900">
                  {['GAME OF CODES', 'WEBINAR', 'GENESIS', 'ORIENTATION', 'CODE CASCADE', 'SYNTAX SIEGE'].map((event) => (
                    <li
                      key={event}
                      className="cursor-pointer px-4 py-2 hover:bg-blue-700 rounded-lg"
                      onClick={() => handleClick(event)}
                    >
                      {event}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="hidden lg:block">
              <ul className="flex flex-col gap-4 sm:gap-10 border-2 border-blue-600 px-4 py-4 sm:px-6 sm:py-6 rounded-xl">
                {['GAME OF CODES', 'WEBINAR', 'GENESIS', 'ORIENTATION', 'CODE CASCADE', 'SYNTAX SIEGE'].map((event) => (
                  <li
                    key={event}
                    className="cursor-pointer hover:text-blue-400"
                    onClick={() => handleClick(event)}
                  >
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="sm:flex flex-col justify-center items-center border-2 border-blue-600 lg:bg-black px-4 py-4 rounded-xl w-full">
            <h2 className="text-xl text-center">{selectedEvent ? `Details for: ${selectedEvent}` : "Select an event to see details"}</h2>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default OurEvents;
