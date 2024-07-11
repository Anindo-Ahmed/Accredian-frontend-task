import Banner from "./Banner";
import FAQ from "./FAQ";
import ReferralBenefis from "./ReferralBenefis";
import ReferralProcess from "./ReferralProcess";
import Service from "./Service";

const Home = () => {

  return (
    <div>
        <Banner/>
        <ReferralProcess/>
        <ReferralBenefis/>
        <FAQ/>
        <Service/>
    </div>
  );
};

export default Home;
