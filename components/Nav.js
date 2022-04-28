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

{/*Navigation bar for small screens */}
function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-max w-screen bg-headerColor transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-gradient-to-r from-navLine1 to-navLine2 w-full h-96">
            </div>

             {/*Links*/}
            <div className="flex flex-col ml-4 h-1/10 items-center ">  
                <p className=" mt-[10px] font-Manrope not-italic font-normal text-lg text-white leading-5" href="/Lorem" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Lorem</p>
                <p className="mt-[20px] font-Manrope not-italic font-normal text-lg text-white leading-5" href="/Lorem" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Lorem</p>
                <p className="mt-[20px] mb-[10px] font-Manrope not-italic font-normal text-lg text-white leading-5" href="/Lorem" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Lorem</p>
            </div>  
        </div>
    )
}

export default function Nav() {

    const [open, setOpen] = useState(false)
    return (
    <div className='msm: h-[200px] lg:h-96 bg-gradient-to-r from-rangoon via-tuna to-rhino w-full'>
        <nav className="flex bg-headerColor h-96 items-center">
            <MobileNav open={open} setOpen={setOpen}/>

            {/*main logo */}
            <div className="w-1/2">
            <div className="ml-40">
            <Image
            src={whiteLogo}
            alt="Main logo"
            width={195}
            height={23}
            />
            </div>
            </div>
          
            {/*Search bar */}
            <div className="w-9/12 flex justify-end items-center">
                <div className="relative max-w-657 w-85p ml-1/20">
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
                    <input type="text" className="w-full focus:outline-none focus:border-dark-jungle focus:ring-dark-jungle block indent-37 h-45 pl-19 pr-12 sm:text-sm bg-dark-jungle shadow-navSearch rounded-10 font-Manrope not-italic font-semibold text-13 text-dawn leading-17.76" placeholder="Lorem ipsum">
                    </input>              
                 </div>
                
                {/*hamburger menu */}
                <div className="z-50 flex relative ml-40 w-20 h-20 flex-col justify-between items-center lg:hidden" onClick={() => {setOpen(!open) }}>
                    <span className={`h-1 mr-[20px] w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 mr-[20px] w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 mr-[20px] w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>
                
                {/*Links */}
                <div className=" hidden lg:flex">
                    <div className="mx-10 ml-41 w-47 h-20 font-Manrope not-italic font-extrabold text-15 text-white leading-5 hover:text-redpink"><Link href="/Lorem">Lorem</Link></div>
                    <div className="mx-10 ml-41 w-47 h-20 font-Manrope not-italic font-extrabold text-15 text-white leading-5 hover:text-redpink"><Link href="/Lorem">Lorem</Link></div>
                    <div className="mx-10 ml-41 mr-42 w-47 h-20 font-Manrope not-italic font-extrabold text-15 text-white leading-5 hover:text-redpink"><Link href="/Lorem">Lorem</Link></div>                     
                </div>
            </div>
        </nav>
            <div className="z-40 w-full h-6 bg-gradient-to-r from-navLine1 to-navLine2 w-full lg:visible">
            </div>
    </div>
    )
}