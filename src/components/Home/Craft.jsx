import React from "react";
import craftImg from "../../assets/img/craftImg.jpg";
import boutique from "../../assets/img/boutique.jpg";

const Craft = () => {
  return (
    <section className="w-full py-14 md:py-24">

      {/* CRAFT SECTION */}
      <div className="flex border p-10 flex-col-reverse md:flex-row-reverse items-center gap-12 md:gap-20 px-6 md:px-12">
        
        {/* IMAGE */}
        <div className="w-full max-w-[360px] md:max-w-[750px] lg:max-w-[900px] overflow-hidden rounded-2xl shadow-md">
          <img
            src={craftImg}
            alt="Craft Image"
            className="w-full h-[380px] md:h-[700px] lg:h-[900px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5 font-[inter]">
          <span className="uppercase tracking-[3px] text-xs md:text-sm text-[#7a6a5a]">
            Craftsmanship
          </span>

          <h2 className="font-[pfd] text-3xl md:text-5xl leading-tight">
            Where Art Becomes Time
          </h2>

          <p className="hidden md:block max-w-[440px] text-sm md:text-base opacity-80 leading-relaxed">
            Where master hands meet visionary design—crafting timepieces shaped
            by passion, precision, and timeless heritage.
          </p>

          <button className="mt-3 px-6 py-2 border-b border-black hover:opacity-70 transition-all duration-300 tracking-wide">
            Discover Art
          </button>
        </div>
      </div>

      {/* BOUTIQUE SECTION */}
      <div className="flex border p-10 flex-col items-center md:flex-row gap-12 md:gap-20 px-6 md:px-12 mt-16">
        
        <div className="overflow-hidden rounded-2xl max-w-[360px] md:max-w-[600px] lg:max-w-[950px] shadow-md">
          <img
            className="w-full h-[380px] md:h-[700px] lg:h-[900px] object-cover hover:scale-105 transition-transform duration-700"
            src={boutique}
            alt="Luxury boutique"
          />
        </div>

        <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left font-[inter]">
          <span className="text-sm tracking-[3px] uppercase opacity-70">
            Services
          </span>

          <h2 className="font-[pfd] text-3xl md:text-5xl leading-tight">
            Find the nearest boutique
          </h2>

          <p className="hidden md:block max-w-[380px] text-sm font-light opacity-80">
            Step inside and experience craftsmanship brought closer than ever.
          </p>

          <button className="tracking-wide px-4 py-2 border-b hover:opacity-60 transition-all duration-300">
            Explore Boutiques
          </button>
        </div>
      </div>
    </section>
  );
};

export default Craft;

