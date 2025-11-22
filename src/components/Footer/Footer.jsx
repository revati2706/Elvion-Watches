import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-12 bg-[#faefe2] text-[#2e2014]">
      
      {/* Brand + Tagline */}
      <div className="flex flex-col items-center gap-2 mb-8">
        <span className="text-3xl font-[pfd] uppercase tracking-wide">Elvion</span>
        <p className="font-[inter] text-sm opacity-80">
          Crafting timepieces built to be remembered.
        </p>
      </div>

      <hr className="w-3/4 md:w-5/6 border border-[#2e2014]/20" />

      {/* Link Sections */}
      <div className="w-full p-10 flex flex-col md:flex-row flex-wrap items-start md:items-center justify-around gap-10 font-[inter]">
        
        <div className="flex flex-col gap-2">
          <span className="uppercase text-xl font-semibold">Collection</span>
          <ul className="uppercase opacity-80 space-y-1">
            <li className="hover:opacity-100 cursor-pointer">Men</li>
            <li className="hover:opacity-100 cursor-pointer">Women</li>
            <li className="hover:opacity-100 cursor-pointer">Limited Edition</li>
            <li className="hover:opacity-100 cursor-pointer">Signature</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <span className="uppercase text-xl font-semibold">Explore</span>
          <ul className="uppercase opacity-80 space-y-1">
            <li className="hover:opacity-100 cursor-pointer">Heritage</li>
            <li className="hover:opacity-100 cursor-pointer">Journal</li>
            <li className="hover:opacity-100 cursor-pointer">Press Release</li>
            <li className="hover:opacity-100 cursor-pointer">Archive</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <span className="uppercase text-xl font-semibold">Craftsmanship</span>
          <ul className="uppercase opacity-80 space-y-1">
            <li className="hover:opacity-100 cursor-pointer">Materials</li>
            <li className="hover:opacity-100 cursor-pointer">Engineering</li>
            <li className="hover:opacity-100 cursor-pointer">Artisans</li>
            <li className="hover:opacity-100 cursor-pointer">Innovation</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <span className="uppercase text-xl font-semibold">Support</span>
          <ul className="uppercase opacity-80 space-y-1">
            <li className="hover:opacity-100 cursor-pointer">Warranty</li>
            <li className="hover:opacity-100 cursor-pointer">Contact</li>
            <li className="hover:opacity-100 cursor-pointer">FAQ</li>
            <li className="hover:opacity-100 cursor-pointer">Returns</li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center gap-3 font-[inter] text-sm mt-5">
        <span className="opacity-80">© 2025 ELVION. All Rights Reserved.</span>
        
        <div className="flex gap-5">
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Terms of Use</span>
        </div>
      </div>

    </footer>
  )
}

export default Footer
