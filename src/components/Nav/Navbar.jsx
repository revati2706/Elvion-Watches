import React, { useState } from "react";
import menu from "../../assets/logo/menu.png";
import close from "../../assets/logo/close.png";
import location from "../../assets/logo/location.png";
import add from "../../assets/logo/add.png";

const Navbar = () => {
  const [Open, setOpen] = useState(false);
  const [dets, setdets] = useState({
    collection: false,
    craft: false,
    journal: false,
    support: false,
  });

  const toggel = (key) => {
    setdets({
    collection: false,
    craft: false,
    journal: false,
    support: false,
      [key]: !dets[key],
    });
  };

  return (
    <nav className="w-full h-28 shadow-md font-[inter] md:absolute z-20">
      {/* ---- TOP NAV ---- */}
      <div className="flex items-center p-10 justify-around max-w-[1400px] mx-auto md:flex-row-reverse lg:flex-row">
        <div className="lg:hidden">
          <img src={location} alt="" />
        </div>

        <ul className="hidden lg:flex gap-5 tracking-wide">
          <li
            className="relative cursor-pointer select-none"
            onClick={() => toggel("collection")}
          >
            <h1 className="flex items-center gap-2 hover:opacity-80 transition-all duration-300">
              Collection
            </h1>

            {dets.collection && (
              <div
                className="absolute left-0 top-full mt-3 w-56 bg-[#faefe2]/60 backdrop-blur-sm
                 shadow-lg rounded-xl p-5 flex flex-col gap-3 text-base text-[#33261a]
                 transition-all duration-300 animate-fade-in z-20"
              >
                <p className="hover:text-black transition-all duration-300 cursor-pointer">
                  All collections
                </p>
                <p className="hover:text-black transition-all duration-300 cursor-pointer">
                  Novelties
                </p>
                <p className="hover:text-black transition-all duration-300 cursor-pointer">
                  Les Cabinotiers
                </p>
                <p className="hover:text-black transition-all duration-300 cursor-pointer">
                  Exceptional timepieces
                </p>
              </div>
            )}
          </li>

          <li onClick={() => toggel("craft")}>
            <h1>Craftmanship</h1>
            {dets.craft && (
              <div className="mt-3 absolute flex flex-col gap-2 text-lg text-[#33261a] pl-4 p-10 bg-[#faefe2]/50 rounded-2xl">
                <p>Know-how</p>
                <p>Restoration</p>
                <p>Ateliers</p>
                <p>Innovation</p>
              </div>
            )}
          </li>

          <li onClick={() => toggel("journal")}>
            <h1>Journal</h1>
            {dets.journal && (
              <div className="mt-3 absolute flex flex-col gap-2 text-lg text-[#33261a] pl-4 p-10 bg-[#faefe2]/50 rounded-2xl">
                <p>Stories</p>
                <p>Behind the scenes</p>
                <p>Press</p>
                <p>Community</p>
              </div>
            )}
          </li>
        </ul>

        <h1 className="text-4xl font-[pfd] uppercase tracking-wider">ELVION</h1>

        <ul className="hidden lg:flex gap-5 tracking-wide capitalize">
          <li>Service</li>
          <li>Contact</li>
          <li>Boutique</li>
        </ul>

        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setOpen(!Open)}
        >
          {Open ? <img src={close} alt="" /> : <img src={menu} alt="" />}
        </div>
      </div>

      {/* ---- MOBILE NAV DRAWER ---- */}
      <div
        className={`absolute top-0 left-0 h-screen w-full lg:hidden 
        bg-[#f7f4ef] backdrop-blur-md text-[#786351] 
        transition-transform duration-700 z-10 ${
          Open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-between gap-20 h-full">
          {/* --- Drawer Header --- */}
          <div className="w-full p-5 flex justify-between items-center">
            <h1 className="font-[pfd] text-3xl uppercase">ELVION</h1>
            <ul className="flex text-sm gap-5">
              <li>Search</li>
              <li>Boutique</li>
              <li>Service</li>
            </ul>
          </div>

          {/* ---- DROPDOWNS ---- */}
          <ul className="flex flex-col gap-8 text-2xl uppercase px-8 font-light">
            <li className="w-full">
              <div
                className="flex justify-between w-full"
                onClick={() => toggel("collection")}
              >
                <h1>Collection</h1>
                <img
                  className={`h-5 w-5 transition duration-300 ${
                    dets.collection ? "rotate-45" : ""
                  }`}
                  src={add}
                />
              </div>
              {dets.collection && (
                <div className="mt-3 flex flex-col gap-2 text-lg text-[#33261a] pl-4">
                  <p>All collections</p>
                  <p>Novelties</p>
                  <p>Les Cabinotiers</p>
                  <p>Exceptional timepieces</p>
                </div>
              )}
            </li>

            <li className="w-full">
              <div
                className="flex justify-between w-full"
                onClick={() => toggel("craft")}
              >
                <h1>Craftmanship</h1>
                <img
                  className={`h-5 w-5 transition duration-300 ${
                    dets.craft ? "rotate-45" : ""
                  }`}
                  src={add}
                />
              </div>
              {dets.craft && (
                <div className="mt-3 flex flex-col gap-2 text-lg text-[#322519] pl-4">
                  <p>Our craftsmanship</p>
                  <p>Métiers d'Art</p>
                  <p>The art of restoration</p>
                </div>
              )}
            </li>

            <li className="w-full">
              <div
                className="flex justify-between w-full"
                onClick={() => toggel("journal")}
              >
                <h1>Journal</h1>
                <img
                  className={`h-5 w-5 transition duration-300 ${
                    dets.journal ? "rotate-45" : ""
                  }`}
                  src={add}
                />
              </div>
              {dets.journal && (
                <div className="mt-3 flex flex-col gap-2 text-lg text-[#33261a] pl-4">
                  <p>Stories</p>
                  <p>Behind the scenes</p>
                </div>
              )}
            </li>

            <li className="w-full">
              <div
                className="flex justify-between w-full"
                onClick={() => toggel("support")}
              >
                <h1>Support</h1>
                <img
                  className={`h-5 w-5 transition duration-300 ${
                    dets.support ? "rotate-45" : ""
                  }`}
                  src={add}
                />
              </div>
              {dets.support && (
                <div className="mt-3 flex flex-col gap-2 text-lg text-[#33261a] pl-4">
                  <p>Contact us</p>
                  <p>FAQ</p>
                </div>
              )}
            </li>
          </ul>

          {/* ---- SOCIAL + CLOSE BTN ---- */}
          <div className="flex flex-col items-center gap-10 pb-8">
            <ul className="flex gap-8 text-sm">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
            </ul>

            <div
              className="border p-2 cursor-pointer"
              onClick={() => setOpen(!Open)}
            >
              {Open ? <img src={close} alt="" /> : <img src={menu} alt="" />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
