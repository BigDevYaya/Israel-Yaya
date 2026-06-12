import { BriefcaseBusiness, CalendarCheck, Gift } from "lucide-react";

const Validate = () => {
  return (
    <section className="bg-[#FDF0E9] py-16 lg:py-20 px-6 md:px-12 lg:px-24">
     <div className="max-w-[1200px] w-full mx-auto">
         <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="flex-1 space-y-6">
          <div className="bg-[#EF6D58] gift p-6 w-fit rounded-full">
            <Gift className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="uppercase text-lg text-[#EF6D58] font-medium">
              Get Started
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl capitalize text-[#391400] font-bold mt-2">
              I help Companies
              <br />
              Move faster
            </h2>
            <p className="text-[#391400] leading-relaxed text-lg mt-4 max-w-lg">
              Put themselves in the shoes it's meant to partner on the long run
            </p>
            <button
              className="bg-[#EF6D58] text-lg px-6 py-3 rounded font-medium text-white mt-6 cursor-pointer"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="w-64 bg-white rounded-2xl p-6 hidden lg:block">
          <div className="w-12 h-12 rounded-full bg-[#F7CC47] mb-4" />
          <div className="space-y-3">
            <div className="bg-[#F5DED1] h-4 w-3/4 rounded-full" />
            <div className="bg-[#F5DED1] h-4 w-1/2 rounded-full" />
            <div className="bg-[#F5DED1] h-4 w-2/3 rounded-full" />
            <div className="bg-[#F5DED1] h-4 w-1/3 rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center mt-12 lg:mt-16">
        <div className="flex items-center border border-[#F3D1BF] px-6 sm:px-8 py-6 gap-4 flex-1 min-w-0">
          <div className="bg-[#EF6D58] p-4 sm:p-5 rounded-full shrink-0">
            <CalendarCheck className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-[#391400]">3+</p>
            <p className="text-base sm:text-lg text-[#391400]">years of experience</p>
          </div>
        </div>
        <div className="flex items-center border border-[#F3D1BF] px-6 sm:px-8 py-6 gap-4 flex-1 min-w-0">
          <div className="bg-[#EF6D58] p-4 sm:p-5 rounded-full shrink-0">
            <BriefcaseBusiness className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-[#391400]">10+</p>
            <p className="text-base sm:text-lg text-[#391400]">projects done</p>
          </div>
        </div>
      </div>
     </div>
    </section>
  );
};

export default Validate;
