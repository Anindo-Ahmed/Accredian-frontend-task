import { MdArrowDropDown, MdArrowRight } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";

const ReferralBenefis = () => {
  return (
    <div className="lg:mt-24 container px-6 mx-auto font-inter">
      <h2 className="text-3xl font-semibold font-roboto text-center mb-10">
        What Are The <span className="text-[#1A73E8]">Referral Benefits?</span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 justify-center lg:mt-16">
        <div className="flex flex-col items-stretch">
          <div className="dropdown dropdown-right ">
            <div
              tabIndex={0}
              role="button"
              className="btn text-black hover:text-white uppercase hover:bg-[#1A73E8]"
            >
              All Programs <MdArrowRight className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow"
            >
              <li>
                <a>
                  Product Management
                  <MdArrowRight className="text-xl" />
                </a>
              </li>
              <li>
                <a>
                  Strategy & Leadership
                  <MdArrowRight className="text-xl" />
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-right">
            <div
              tabIndex={0}
              role="button"
              className="btn text-black hover:text-white uppercase hover:bg-[#1A73E8]"
            >
              Digital Transformation <MdArrowRight className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>
                  Product Management
                  <MdArrowRight className="text-xl" />
                </a>
              </li>
              <li>
                <a>
                  Strategy & Leadership
                  <MdArrowRight className="text-xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-[#1350A0] font-bold text-xl bg-[#1a73e859] border border-transparent rounded-xl ">
                <tr>
                  <th>Programs</th>
                  <th>Referrer Bonus</th>
                  <th>Referee Bonus</th>
                </tr>
              </thead>
              <tbody className="bg-[#ebf3ff59] text-xl font-normal text-[#3C4852] px-6 py-4">
                {/* row 1 */}
                <tr> 
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-3">
                        <FaGraduationCap className="text-3xl text-blue-400"/>
                        <div className="max-w-96">Professional Certificate Program in Product Management</div>
                      </div>
                    </div>
                  </td>
                  <td>
                  ₹ 7,000
                  </td>
                  <td>₹ 9,000</td>
                </tr> 
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="flex border-[#B6B6B6] border-2 rounded-lg px-8 py-2 mt-12 text-sm tracking-wider text-gray-400 transition-colors duration-300 transform bg-white lg:w-auto border-transparent">
          Show More<MdArrowDropDown className="text-lg"/>
        </button>
      </div>
      <div className="text-center lg:mt-24">
        <button className="w-full px-14 py-4 mt-16 text-sm tracking-wider text-white transition-colors duration-300 transform bg-[#1A73E8] rounded-lg lg:w-auto hover:bg-blue-500 outline-none border-transparent">
          Refer Now
        </button>
      </div>
    </div>
  );
};

export default ReferralBenefis;
