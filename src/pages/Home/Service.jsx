import { MdArrowRight } from "react-icons/md";
import serviceImg from "../../assets/images/service.svg";

const Service = () => {
  return (
    <div className="container px-6 bg-[#237CF2] mx-auto border border-transparent rounded-lg lg:mt-28 lg:mb-48">
        <div className="font-inter py-16 px-14 flex items-center justify-between">
      <div className="flex items-center gap-9">
        <img src={serviceImg} alt="" className="bg-white p-2 rounded-md" />
        <div>
          <h3 className="text-3xl text-white font-semibold mb-2">
            Want to delve deeper into the program?
          </h3>
          <p className="text-white">
            Share your details to receive expert insights from our program team!
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="flex items-center  border rounded-lg px-8 py-2 mt-12 tracking-wider text-[#3B82F6] transition-colors duration-300 transform bg-white lg:w-auto border-transparent">
        Get in touch
          <MdArrowRight className="text-2xl text-[#3B82F6]" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default Service;
