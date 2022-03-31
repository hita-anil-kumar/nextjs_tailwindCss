import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import whiteLogo from "../assets/whiteLogo.png";
import search from "../assets/search.png";

export default function Nav() {
    return (
        <div className="w-full h-96 mt-px bg-headerColor text-white flex justify-between items-center">
          <div className="ml-40 mr-20">
               <Image
               src={whiteLogo}
               alt="Main logo"
               width={195}
               height={23}
               />
          </div>
          <div className="relative rounded-md shadow-sm  max-w-657 w-1/2">
            <div className="absolute inset-y-0 left-0 pl-19 pt-8 flex items-center pointer-events-none">
              <button>
              <Image
              src={search}
              alt="Search"
              width={17.77}
              height={17.77}
              />
              </button>             
            </div>
            <input type="text" className="w-full focus:outline-none focus:border-dark-jungle focus:ring-dark-jungle block indent-37 h-36 pl-14 pr-12 sm:text-sm bg-dark-jungle shadow-navSearch rounded-10 font-Manrope not-italic font-semibold text-13 text-dawn leading-18" placeholder="Lorem ipsum">
            </input>              
          </div>
          <div className="flex justify-between">
              <div className="mx-10 ml-42 w-47 h-20 font-Manrope not-italic font-extrabold text-15 text-white leading-5"><Link href='/lorem'>Lorem</Link></div>
              <div className="mx-10 w-47 h-20 font-Manrope not-italic font-extrabold text-15 text-white leading-5"><Link href='/lorem'>Lorem</Link></div>
              <div className="mx-10 mr-42 w-47 h-20 font-Manrope not-italic font-extrabold text-15 text-white leading-5"><Link href='/lorem'>Lorem</Link></div>
          </div>
        </div>
    )
}
