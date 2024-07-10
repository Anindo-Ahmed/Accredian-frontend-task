import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const NavBar = () => {
  
  return (
    <nav x-data="{ isOpen: false }" class="relative bg-white font-inter">
      <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <a href="#">
            <img
              class="w-auto h-6 sm:h-7"
              src={logo}
              alt=""
            />
          </a>
          <button class="my-2 text-white bg-[#1A73E8] border-transparent rounded-md md:px-5 md:py-2 ml-8" href="#">Courses</button>

          {/* <!-- Mobile menu button --> */}
          <div class="flex lg:hidden">
            <button
              x-cloak
              click="isOpen = !isOpen"
              type="button"
              class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg
                x-show="!isOpen"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>

              <svg
                x-show="isOpen"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div
          x-cloak:class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
          class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
        >
          <div class="flex flex-col md:flex-row md:mx-6 items-center">
            <a class="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-[#1A73E8] md:mx-4 md:my-0" href="#">Refer & Earn</a>
                <a class="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-[#1A73E8] md:mx-4 md:my-0" href="#">Resources</a>
                <a class="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-[#1A73E8] md:mx-4 md:my-0" href="#">About us</a>
                <a class="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-[#1A73E8] md:mx-4 md:my-0" href="#">Login</a>
                <button class="my-2 text-white bg-[#1A73E8] border-transparent rounded-md md:px-5 md:py-2" href="#">Try for free</button>
          </div>
        </div>
      </div>
      <div className="mx-auto bg-[#1a73e81c] lg:w-[800px] border rounded-[38px] px-14 py-5 items-center md:mt-16 mb-6">
        <ul className="flex flex-col lg:flex-row gap-14 justify-around text-center font-roboto text-[#1A73E8] text-2xl">
            <li>Refer</li>
            <li>Benefits</li>
            <li>FAQs</li>
            <li>Support</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
