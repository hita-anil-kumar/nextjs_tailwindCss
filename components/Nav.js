/*import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import whiteLogo from "../assets/whiteLogo.png";
import search from "../assets/search.png";


export default function Nav() {
  const [open, setOpen] = useState(false)
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
          <div className="relative rounded-md shadow-sm  max-w-657 w-85p ml-1/10">
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
          <div className="flex justify-between msm:invisible lap:visible">
              <div className="mx-10 ml-42 w-47 h-20 font-Manrope not-italic font-extrabold text-15 text-white leading-5"><Link href='/lorem'>Lorem</Link></div>
              <div className="mx-10 w-47 h-20 font-Manrope not-italic font-extrabold text-15 text-white leading-5"><Link href='/lorem'>Lorem</Link></div>
              <div className="mx-10 mr-42 w-47 h-20 font-Manrope not-italic font-extrabold text-15 text-white leading-5"><Link href='/lorem'>Lorem</Link></div>
          </div>
       
</div>
    )
}
*/
import { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import whiteLogo from "../assets/whiteLogo.png";
import search from "../assets/search.png";


function NavLink({to, children}) {
    return <p href={to} className={`mx-4`}>
        {children}
    </p>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
            <div className="ml-40">
            <Image
            src={whiteLogo}
            alt="Main logo"
            width={195}
            height={23}
            />
       </div>
            </div>
            <div className="flex flex-col ml-4">
                <p className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </p>
                <p className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </p>
            </div>  
        </div>
    )
}

export default function Nav() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-headerColor h-96 px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">

            <div className="ml-40">
            <Image
            src={whiteLogo}
            alt="Main logo"
            width={195}
            height={23}
            />
            </div>
            </div>

            <div className="w-9/12 flex justify-end items-center">

            <div className="relative rounded-md shadow-sm  max-w-657 w-85p ml-1/10">
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

                <div className="z-50 flex relative ml-40 w-20 h-20 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 mr-[20px] w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 mr-[20px] w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 mr-[20px] w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>
                

                <div className=" hidden md:flex">
                <div className="mx-10 ml-42 w-47 h-20 font-Manrope not-italic font-extrabold text-15 text-white leading-5"><Link href="/Lorem">Lorem</Link></div>
                <div className="mx-10 ml-42 w-47 h-20 font-Manrope not-italic font-extrabold text-15 text-white leading-5"><Link href="/Lorem">Lorem</Link></div>
                <div className="mx-10 ml-42 w-47 h-20 font-Manrope not-italic font-extrabold text-15 text-white leading-5"><Link href="/Lorem">Lorem</Link></div>
                     
                </div>
            </div>
        </nav>
    )
}