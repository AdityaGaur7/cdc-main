import React from "react";
export const Footer = () => {
  return (
    <footer className="bg-[#1D1C20] text-[#F4F4F5] p-5 sm:p-10 flex flex-col sm:flex-row justify-between font-inter">
      <div className="footer-section mb-5 sm:mb-0">
        <h3 className="text-2xl font-poppins font-extrabold mb-2">
        ©CODERS & DEVELOPERS CLUB
        </h3>  
        <p className="text-xl">MADAN MOHAN MALAVIYA</p>
        <p className="text-xl">UNIVERSITY OF TECHNOLOGY</p>
        <p className="text-xl">GORAKHPUR, UTTAR PRADESH 273010</p>
      </div>

      <div className="footer-section mb-5 sm:mb-0">
        <h4 className="uppercase font-semibold mb-2 text-xl">Navigation</h4>
        <ul className="list-none space-y-2 text-[#838AA7]">
          <li className="text-lg">
            <a href="#" className="hover:text-[#F4F4F5] ">Event</a>
          </li>
          <li className="text-lg">
            <a href="#" className="hover:text-[#F4F4F5] ">Contact us</a>
          </li>
          <li className="text-lg">
            <a href="#" className="hover:text-[#F4F4F5] ">Team</a>
          </li>
          <li className="text-lg">
            <a href="#" className="hover:text-[#F4F4F5] ">Verify</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4 className="uppercase font-semibold mb-2 text-xl">Know Us</h4>
        <ul className="list-none space-y-2">
          <li>
            <a href="https://www.youtube.com/@cdcmmmut" target= "_blank" className="flex items-center text-gray-400 hover:text-white">
              <img src="./socialicons/youtube.png" className="h-5 mr-2" alt="YouTube" />
              <span className="text-lg">YouTube</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/cdc.mmmut/"target= "_blank" className="flex items-center text-gray-400 hover:text-white">
              <img src="./socialicons/instagram.png" className="h-5 mr-2" alt="Instagram" />
              <span className="text-lg">Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@cdcmmmut" target= "_blank" className="flex items-center text-gray-400 hover:text-white">
              <img src="./socialicons/telegram.png" className="h-5 mr-2" alt="Telegram" />
              <span className="text-lg">Telegram</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/codechef-mmmut-chapter" target= "_blank" className="flex items-center text-gray-400 hover:text-white">
              <img src="./socialicons/linkedin.png" className="h-5 mr-2" alt="LinkedIn" />
              <span className="text-lg">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};