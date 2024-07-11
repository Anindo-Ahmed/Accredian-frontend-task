import reffarls from "../../assets/images/refferral.png";
import user from "../../assets/images/user.svg";
import join from "../../assets/images/join.svg";
import bonus from "../../assets/images/bonus.svg";

const ReferralProcess = () => {
  return (
    <div className="bg-[#EEF5FF] py-6">
      <h2 className="text-3xl font-semibold font-roboto text-center mb-10">
        How Do I <span className="text-[#1A73E8]">Refer?</span>
      </h2>
      <div
        className="bg-custom-background h-[500px] w-full bg-cover bg-no-repeat grid grid-cols-3 justify-around relative"
        // style = {{
        //     height: "500px",
        //     width: "1387px",
        //     backgroundImage:
        //     `url(${reffarls})`,
        //     backgroundSize: "contain",
        //     backgroundRepeat: "no-repeat",
        //     position: "relative"
        // }}
      >
        <div className="flex flex-col items-center lg:translate-x-24 lg:translate-y-44">
          <div>
            <img src={user} alt="" />
          </div>
          <p className=" w-1/2 mt-8">
            Submit referrals easily via our website’s referral section.
          </p>
        </div>
        <div className="flex flex-col items-center lg:translate-x-18 lg:translate-y-44">
          <div>
            <img src={join} alt="" />
          </div>
          <p className=" w-1/2 mt-8">
          Earn rewards once your referral joins an Accredian program.
          </p>
        </div>
        <div className="flex flex-col items-center lg:-translate-x-16 lg:translate-y-44">
          <div>
            <img src={bonus} alt="" />
          </div>
          <p className=" w-1/2 mt-8">
          Both parties receive a bonus 30 days after program enrollment.
          </p>
        </div>
        
        
      </div>
      {/* <img src={reffarls} alt="" /> */}
      <div className="text-center">
        <button className="w-full px-14 py-4 mt-16 text-sm tracking-wider text-white transition-colors duration-300 transform bg-[#1A73E8] rounded-lg lg:w-auto hover:bg-blue-500 outline-none border-transparent">
          Refer Now
        </button>
      </div>
    </div>
  );
};

export default ReferralProcess;
