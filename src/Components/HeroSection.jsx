import React from "react";
import Header from "./Header";
import TypingText from "./TypingText";

const StaggerText = ({ text, className }) => (
  <span className={className}>
    {text.split('').map((char, i) => (
      <span
        key={i}
        className="inline-block animate-stagger"
        style={{ animationDelay: `${i * 0.05}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </span>
);

const HeroSection = () => {
  return (
    <section className="bg-[#00003d] lg:h-svh pb-7 relative text-white w-full hero-section overflow-hidden">
      <Header />

      <div className="flex flex-col max-w-[1200px] pt-10 mx-auto items-center justify-center w-full h-full overflow-hidden">
        <p className="self-start md:-mb-8 text-2xl text-[#EF6D58] italic animate-fadeIn opacity-0 mx-5 md:mx-0">Hi, I'm</p>

        <h1 className="text-white self-start text-5xl md:self-center md:text-[180px] font-extrabold uppercase mx-5 md:mx-0">
          <StaggerText text="Israel Yaya" />
        </h1>

        <p className="self-start md:self-end md:-mt-2 mb-5 text-[#EF6D58]  text-2xl mx-5 md:mx-0">
          <TypingText />
        </p>

        <div className="h-[40%] w-full relative flex items-center justify-center mx-5 md:mx-0">
          <img
            src="/hhh.png"
            className="h-[90%] w-full object-cover relative "
          />

          <img
            src="/hhh2.png"
            className="absolute hidden md:inline -top-[60%] inset-x-0 w-full z-0 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
