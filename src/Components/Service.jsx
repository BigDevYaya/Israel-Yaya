import { Code, AppWindow, Server } from "lucide-react";
import React from "react";

const services = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'I bring web designs to life with clean, scalable code using modern frameworks like React and Tailwind CSS.'
  },
  {
    icon: AppWindow,
    title: 'Application Development',
    description: 'Building responsive web applications with great user experiences, from concept to deployment.'
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Developing robust server-side logic, APIs, and database integrations to power your applications.'
  }
]

const Service = () => {
  return (
    <section id="services" className="bg-[#FDF0E9]">
      <div className="flex flex-col lg:flex-row items-start justify-center gap-4 lg:gap-8 py-12 lg:py-20 transition-all duration-1000 ease-in-out max-w-[1200px] mx-auto w-full px-4 md:px-7">
        <div>
          <p className="uppercase animate-slideIn text-lg text-[#EF6D58] font-medium">
            Service
          </p>
          <h1 className="text-3xl md:text-6xl capitalize max-w-md text-[#391400] font-bold">
            How can i help you with
          </h1>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 w-full mt-5">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="col-span-1 space-y-4 border border-[#F3D1BF] rounded-md px-4 md:px-6 py-8 md:py-10">
                <div className="flex items-center gap-2">
                  <div className="bg-[#EF6D58] p-3 text-white rounded-full">
                    <Icon />
                  </div>
                  <h3 className="text-[#391400] text-lg font-bold capitalize">
                    {service.title}
                  </h3>
                </div>
                <p className="max-w-sm text-[#391400] text-sm leading-6">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
