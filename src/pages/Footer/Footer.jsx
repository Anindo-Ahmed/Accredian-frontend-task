import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import logoLight from "../../assets/images/logo_light.png";

const Footer = () => {
  return (
    <div className="bg-[#282828] text-white py-8 lg:px-48 font-roboto">
      <div className="flex flex-row justify-between items-center">
        <div>
          <img src={logoLight} alt="" />
        </div>
        <div>
          <button
            class="my-2 text-white bg-[#007BFF] border border-white rounded-md md:px-5 md:py-2"
            href="#"
          >
            Schedule 1-on-1 Call Now
          </button>
          <p>Speak with our Learning Advisor</p>
        </div>
      </div>
      <hr className="w-full text-gray-500 my-8 border-2" />
      <div className="flex flex-row gap-5 justify-evenly">
        <div>
        <h2 className="text-xl ml-4">Programs</h2> 
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-lg font-bold">
            Data Science & AI
            </div>
            <div className="collapse-content">
              <p className="text-sm">Data Science</p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-lg font-bold">
            Product Management
            </div>
            <div className="collapse-content">
              <p className="text-sm">Product Management</p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-lg font-bold">
            Business Analytics
            </div>
            <div className="collapse-content">
              <p className="text-sm">Business Analytics</p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-lg font-bold">
            Digital Transformation
            </div>
            <div className="collapse-content">
              <p className="text-sm">Digital Transformation</p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-lg font-bold">
            Business Management
            </div>
            <div className="collapse-content">
              <p className="text-sm">Business Management</p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-lg font-bold">
            Project Management
            </div>
            <div className="collapse-content">
              <p className="text-sm">Project Management</p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-lg font-bold">
            Strategy & Leadership
            </div>
            <div className="collapse-content">
              <p className="text-sm">Strategy & Leadership</p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-lg font-bold">
            Senior Management
            </div>
            <div className="collapse-content">
              <p className="text-sm">Senior Management</p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-lg font-bold">
            Fintech
            </div>
            <div className="collapse-content">
              <p className="text-sm">Fintech</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl">Contact Us</h2>
          <p className="py-1 text-sm">
            Email us (For Data Science Queries): admissions@accredian.com
          </p>
          <p className="py-1 text-sm">
            Email us (For Product Management Queries):pm@accredian.com
          </p>
          <p className="py-1 text-sm">
            Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
          </p>
          <p className="py-1 text-sm">
            Product Management Admission Helpline:+91 9625811095
          </p>
          <p className="py-1 text-sm">
            Enrolled Student Helpline: +91 7969322507
          </p>
          <p className="py-1 text-sm">
            Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
            Gurugram, <br /> Haryana 122015
          </p>
          <a href="https://accredian.com/whyaccredian">Why Accredian</a>
          <h2 className="text-xl">Follow Us</h2>
          <div className="flex flex-row gap-4 mt-2">
            <FaFacebook />
            <FaLinkedinIn />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
        <div>
          <h2 className="text-xl mb-1">Accredian</h2>
          <ul className="text-sm">
            <li>About</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Admission Policy</li>
            <li>Referral Policy</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Master FAQs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
