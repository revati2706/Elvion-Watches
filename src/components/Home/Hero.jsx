import React from "react";
import HeroImg from "../../assets/img/HeroImg.jpg";
import smHeroImg from "../../assets/img/smHeroImg.jpg";

const Hero = () => {
  return (
    <section className="relative w-full md:h-screen overflow-hidden">
      <div className="hidden md:block w-full h-full">
        <img src={HeroImg} alt="" className="w-full h-full object-cover object-center" />
      </div>

      <div className="md:hidden w-full">
        <img src={smHeroImg} alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Hero;
