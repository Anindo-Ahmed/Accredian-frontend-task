const FAQ = () => {
  return (
    <div className="lg:mt-32 container px-12 mx-auto font-inter">
      <h2 className="text-3xl font-semibold font-roboto text-center mb-10">
        Frequently Asked <span className="text-[#1A73E8]">Questions</span>
      </h2>
      <div className="flex flex-col lg:flex-row lg:gap-24 justify-center">
        <div className="flex flex-col">
          <button className="w-full px-14 py-4 text-sm mt-5 tracking-wider text-[#737373] transition-colors duration-300 transform rounded-lg hover:shadow-2xl lg:w-auto border-2 border-[#737373] hover:text-[#1A73E8] hover:border-transparent">
            Eligibility
          </button>
          <button className="w-full px-14 py-4 text-sm mt-5 tracking-wider text-[#737373] transition-colors duration-300 transform rounded-lg hover:shadow-2xl lg:w-auto border-2 border-[#737373] hover:text-[#1A73E8] hover:border-transparent">
            How to Use?
          </button>
          <button className="w-full px-14 py-4 text-sm mt-5 tracking-wider text-[#737373] transition-colors duration-300 transform rounded-lg hover:shadow-2xl lg:w-auto border-2 border-[#737373] hover:text-[#1A73E8] hover:border-transparent">
            Terms & Conditions
          </button>
        </div>
        <div className="space-y-9 flex-1">
          <div className="collapse collapse-arrow hover:text-[#1A73E8]">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold hover:text-[#1A73E8] mb-7">
              Do I need to have prior Product Management and Project Management
              experience to enroll in the program?
            </div>
            <div className="collapse-content ">
              <p>
                No, the program is designed to be inclusive of all levels of
                experience. All topics will be covered from the basics, making
                it suitable for individuals from any field of work.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow hover:text-[#1A73E8]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold mb-7">
              What is the minimum system configuration required?
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
