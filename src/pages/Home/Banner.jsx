import bgImage from "../../assets/images/bgImg.png";

const Banner = () => {
  return (
    <div>
      <header className="border border-[#EEF5FF] font-roboto px-11 mb-8 lg:mb-20">
        <div className="container px-6 py-16 mx-auto bg-[#EEF5FF] rounded-3xl shadow-2xl shadow-[#00072b36]">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-[88px] font-bold text-[#1A202C]">
                Let’s Learn <br /> & Earn
                </h1>

                <p className="mt-9 text-[#1A202C] text-4xl font-normal">
                Get a chance to win <br />up-to <span className="text-[#1A73E8] text-6xl font-bold">Rs. 15,000</span>
                </p>

                <button className="w-full px-14 py-4 mt-16 text-sm tracking-wider text-white transition-colors duration-300 transform bg-[#1A73E8] rounded-lg lg:w-auto hover:bg-blue-500 outline-none border-transparent">
                Refer Now
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl"
                src={bgImage}
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
